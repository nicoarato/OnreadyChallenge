import Vehiculo from './Vehiculo.js';

class Ciclomotor extends Vehiculo {
    constructor(marca, modelo, precio, cilindrada) {
        super(marca, modelo, precio);
        this.cilindrada = cilindrada;
    }

    mostrarDatos() {

        let precio = this.formatPrecio(this.precio);
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${this.cilindrada} // Precio: ${precio}`;
    }
}

export default Ciclomotor;