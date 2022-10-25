async function customerFormHandler(event) {
    event.preventDefault()

    const customer_name = document
        .querySelector('input[value="customer_name"]')
        .value.trim()
    const customer_phone = document
        .querySelector('input[value="customer_phone"]')
        .value.trim()
    const order_id = document
        .querySelector('input[value="order_id"]')
        .value.trim()

    const response = await fetch(`/api/customers`, {
        method: 'POST',
        body: JSON.stringify({
            customer_name,
            customer_phone,
            order_id,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert(response.statusText)
    }
}

document
    .querySelector('.pure-form pure-form-stacked')
    .addEventListener('submit', customerFormHandler)
