let container = document.getElementById('container');

let Cursos;
let Posts;

window.addEventListener('DOMContentLoaded', render);

async function render() {
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

    // let section = createElement('section');
    // let h3 = createElement('h3');
    // let img = createElement('img');
    // let p1 = createElement('p')
    // let p2 = createElement('p2')

    // p1.innerText = `ID: ${curso.id}`;
    // p2.innerText = `${curso.description}`;
    // img.classList.add('imgcurso');
    // img.setAttribute("src", `${curso.thumb_img}`);
    // h3.innerText = `${curso.title}`;

    // section.append(img);
    // section.append(h3);
    // section.append(p1);
    // section.append(p2);

}

function createElement(element) {
    return document.createElement(element);
}