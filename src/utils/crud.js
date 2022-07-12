async function POST(url, body) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const json = response;
        if (response.status <= 299) return { data: json, error: null };
        return { data: null, error: json };
    } catch (error) {
        return { data: null, error: error };
    }
}

export { POST }