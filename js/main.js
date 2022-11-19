// Productos

const productos = [
    // Mangas 
    {
        id: "manga-01",
        titulo: "10th 1",
        imagen: "./assets/manga1.jpg",
        categoria: {
            nombre: "Mangas",
            id: "mangas"
        },
        precio: 1000
    },
    {
        id: "manga-02",
        titulo: "Akame Ga Kill 14",
        imagen: "./assets/manga2.jpg",
        categoria: {
            nombre: "Mangas",
            id: "mangas"
        },
        precio: 1000
    },
    {
        id: "manga-03",
        titulo: "Koe No Katachi 4",
        imagen: "./assets/manga3.jpg",
        categoria: {
            nombre: "Mangas",
            id: "mangas"
        },
        precio: 1000
    },
    {
        id: "manga-04",
        titulo: "Konosuba 1",
        imagen: "./assets/manga4.jpg",
        categoria: {
            nombre: "Mangas",
            id: "mangas"
        },
        precio: 1000
    },
    {
        id: "manga-05",
        titulo: "Konosuba 4",
        imagen: "./assets/manga5.jpg",
        categoria: {
            nombre: "Mangas",
            id: "mangas"
        },
        precio: 1000
    },
    {
        id: "manga-06",
        titulo: "Komi-San 4",
        imagen: "./assets/manga6.jpg",
        categoria: {
            nombre: "Mangas",
            id: "mangas"
        },
        precio: 1000
    },
    {
        id: "manga-07",
        titulo: "Blue Lock 1",
        imagen: "./assets/manga7.jpg",
        categoria: {
            nombre: "Mangas",
            id: "mangas"
        },
        precio: 1000
    },
    {
        id: "manga-08",
        titulo: "Chainsaw Man 9",
        imagen: "./assets/manga8.jpg",
        categoria: {
            nombre: "Mangas",
            id: "mangas"
        },
        precio: 1000
    },
    //llaveros
    {
        id: "llavero-01",
        titulo: "Llavero Bakugo",
        imagen: "./assets/llavero1.webp",
        categoria: {
            nombre: "Llaveros",
            id: "llaveros"
        },
        precio: 1300
    },
    {
        id: "llavero-02",
        titulo: "Llavero Asuna",
        imagen: "./assets/llavero2.webp",
        categoria: {
            nombre: "Llaveros",
            id: "llaveros"
        },
        precio: 1300
    },
    {
        id: "llavero-03",
        titulo: "Llavero Saitama",
        imagen: "./assets/llavero3.webp",
        categoria: {
            nombre: "Llaveros",
            id: "llaveros"
        },
        precio: 1300
    },
    {
        id: "llavero-04",
        titulo: "Llavero Naruto",
        imagen: "./assets/llavero4.webp",
        categoria: {
            nombre: "Llaveros",
            id: "llaveros"
        },
        precio: 1300
    },
    {
        id: "llavero-05",
        titulo: "Llavero Zoro",
        imagen: "./assets/llavero5.webp",
        categoria: {
            nombre: "Llaveros",
            id: "llaveros"
        },
        precio: 1300
    },
    //remeras
    {
        id: "remera-01",
        titulo: "Remera Evangelion",
        imagen: "./assets/remera1.webp",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 3990
    },
    {
        id: "remera-02",
        titulo: "Remera JoJo's",
        imagen: "./assets/remera2.webp",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 3990
    },
    {
        id: "remera-03",
        titulo: "Remera Gibli",
        imagen: "./assets/remera3.webp",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 3990
    },
    {
        id: "remera-04",
        titulo: "Remera Zoro",
        imagen: "./assets/remera4.webp",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 3990
    },
    {
        id: "remera-05",
        titulo: "Remera Itadori",
        imagen: "./assets/remera5.webp",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 3990
    },
    {
        id: "remera-06",
        titulo: "Remera Eren",
        imagen: "./assets/remera6.webp",
        categoria: {
            nombre: "Remeras",
            id: "remeras"
        },
        precio: 3990
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
