const PeliculasSeleccionadas = [];

const peliculas = [
    {id:1,cantidad:1, nombre: "Terror on the Prairie",genero :"terror", precio: 150,  src: "./assets/img/terror1.jpg" },
    {id:2,cantidad:1, nombre: "Terror Trips",genero :"terror", precio: 180,  src: "./assets/img/terror2.jpg" },
    {id:3,cantidad:1, nombre: "The Danger Next Door",genero :"terror", precio: 120,  src: "./assets/img/terror3.jpg" },
    {id:4,cantidad:1, nombre: "Hidden: Terror en Kingsville ",genero :"terror", precio: 1600,  src: "./assets/img/terror4.jpg" },
    {id:5,cantidad:1, nombre: "La morada del miedo",genero :"terror", precio: 450 ,  src: "./assets/img/terror5.jpg" },
    {id:6,cantidad:1, nombre: "La casa del terror (Haunt) ",genero :"terror", precio: 600 ,  src: "./assets/img/terror6.jpg" },
    {id:7,cantidad:1, nombre: "Acción Jacinto ",genero :"accion", precio: 280 ,  src: "./assets/img/accion1.jpg" },
    {id:8,cantidad:1, nombre: "Acción civil",genero :"accion", precio: 320 ,  src: "./assets/img/accion2.jpg" },
    {id:9,cantidad:1, nombre: "Acción mutante",genero :"accion", precio:  150,  src: "./assets/img/accion3.jpg" },
    {id:10,cantidad:1, nombre: "The Stunt Double",genero :"accion", precio: 500 ,  src: "./assets/img/accion4.jpg" },
    {id:11,cantidad:1, nombre: "Reboiras: Acción y corazón ",genero :"accion", precio:  1100,  src: "./assets/img/accion5.jpg"},
    {id:12,cantidad:1, nombre: "Acción policial ",genero :"accion", precio: 70   ,  src: "./assets/img/accion6.jpg"},
    {id:13,cantidad:1, nombre: "Wildflower",genero :"drama", precio: 280 ,  src: "./assets/img/drama1.jpg"},
    {id:14,cantidad:1, nombre: "Medusa Deluxe ",genero :"drama", precio:  150 ,  src:"./assets/img/drama3.jpg"},
    {id:15, cantidad:1,  nombre: "The Color Purple",genero :"drama", precio: 500  ,  src:"./assets/img/drama4.jpg"},
    {id:16, cantidad:1,  nombre: "The Last of Us",genero :"drama", precio:  1100,  src:"./assets/img/drama5.jpg"},
];



class Producto {
    constructor(objeto) {
        this.nombre = objeto.nombre;
        this.precio = objeto.precio;
        this.iva = 21;
        this.descuento = 10;
    }

    aplicarIva() {
        this.precio = this.precio + ((this.precio * this.iva) / 100);
    }

    aplicarDescuento() {
        this.precio = this.precio - ((this.precio * this.descuento) / 100);
    }
} 