const createBtn = document.getElementById('createBtn');
const reviewBtn = document.getElementById('reviewBtn');

// Create A New Order Button Function
  function redirectCreate() {
    console.log('button works!');
    location.href = '#'
  };

// Review Order Button Function
  function redirectReview(){
    console.log(' this button also works!');
    location.href = '#'
  }
  
  createBtn.addEventListener('click', redirectCreate);
  reviewBtn.addEventListener('click', redirectReview);
