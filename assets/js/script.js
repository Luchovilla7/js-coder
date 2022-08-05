//Array de objetos de los productos 

const productos =[
    {id:01, tipo:"Ropa", nombre:"Remera Vegeta Dark", precio: 4300, foto: "assets/img/remera-vegeta.jpg"},
    {id:02, tipo:"Accesorios", nombre:"Esferas del Dragon", precio: 12000, foto: "assets/img/esferas.jpg"},
    {id:03, tipo:"Accesorios", nombre:"Figura Gogeta", precio: 10000, foto: "assets/img/gogeta-figure.jpg"},
    {id:04, tipo:"Accesorios", nombre:"Lampara Henki Dama", precio: 5800, foto: "assets/img/lampara-goku.jpg"},
    {id:05, tipo:"Accesorios", nombre:"Poster Saga de Cell", precio: 3000, foto: "assets/img/poster.png"},
    {id:06, tipo:"Ropa", nombre:"Remera Light Dragon Ball", precio: 4000, foto: "assets/img/db.jpg"},
    {id:07, tipo:"Accesorios", nombre:"Taza + individual", precio: 2500, foto: "assets/img/tazas-individual.jpg"},
    {id:08, tipo:"Accesorios", nombre:"Stickers", precio: 500, foto: "assets/img/stickers.jpg"},
    {id:09, tipo:"Juego de Cartas", nombre:"Game Cards Dragon Ball", precio: 1600, foto: "assets/img/juego.db.jpg"}
];

//inicializo la variable carrito con una funcion para que detecte si existen valores en el storage
let carrito = cargarCarrito();

//tomo control sobre las secciones del HTML
let sectionProductos = document.getElementById("section-productos");
let sectionCarrito = document.getElementById("section-carrito");

//creacion de la seccion carrito con DOM
let totalCompra = document.createElement("div");
totalCompra.innerHTML = "<h2>Total: $</h2>";
sectionCarrito.appendChild(totalCompra);

let montoTotalCompra = document.createElement("h2");
montoTotalCompra.innerText = "0";
totalCompra.appendChild(montoTotalCompra);

let cantidadProductos = document.createElement("div");
cantidadProductos.innerHTML = "<h3>Cantidad: </h3>";
sectionCarrito.appendChild(cantidadProductos);

let cantProductos = document.createElement("h3");
cantProductos.innerText = "0";
cantidadProductos.appendChild(cantProductos);

let botonFinalizar = document.createElement("button");
botonFinalizar.innerText = "Finalizar compra";
sectionCarrito.appendChild(botonFinalizar);
botonFinalizar.setAttribute("class", "boton");

//Le agrego un evento al boton para que muestre el precio final
botonFinalizar.onclick = () => {
  const precioFinal = montoTotalCompra.innerText;
  //uso sweet alert para que el usuario confirme su compra, cuando toca si se vacia el carrito
  Swal.fire({
    title: '¿Seguro que queres finalizar tu compra?',
    text: `Total a abonar: $${precioFinal}`,
    showCancelButton: true,
    confirmButtonColor: '#008f39',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si',
    cancelButtonText: 'No'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Gracias por tu compra',
        '¡Saludos Saiyajin🔥!',
        'success'
      )
      vaciarCarrito();
    }
  })
}

//renderizado de los productos en cards
for (const producto of productos) {
  let container = document.createElement("div");
  container.setAttribute("class", "card-product");
  container.innerHTML = ` <div class="img-container">
                            <img src="${producto.foto}" alt="${producto.nombre}" class="img-product"/>
                            </div>
                            <div class="info-producto">
                            <p class="font">${producto.nombre}</p>
                            <strong class="font">$${producto.precio}</strong>
                            <button class="boton" id="btn${producto.id}"> Agregar al carrito </button>
                            </div>`;
  sectionProductos.appendChild(container);
  //Evento para que los productos se agreguen al carrito al hacer click en el boton
  document.getElementById(`btn${producto.id}`).onclick = () => agregarAlCarrito(`${producto.id}`);
}

//Funciones
function agregarAlCarrito(id) {
  carrito.push(productos.find(p => p.id == id));
  localStorage.setItem("carrito", JSON.stringify(carrito));
  calcularTotalCarrito();
}

function calcularTotalCarrito() {
  let total = 0;
  for (const producto of carrito) {
    total += producto.precio;
  }
  montoTotalCompra.innerText = total;
  cantProductos.innerText = carrito.length;
}

function vaciarCarrito() {
  montoTotalCompra.innerText = "0";
  cantProductos.innerText = "0";
  localStorage.clear();
  carrito = [];
}

function cargarCarrito() {
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  if (carrito == null) {
    return [];
  } else {
    return carrito;
  }
}



