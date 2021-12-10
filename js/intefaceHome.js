let container = document.getElementById('container');

window.addEventListener('DOMContentLoaded', render);

async function render() {
    let Cursos;
    let listaHTML = '';
    Cursos = await getCursos();
    Cursos.forEach(curso => {
        listaHTML += createCurso(curso);
    })
    container.innerHTML = listaHTML;
}

function createCurso(curso) {
    return `<section class="cursos">
                <img class="imgcurso" src="${curso.thumb_img}">
                <h3>${curso.title}</h3>
                <p>ID: ${curso.id}</p>
                <p>${curso.description}</p>
            </section>`;
}
