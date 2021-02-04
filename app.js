import Automovil from './clases/Automovil.js';
import Ciclomotor from './clases/Ciclomotor.js';


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