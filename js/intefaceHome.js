let container = document.getElementById('container');
const buscarCurso = document.querySelector('#buscacurso');

window.addEventListener('DOMContentLoaded', render);
buscarCurso.addEventListener('change', findCurso);

async function findCurso() {
    let input = buscarCurso.value;
    if (input && input != '') {
        try {
            var curso = await getCursos(input);
            container.innerHTML = '';
            container.innerHTML = createCurso(curso[0]);
        } catch {
            container.innerHTML = "<p>Nenhum curso encontrado</p>";
        }
    } else render();
}

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
