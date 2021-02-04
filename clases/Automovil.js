import Vehiculo from './Vehiculo.js';

class Automovil extends Vehiculo {
    constructor(marca, modelo, precio, puertas) {
        super(marca, modelo, precio);
        this.puertas = puertas;
    }

    mostrarDatos() {
        let precio = this.formatPrecio(this.precio);
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: ${precio}`;
    }

}

export default Automovil;