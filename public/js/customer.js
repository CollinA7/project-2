async function customerFormHandler(event) {
    event.preventDefault()

    const name = document.querySelector('#customer_name').value.trim()
    const phone = document.querySelector('#customer_phone').value.trim()
    const order = document.querySelector('#order_id').value.trim()

    if (name && phone & order) {
        const response = await fetch('/api/customer', {
            method: 'post',
            body: JSON.stringify({
                name,
                phone,
                order,
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
