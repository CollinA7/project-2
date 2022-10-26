const router = require('express').Router();
const { User, Customer, Order } = require('../../models');

// get all users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: Customer,
                attributes: [
                    'id',
                    'customer_name',
                    'customer_phone',
                    'created_at',
                ],
            },
            {
                model: Order,
                attributes: ['order_id', 'name'],
            },
        ],
    })
        .then((dbUserData) => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' })
                return
            }
            res.json(dbUserData)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json(err)
        })
})

// CREATE new user
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    User.findOne({
        where: {
            username: req.body.username,
        },
    }).then((dbUserData) => {
        if (!dbUserData) {
            res.status(400).json({
                message: 'No user with this username!',
            })
            return
        }

        const validPassword = dbUserData.checkPassword(req.body.password)

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' })
            return
        }

        req.session.save(() => {
            req.session.user_id = dbUserData.id
            req.session.username = dbUserData.username
            req.session.loggedIn = true

            res.json({ user: dbUserData, message: 'You are now logged in!' })
        })
    })
})
// Logout
router.post('/logout', (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
