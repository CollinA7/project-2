async function customerFormHandler(event) {
    event.preventDefault()

    const name = document.querySelector('#order_name').value.trim()
    const phone = document.querySelector('#password-login').value.trim()

    if (name && phone) {
        const response = await fetch('/api/customer', {
            method: 'post',
            body: JSON.stringify({
                name,
                phone,
            }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            document.location.replace('/order/')
        } else {
            alert(response.statusText)
        }
    }
}

document
    .querySelector('.pure-form pure-form-stacked')
    .addEventListener('submit', customerFormHandler)
