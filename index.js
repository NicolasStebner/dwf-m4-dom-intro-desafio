const cosasQueAprendimos = [
    {
        tema: 'terminal',
        class: '',
    },
    {
        tema: 'node',
        class: '',
    },
    {
        tema: 'oop',
        class: '',
    },
    {
        tema: 'typescript',
        class: '',
    },
    {
        tema: 'css',
        class: '',
    },
    {
        tema: 'dom',
        class: 'special',
    },
];
function borrarElementosLi() {
    const listEl = document.querySelectorAll('li');
    listEl.forEach((el) => {
        el.remove();
    });
    const listaUlEl = document.querySelector('ul');
    /*  console.log(listaUlEl); */
}
function creacionElementosLi() {
    const listaUlEl = document.querySelector('ul');
    cosasQueAprendimos.forEach((el) => {
        const newEl = document.createElement('li');
        newEl.textContent = el.class;
        listaUlEl.appendChild(newEl);
    });
}
function main() {
    /* Eliminar todos los elementos <li> de la lista <ul class=”lista”> (sin eliminar la lista <ul>).

Crear nuevos elementos <li> basados en el array cosasQueAprendimos[] que está en el index.js. 
Por cada elemento del array crear un elemento <li> con la clase indicada en cada elemento.

Publicar su página en Github Pages y compartir con todxs en Discord. */
    setTimeout(() => {
        borrarElementosLi();
    }, 2000);
    setTimeout(() => {
        creacionElementosLi();
    }, 2000);
}

main();
