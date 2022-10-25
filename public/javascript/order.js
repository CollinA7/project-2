async function orderFormHandler(event) {
    event.preventDefault()

    const order_id = document
        .querySelector('input[name="order_id"]')
        .value.trim()

    const name = document.querySelector('input[name="name"]').value.trim()

    const response = await fetch(`/api/orders`, {
        method: 'POST',
        body: JSON.stringify({
            name,
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
    .addEventListener('submit', orderFormHandler)
