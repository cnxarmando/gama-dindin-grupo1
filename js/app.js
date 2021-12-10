const API = 'https://test.godigibee.io/pipeline/gama/v1/20211206-dindin-grupo1';

async function getCursos(id) {
    let cursos = [];
    if (id) {
        cursos = await fetch(`https://test.godigibee.io/pipeline/gama/v1/20211206-dindin-grupo1?type=CURSO;id=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "apikey": "DDuHO8yqVyyUx4J1nQpNUHAFK7pUJRw3",
            }
        }).then(resp => {
            // console.log(resp.json());
            return resp.json()
        }).then(r => {
            console.log(r.data);
        })
    }
    else {
        cursos = await fetch(`https://test.godigibee.io/pipeline/gama/v1/20211206-dindin-grupo1?type=CURSO`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "apikey": "DDuHO8yqVyyUx4J1nQpNUHAFK7pUJRw3",
            }
        }).then(resp => {
            // console.log(resp.json());
            return resp.json()
        }).then(r => {
            return r.data;
        })
    }
    return cursos;
}

async function getPosts(id) {
    let posts = [];
    if (id) {
        posts = await fetch(`https://test.godigibee.io/pipeline/gama/v1/20211206-dindin-grupo1?type=POST;id=${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "apikey": "DDuHO8yqVyyUx4J1nQpNUHAFK7pUJRw3",
            }
        }).then(resp => {
            // console.log(resp.json());
            return resp.json()
        }).then(r => {
            console.log(r.data);
        })
    }
    else {
        posts = await fetch(`https://test.godigibee.io/pipeline/gama/v1/20211206-dindin-grupo1?type=POST`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "apikey": "DDuHO8yqVyyUx4J1nQpNUHAFK7pUJRw3",
            }
        }).then(resp => {
            // console.log(resp.json());
            return resp.json()
        }).then(r => {
            console.log(r.data);
        })
    }
    return posts;
}