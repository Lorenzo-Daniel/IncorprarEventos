const contenedorCards = document.getElementById("contenedorCards");
const descripcion1 = document.getElementById("descripcion1");
const descripcion = document.getElementById("descripcion");
const carrito = [];
const btnCarro = document.getElementById("btnCarro");
const contador = document.getElementById("contador")
const precioTotal = document.getElementById("precio");
const btnCerrar = document.getElementById("btnCerrar");
btnCerrar.onclick = () => {
    const descripcion = document.getElementById("descripcion");
    descripcion.className = "div";
}


peliculas.forEach(pelicula => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card mb-5" style="width: 18rem;">
    <img src="${pelicula.src}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${pelicula.nombre}</h5>
    <p class="card-text">precio: $${pelicula.precio}</p>
    <button id="agregar${pelicula.id}" class="btn btn-primary">comprar</button>
    </div>
    </div>`;
    contenedorCards.appendChild(div);
    const btnAgregar = document.getElementById(`agregar${pelicula.id}`);
    btnAgregar.addEventListener("click", () => {
        agregarAlCarrito(pelicula.id);
    });
});

const agregarAlCarrito = (peliculaId) => {
    const existe = carrito.some((pelicula) => pelicula.id === peliculaId);
    if (existe) {
        const producto = carrito.map((prod) => {
            if (prod.id === peliculaId) {
                prod.cantidad += 1;
            }
            actualizarCarrito()
        })
    } else {
        const item = peliculas.find((pelicula) => pelicula.id === peliculaId)
        carrito.push(item);
        actualizarCarrito()
        contador.innerText = carrito.length;
    }
}
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item) 
    carrito.splice(indice, 1);
    contador.innerText = carrito.length;
    actualizarCarrito()

}

const actualizarCarrito = () => {
    const vacio = document.getElementById("vacio");
    vacio.innerText = "";
    descripcion1.innerHTML = "";
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <img src="${prod.src}" class="card-img-top w-25 d-block class = "mt-3"" alt="...">
        <p class = "mb-0">Precio:$${prod.precio}</p>
        <p class = "mb-1" >Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button class = "mb-4" onclick="eliminarDelCarrito(${prod.id})"><i class="fas fa-trash-alt"></i></button>
        `
        descripcion1.appendChild(div);
    })
    const variable = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
    precioTotal.innerText = `Monto acumulado: $ ${variable}`;
}

const btnCarrito = document.getElementById("btnCarro");
btnCarrito.addEventListener("click", () => {
    const descripcion = document.getElementById("descripcion");
    descripcion.className = "divVisibility";
});

const BtnvaciarCarrito = document.getElementById("BtnvaciarCarrito")
BtnvaciarCarrito.addEventListener("click", () => {
    carrito.length = 0;
    actualizarCarrito();
})






