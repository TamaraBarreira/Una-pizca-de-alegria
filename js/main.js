
//funcion para saludar//
function saludo(){
    let nombre = prompt ("Bienvenidos, Por favor ingresa tu nombre");
    alert (`Hola ${nombre}`)
}
saludo()
const ofertaSemana =["juegos de Rol a Solo $3000 "];
alert(`Esta semana tenemos en oferta: ${ofertaSemana}`);

//creacion de clases y de productos//
class productos{
    constructor (id,nombre,precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.alquilado = false;
    }
}
const productos = [];
//push//
productos.push(new Producto(1, "Plaza Montessori", 4000));
productos.push(new Producto(2, "Juegos de Rol", 4000));
productos.push(new Producto(3, "Escaladores Pickler", 4000));
productos.push(new Producto(4, "Carpitas Tipis", 3000));

//// variables///
let item = prompt("Ingrese el nombre del producto a mostrar: \n pLaza montesori \n juegos de rol \n escaladores pickler \n carpitas tipi** Favor de ingresar el nombre en minusculas.** En su defecto ingrese ESC para salir");

//conociendo opciones
let opc = parseInt(prompt("Ingrese el nombre del producto a mostrar: \n pLaza montesori \n juegos de rol \n escaladores pickler \n carpitas tipi** Favor de ingresar el nombre en minusculas.** En su defecto ingrese ESC para salir"));
//funciones
function mostrar(mensaje){
    alert(mensaje);
}
function descuento (a, b){
let res = a - b;
alert (res);
}
//algoritmos///////////
while (item != "ESC"){
    if (item == "pLaza montesori"){
        mostrar (Producto.nombre + " " + Producto.precio);
    } else if (item =="juegos de rol"){
        mostrar (Producto.nombre + " " + descuento( 4000 , 1000));
    } else if (item =="escaladores pickler"){
        mostrar (Producto.nombre + " " + Producto.precio);
    }else if (item =="carpitas tipi"){
        mostrar (Producto.nombre + " " + Producto.precio);
    }else{
        mostrar("Ingrese un producto de la lista");
    }item = prompt ("Ingrese el nombre del producto a mostrar: \n pLaza montesori \n juegos de rol \n escaladores pickler \n carpitas tipi** Favor de ingresar el nombre en minusculas.** En su defecto ingrese ESC para salir");
}
//////////////DOM///////////////// 
//modificando con dom un texto
let titulo = document.getElementById ("textoAlquiler");
console.log (titulo.innerText);
/// cambio del contenido del texto
titulo.innerText = "Alquilate todo!";
console.log(titulo.innerText);
