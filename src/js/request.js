export async function post(url, data) {
    return await send(url, 'POST', {'Content-type': 'application/json'}, JSON.stringify(data));
}

export async function get(url) {
    return await send(url);
}

async function send(url, method, headers, body = null) {
    const response = await fetch(url, {
        method: method,
        headers: headers,
        body: body
    });

    if (!response.ok) {
        throw new Error(`Could not fetch ${fetch}, status: ${response.status}`);
    }

    return response.json();
}