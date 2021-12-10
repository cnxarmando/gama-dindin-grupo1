let container = document.querySelector('section[class=artigos]');
window.addEventListener('DOMContentLoaded', render);

async function render() {
    let posts;
    let listaHTML = '';
    posts = await getPosts();
    posts.forEach(post => {
        listaHTML += createPost(post);
    })
    container.innerHTML = listaHTML;
}

function createPost(post) {
    return `<article>
                <img src="${post.thumb_img}" alt="">
                <h2>${post.title}</h2>
                <p>${post.content}</p>
            </article>`
}
