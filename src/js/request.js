export async function post(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`Could not fetch ${fetch}, status: ${response.status}`);
    }

    return response.json();
}

export async function get(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Could not fetch ${fetch}, status: ${response.status}`);
    }

    return response.json();
}