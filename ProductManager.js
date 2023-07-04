class productManager {

    constructor() {
        this.products = [];
    }
    // indice para ID de codigo de producto
    static idIndex = 0;

    // carga de datos actuales 
    getProducts() {
        return this.products
    }

    // agregar nuevo producto
    addProduct(title, description, price, thumbnail, code, stock) {
        // funcion para validar datos nulos
        let validar = (campo, dato) => {
            if (dato === null) {
                console.log(`Debe especificar un dato para ${campo}`)
                return "NOOK";
            }
            return "OK"
        }
        //valido los campos que no sena nulos
        if (validar("title", title) != 'OK') return;
        if (validar("description", description) != 'OK') return;
        if (validar("price", price) != 'OK') return;
        if (validar("thumbnail", thumbnail) != 'OK') return;
        if (validar("code", code) != 'OK') return;
        if (validar("stock", stock) != 'OK') return;

        // valido que no se repita un codigo de producto
        if (this.products.find((producto) => producto.code === code)) {
            console.log(`El codiog de producto indicado ${code} ya existe`)
            return;
        }

        // incremento secuencia de id de prodcuto
        productManager.idIndex++
        this.products.push({ title, description, price, thumbnail, code, stock, id: productManager.idIndex });
    }

    // busco producto por id de mismo 
    getProductById(idCodigo) {
        if (this.products.find((producto) => producto.id === idCodigo)) { return this.products.find(({ id }) => id === idCodigo); }
        else {
            return "Not found";
        }
    }

}

let productos = new productManager;

console.log("Productos al inicio");
console.log(productos.getProducts());

console.log("------------------------------------------");
console.log("Agrego para que quede 1 producto");
productos.addProduct("Lapicera Fina", "Lapicera trazo fino", 100, "lapicera001.jpg", "abc123", 10);
console.log(productos.getProducts());

console.log("------------------------------------------");
console.log("Agrego para que queden 2 productos");
productos.addProduct("Lapicera Gruesa", "Lapicera trazo grueso", 100, "lapicera002.jpg", "abc124", 10);
console.log(productos.getProducts());

console.log("------------------------------------------");
console.log("1er busqueda exitosa - id = 1");
console.log(productos.getProductById(1));

console.log("------------------------------------------");
console.log("2da busqueda exitosa - id = 2");
console.log(productos.getProductById(2));

console.log("------------------------------------------");
console.log("Busqueda no exitosa - id = 3");
console.log(productos.getProductById(3));

console.log("------------------------------------------");
console.log("Intento agregar producto sin title");
productos.addProduct(null, "Lapicera trazo fino", 100, "lapicera001.jpg", "abc123", 10);

console.log("------------------------------------------");
console.log("Intento agregar producto sin description");
productos.addProduct("Lapicera Gruesa", null, 100, "lapicera001.jpg", "abc123", 10);

console.log("------------------------------------------");
console.log("Intento agregar producto sin price");
productos.addProduct("Lapicera Gruesa", "Lapicera trazo grueso", null, "lapicera001.jpg", "abc123", 10);

console.log("------------------------------------------");
console.log("Intento agregar producto sin thumbnail");
productos.addProduct("Lapicera Gruesa", "Lapicera trazo grueso", 100, null, "abc123", 10);

console.log("------------------------------------------");
console.log("Intento agregar producto sin code");
productos.addProduct("Lapicera Gruesa", "Lapicera trazo grueso", 100, "lapicera001.jpg", null, 10);

console.log("------------------------------------------");
console.log("Intento agregar producto sin stock");
productos.addProduct("Lapicera Gruesa", "Lapicera trazo grueso", 100, "lapicera001.jpg", "abc123", null);

console.log("------------------------------------------");
console.log("intento agregar un codigo de producto existente");
productos.addProduct("Lapicera Gruesa", "Lapicera trazo grueso", 100, "lapicera002.jpg", "abc124", 10);

console.log("------------------------------------------");
console.log("AMuestro al final que solo quedan 2 productos");
console.log(productos.getProducts());
