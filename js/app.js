const API = 'https://test.godigibee.io/pipeline/gama/v1/20211206-dindin-grupo1';

function fetchJSON(URL) {
    const REQ = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "apikey": "DDuHO8yqVyyUx4J1nQpNUHAFK7pUJRw3",
        }
    }
    return fetch(URL, REQ).then(resp => {
        return resp.json()
    }).then(r => {
        return r.data;
    })
}

async function getCursos(id) {

    if (id) return await fetchJSON(`${API}?type=CURSO&id=${id}`);
    else return await fetchJSON(`${API}?type=CURSO`);
}

async function getPosts(id) {

    if (id) return await fetchJSON(`${API}?type=POST&id=${id}`);
    else return await fetchJSON(`${API}?type=POST`);
}
