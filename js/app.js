// alert('hola');
// var lienzo =  document.getElementById('')

var cargarPagina = function () {
	//obtener elementos
	var btn = document.getElementById('agregar');
	//funcionalidad 
	btn.addEventListener('click',imprimir);


	
}
function imprimir(e){
	e.preventDefault();
// obtener elementos
var lienzo = document.getElementById('lienzo');
var txtMensaje = document.getElementById('mensaje');
//crear elementos
var parrafo = document.createElement('p');
//estilos a los elementos 
parrafo.className = 'jumbotron';
//agregar elementos 
parrafo.innerText = txtMensaje.value;
//agregar 
lienzo.appendChild(parrafo);

txtMensaje.value = "";

}

window.addEventListener('load',cargarPagina);