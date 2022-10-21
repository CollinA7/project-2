async function customerFormHandler(event) {
    event.preventDefault()

    const customer_name = document.querySelector('#order-name').value.trim()
    const customer_phone = document.querySelector('#stacked-phone').value.trim()
    const order_id = document.querySelector('#stacked-order').value.trim()

    if (customer_name && customer_phone & order_id) {
        const response = await fetch('/api/customers', {
            method: 'POST',
            body: JSON.stringify({
                customer_name,
                customer_phone,
                order_id,
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
