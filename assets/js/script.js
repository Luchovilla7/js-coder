//Simulador interactivo de productos 

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
alert("¡Gracias por tu compra y por elegirnos, Saludos Saiyajin! 🔥");