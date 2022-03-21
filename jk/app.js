//DOM de eventos
document
.getElementById("formulario-producto")
.addEventListener("submit", function (elemento){
    elemento.preventDefault(); // evalua el comportamiento del elmento

    //Obtener valores de formulario
    const name = document.getElementById("name").value,
    año = document.getElementById("año").value,
    precio = document.getElementById("precio").value;

    //Crear nuevo objeto producto
    const producto = new Producto(nombre, precio, año);
    
    //Crear nuevo usuario
    const usuario = new Usario();

    //Boton de validacion 
    if(nombre === " " || precio === " " || año === " "){
        usuario.showMessage("Por favor insertar nombre de usuario");
    }
    
    //Guardar Producto
    usuario.addProducto(producto);
    usuario.showMessage("Producto agregado correctamente");
 });

 document.getElementById("Lista-producto").addEventListener("click", (elemento) => {
    const usuario = new usuario();
    usuario.deleteProducto(elemento.target);
    elemento.preventDefault();
 });

 //Producto Clase

 export class Producto{
     constructor(nombre, precio, año){
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
     }
 }
