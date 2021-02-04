class Vehiculo {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    mostrarDatos() {}

    getMarca() {
        return this.marca;
    }

    getModelo() {
        return this.modelo;
    }

    getPrecio() {
        return this.precio;
    }

    formatPrecio(precio) {
        let amount = this.precio;
        let opts = {
            style: 'currency',
            currency: 'USD'
        };
        let numberFormat2 = new Intl.NumberFormat('en-US', opts);
        return numberFormat2.format(amount).replace('.', '*').replace(',', '.').replace('*', ',');
    }
}

export default Vehiculo;