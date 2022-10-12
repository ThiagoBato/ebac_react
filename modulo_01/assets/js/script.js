document.getElementById('header').innerHTML = `Hello World`;
document.querySelector('h2').innerHTML = `Hello World`;
document.querySelector('h3').innerHTML = `Hello World`;

var listaTitulo = document.getElementsByClassName('list-title');
for (var i = 0; i < listaTitulo.length; i++) {
    listaTitulo[i].innerHTML = 'Hello World';
}
var listaItem = document.querySelectorAll('li');
for (var i = 0; i < listaItem.length; i++) {
    listaItem[i].innerHTML = 'Hello World';
}
var paragrafo = document.getElementsByTagName('p');
for (var i = 0; i < paragrafo.length; i++) {
    paragrafo[i].innerHTML = 'Hello World';
}
var texto = document.getElementsByName('text');
for (var i = 0; i < texto.length; i++) {
    texto[i].innerHTML = 'Hello World';
}
