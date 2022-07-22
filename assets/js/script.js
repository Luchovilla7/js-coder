/*//Simulador interactivo de productos 

//Simulador para calcular el monto total de tu compra
function calcular (precioProducto, cantidadProducto, porDescuento, costEnvio) {
    let descuento = (precioProducto * porDescuento) / 100;
    let precioDescuento = precioProducto - descuento;
    //retorno el precio final con descuento y costo de envio, multiplicado por la cantidad de peoductos
    return (precioDescuento * cantidadProducto) + costEnvio;
}

const envio = 1200; 

//Pido al usuario lo siguiente:
let producto = parseFloat(prompt("Ingrese el precio del producto que desea comprar:"));
let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que desea comprar del mismo producto:"));
let descuento = parseInt(prompt("Ingrese tu cupón de descuento:"));

//llamo a la funcion y luego muestro el precio final atraves de un alert
let precioFinal = calcular(producto, cantidad, descuento, envio);
alert("El precio total de tu compra es $" + precioFinal);
alert("¡Gracias por tu compra y por elegirnos, Saludos Saiyajin! 🔥");*/




//Creo la clase de objeto producto como base para cargar los productos 
class Producto {
    constructor(nombre, id, precio, stock) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.stock = stock;
    }

    vender(cantidad) {
        this.stock = this.stock - cantidad;
    }
}

//Inicializo los arrays para las categorias de los productos
const ropas = [];
const accesorios = [];
const juegos = [];

//Cargo el stock de productos segun su categoria
//REMERAS
ropas.push(new Producto("Remera Vegeta Negra", 1, 3200, 30));
ropas.push(new Producto("Musculosa Ultra Instinto", 2, 3600, 10));
ropas.push(new Producto("Buzo Sheng Long", 3, 8000, 20));
ropas.push(new Producto("Maya Nube Voladora", 4, 1900, 15));
//BUZOS
accesorios.push(new Producto("Figuras de acción XL", 5, 10000, 20));
accesorios.push(new Producto("Lámparas Z", 6, 3800, 40));
accesorios.push(new Producto("Posters", 7, 2500, 40));
//PANTALONES
juegos.push(new Producto("Juego de Cartas", 8, 1500, 10));
juegos.push(new Producto("Juego de Mesa Saiyajin", 9, 4800, 10));


//Recorro los arrays para mostrarle los productos al usuario
for (const ropa of ropas) {
    alert("ID (" + ropa.id + ") - " + ropa.nombre);
}
for (const accesorio of accesorios) {
    alert("ID (" + accesorio.id + ") - " + accesorio.nombre);
}
for (const juego of juegos) {
    alert("ID (" + juego.id + ") - " + juego.nombre);
}

//Funcion para calcular el precio final de la compra del producto
function calculoPrecio(precioProducto, cantidadProducto, costoEnvio) {
    return ((precioProducto * 1.21) * cantidadProducto) + costoEnvio;
}

//Solicito al usuario el ID del producto y lo almaceno en una nueva variable con el producto seleccionado
let productoSeleccionado = parseInt(prompt("Ingrese el ID del producto que desea comprar:"));
const ropaBuscada = ropas.find(ropa => ropa.id === productoSeleccionado);
const accesorioBuscado = accesorios.find(accesorio => accesorio.id === productoSeleccionado);
const juegoBuscado = juegos.find(juego => juego.id === productoSeleccionado);

let cantidad = parseInt(prompt("Ingrese la cantidad de unidades que quiere comprar del producto seleccionado:"));

//Costo de envio promedio a todo el país
const envio = 1200;

//Salidas de consola indicando el precio final de la compra segun el producto elegido por el usuario
if (productoSeleccionado <= 0) {
    alert("Ingresa un ID válido");
} else if (productoSeleccionado <= 4) {
    alert("El precio final de tu compra es: $" + calculoPrecio(ropaBuscada.precio, cantidad, envio));
    alert("¡Gracias por tu compra y por elegirnos, Saludos Saiyajin! 🔥")
    ropaBuscada.vender(cantidad);
} else if (productoSeleccionado <= 7) {
    alert("El precio final de tu compra es: $" + calculoPrecio(accesorioBuscado.precio, cantidad, envio));
    alert("¡Gracias por tu compra y por elegirnos, Saludos Saiyajin! 🔥")
    accesorioBuscado.vender(cantidad);
} else if (productoSeleccionado <= 9) {
    alert("El precio final de tu compra es: $" + calculoPrecio(juegoBuscado.precio, cantidad, envio));
    alert("¡Gracias por tu compra y por elegirnos, Saludos Saiyajin! 🔥")
    juegoBuscado.vender(cantidad);
} else {
    alert("Ingresa un ID válido");
}