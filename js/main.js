
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
    sumandoIva(){
        this.precio = this.precio * 1.21;
    }
}

class listaDePedido{
    constructor (id,lista,metodopago,descuento){
        this.id = id;
        this.lista = lista;
        this.metodopago = metodopago;
        this.descuento = descuento; 
    }
}
const productos = [];
const listaDePedido =[];
//push//
productos.push(new Productos (1, "Plaza Montessori", 4000));
productos.push(new Productos (2, "Juegos de Rol", 4000));
productos.push(new Productos (3, "Escaladores Pickler", 4000));
productos.push(new Productos (4, "Carpitas Tipis", 3000));

//for///
for(const producto of productos){ 
    producto.sumandoIva()};
//realizando alquiler 
const realizarAlquiler = () => {
    let cantidadArticulo = parseInt (prompt("Seleccione la cantidad de articulos a adquirir"));
    let listaDeProductos = `Elija los articulos a alquilar seleccionando su numero: \n`;
    
}
const productosElegidos = (cantidadArticulo , productos) => {
    let compra = [];
    for (let i = 0; i < cantidadArticulo ; i++){
        let productoId = parseInt (prompt(listaDeProductosAMostrar + "\n" + productos.map (p => `${p.id}: ${p.nombre} ${p.precio} \n`)));
        alquiler [i] = productos.find(p=> p.id=== productoId);
        productos [productoId - 1].alquilado = true;
    }
    return alquiler;

let listado = "";
let alquiler = productosElegidos (cantidadArticulo,productos);
listaDeAlquiler.push(new ListaAlquileres(Math.round(Math.random() *100000), alquiler, "efectivo",false));
let total = alquiler.reduce((acc,c)=> acc + c.precio, 0);
/*    
alert (`${ listado += "Los productos Alquilados fueron \n" + alquiler.map(m => `${m.nombre}: ${m.precio}\n ) .toSting() .join(" - ") } \n El total a pagar es: ${total}`);
    return ListaAlquileres;
}
*/