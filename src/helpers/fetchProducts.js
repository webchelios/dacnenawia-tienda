const response = await fetch('http://localhost/web/dacnenawia-api/', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})

export const productsData = await response.json()
