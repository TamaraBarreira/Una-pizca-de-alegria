// creando la clase cliente
class cliente {
    constructor(nombre, email, mensaje){
        this.nombre = nombre;
        this.email = email;
        this.mensaje = mensaje;
    }
}

// Definiendo variables globales para DOM

let arrayClientes = [];
let miFormulario = document.querySelector ("#formulario");
let inputNombre = document.querySelector ("#iNombre");

let nombreI = formulario.children[1].value;
let emailI = formulario.children[3].value;
let mensajeI = formulario.children[5].value;

let contenedor = document.querySelector ("#clienteIngresado");
let displayTodos = document.querySelector ("#displayTodos");
let parrafos = displayTodos.getElementsByTagName ("p");
let bandera = false;

//definiendo eventos

miFormulario.addEventListener("submit", agregarCliente);
btnMostrar.addEventListener ("click", MostrarTodosClientes);

//Poniendo Focus

inputNombre.focus();

//FUNCIONES
//comprobar ingresos

function validarForm() {
    nombreI = formulario.children[1].value;
    emailI = formulario.children[3].value;
    mensajeI = formulario.children[5].value;
    console.log(nombreI);
    console.log(emailI);
    console.log(mensajeI);

    if (nombreI ==" " || emailI == " " || paswordI == " " ){
        alert ("Debe ingresar todos los datos para continuar");
        inputNombre.focus();
        bandera = false;
    }   else {
        bandera = true;
    }
}
//Agregando clientes a su array

function agregarClientes (e) {
    e.preventDefault();
    validarForm();
    if (bandera == true){
        let option = confirm ("¿Quieres agregarte como cliente?");
        if (option == true){
            let formulario = e.target
            arrayClientes.push(new Cliente (nombreI, emailI, mensajeI));
        } else{
            alert ("Cliente no agregado");
        }
        formulario.children[1].value = " ";
        formulario.children[3].value = " ";
        formulario.children[5].value = " ";
        contenedor.innerHTML = " ";
        AgregarAlDOM();
        inputNombre.focus();
    }   else{
        inputNombre.focus();
    }
}

//Mostrar ultimo cliente registrado
function agregregarAlDom(){
    contenedor.innerHTML = `<h3> Ultimo cliente ingresado:</h3>
    <p>Nombre: ${nombreI}</p>
    <P>Email: ${emailI}</p>
    <p> Mensaje: ${mensajeI}</p>`;
}

//Mostrar a los clientes con DIV en DOM

function MostrarTodosClientes (e){
    e.preventDefault();
    let i = 0;
    displayTodos.innerHTML = "<h3> Listado de todos los clientes: </h3>";
    for (const cliente of arrayClientes){
        displayTodos.innerHTML +- `
        <p> Nombre: ${cliente.nombre}</p>
        <p> Email: ${cliente.email}</p>
        <p> Mensaje: ${cliente.mensaje}</p>`;
    }
}
