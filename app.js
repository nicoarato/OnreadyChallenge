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

// cargar los datos del problema
let carros = cargarVehiculos();

carros.forEach(v => {
    console.log(v.mostrarDatos())
});

// separador
imprimirSeparador();


let ordenados = carros.sort(((a, b) => b.precio - a.precio));

console.log(`Vehículo más caro: ${ordenados[0].getMarca()} ${ordenados[0].getModelo()}`);
let lastIndex = ordenados.length - 1;
console.log(`Vehículo más barato: ${ordenados[lastIndex].getMarca()} ${ordenados[lastIndex].getModelo()}`);

ordenados.forEach(v => {
    if (v.getModelo().search('Y') != -1) {
        let precio = v.formatPrecio(v.getPrecio());
        console.log(`Vehículo que contiene en el modelo la letra ’Y‘: ${v.getMarca()} ${v.getModelo()} ${precio}`);
    }
});

// separador
imprimirSeparador();


verVehiculosOrdenadosPorPrecio(ordenados);







// funciones auxiliares

function cargarVehiculos() {
    let carros = Array();
    carros.push(new Automovil('Peugeot', '206', 200000, 4));
    carros.push(new Ciclomotor('Honda', 'Titan', 60000, '125cc'));
    carros.push(new Automovil('Peugeot', '208', 250000, 5));
    carros.push(new Ciclomotor('Yamaha', 'YBR', 80500.50, '160cc'));
    return carros;
}

function verVehiculosOrdenadosPorPrecio(vehiculos) {
    console.log(`Vehículos ordenados por precio de mayor a menor:`);

    vehiculos.forEach(v => {
        console.log(` ${v.getMarca()} ${v.getModelo()}`);
    });

}

function imprimirSeparador() {
    console.log('=============================');
}