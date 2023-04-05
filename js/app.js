class Articulo{
    constructor(id,nombre,precio){
        this.id = id;
        this.nombre = nombre
        this.precio = precio
        this.cantidad = 1
        this.stock = 30
    }
}

class ArticuloController{
    constructor (){
        this.listaArticulos = []
    }
    ObtenerArticulosDesdeAPI(){
        this.listaArticulos = [
                        new Articulo(1, "baileys",5000),
                        new Articulo(2, "gin",4000),
                        new Articulo(3, "fernet",2400),
                        new Articulo(4, "vodka",5000),
                        new Articulo(5, "vino blanco",1900),
                        new Articulo(6, "vino tinto",2000),
                        new Articulo(7, "gancia",2300)
        ]
    }
    mostrarArticulos(){
        let acumulador = ""
        this.listaArticulos.forEach( articulo => {
            acumulador += "\nId: " + articulo.id + " nombre: " + articulo.nombre + " precio: " + articulo.precio
        })
        return acumulador
    }

    buscar(id){
        return this.listaArticulos.find(el => el.id == id)
    }
}

class carritoController{
    constructor(){
        this.listacarrito = []
    }

    agregar(articulo){
        this.listacarrito.push(articulo)
    }
    calcularTotalCompra(){
        let acumulador = 0
        this.listacarrito.forEach(articulo => {
            acumulador += articulo.precio * articulo.cantidad
        })
        return acumulador
    }
}
//Objetos controladores
const  controladorArticulos = new ArticuloController()
const controladorCarrito = new carritoController ()
controladorArticulos.ObtenerArticulosDesdeAPI()

let rta = ""

do{
    alert(controladorArticulos.mostrarArticulos())

    let id = prompt("ingrese el ID del articulo que desee comprar")
    const articulo = controladorArticulos.buscar(id)
    
    if (articulo){
        controladorCarrito.agregar(articulo)
    }else{
        alert("El Id que ingresó es inexistente")
    }
    
    rta = prompt ("Ingrese 'FINALIZAR' para salir o presione ACEPTAR para seguir comprando").toUpperCase()
}while(rta != "FINALIZAR")

alert("El total de su compra es de $" + controladorCarrito.calcularTotalCompra())