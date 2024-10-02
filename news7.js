class Inmueble {
    constructor(identificadorInmobiliario, area, direccion) {
        this.identificadorInmobiliario = identificadorInmobiliario;
        this.area = area;
        this.direccion = direccion;
        this.precioVenta = 0;
    }

    calcularPrecioVenta(valorArea) {
        this.precioVenta = this.area * valorArea;
        return this.precioVenta;
    }

    imprimir() {
        console.log(`Identificador inmobiliario: ${this.identificadorInmobiliario}`);
        console.log(`Área: ${this.area}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Precio de venta: $${this.precioVenta}`);
    }
}
class InmuebleVivienda extends Inmueble {
    constructor(identificadorInmobiliario, area, direccion, numeroHabitaciones, numeroBanos) {
        super(identificadorInmobiliario, area, direccion);
        this.numeroHabitaciones = numeroHabitaciones;
        this.numeroBanos = numeroBanos;
    }

    imprimir() {
        super.imprimir();
        console.log(`Número de habitaciones: ${this.numeroHabitaciones}`);
        console.log(`Número de baños: ${this.numeroBanos}`);
    }
}
class Casa extends InmuebleVivienda {
    constructor(identificadorInmobiliario, area, direccion, numeroHabitaciones, numeroBanos, numeroPisos) {
        super(identificadorInmobiliario, area, direccion, numeroHabitaciones, numeroBanos);
        this.numeroPisos = numeroPisos;
    }

    imprimir() {
        super.imprimir();
        console.log(`Número de pisos: ${this.numeroPisos}`);
    }
}
class Apartamento extends InmuebleVivienda {
    constructor(identificadorInmobiliario, area, direccion, numeroHabitaciones, numeroBanos) {
        super(identificadorInmobiliario, area, direccion, numeroHabitaciones, numeroBanos);
    }

    imprimir() {
        super.imprimir();
    }
}
class CasaRural extends Casa {
    constructor(identificadorInmobiliario, area, direccion, numeroHabitaciones, numeroBanos, numeroPisos, distanciaCabecera, altitud) {
        super(identificadorInmobiliario, area, direccion, numeroHabitaciones, numeroBanos, numeroPisos);
        this.distanciaCabecera = distanciaCabecera;
        this.altitud = altitud;
        this.valorArea = 1500000;
    }

    imprimir() {
        super.imprimir();
        console.log(`Distancia a la cabecera municipal: ${this.distanciaCabecera} km`);
        console.log(`Altitud sobre el nivel del mar: ${this.altitud} metros`);
    }
}
class CasaUrbana extends Casa {
    constructor(identificadorInmobiliario, area, direccion, numeroHabitaciones, numeroBanos, numeroPisos) {
        super(identificadorInmobiliario, area, direccion, numeroHabitaciones, numeroBanos, numeroPisos);
    }

    imprimir() {
        super.imprimir();
    }
}
class ApartamentoFamiliar extends Apartamento {
    constructor(identificadorInmobiliario, area, direccion, numeroHabitaciones, numeroBanos, valorAdministracion) {
        super(identificadorInmobiliario, area, direccion, numeroHabitaciones, numeroBanos);
        this.valorAdministracion = valorAdministracion;
        this.valorArea = 2000000;
    }

    imprimir() {
        super.imprimir();
        console.log(`Valor de la administración: $${this.valorAdministracion}`);
    }
}
class Apartaestudio extends Apartamento {
    constructor(identificadorInmobiliario, area, direccion) {
        super(identificadorInmobiliario, area, direccion, 1, 1);
        this.valorArea = 1500000;
    }

    imprimir() {
        super.imprimir();
    }
}
class CasaConjuntoCerrado extends CasaUrbana {
    constructor(identificadorInmobiliario, area, direccion, numeroHabitaciones, numeroBanos, numeroPisos, valorAdministracion, tienePiscina, tieneCamposDeportivos) {
        super(identificadorInmobiliario, area, direccion, numeroHabitaciones, numeroBanos, numeroPisos);
        this.valorAdministracion = valorAdministracion;
        this.tienePiscina = tienePiscina;
        this.tieneCamposDeportivos = tieneCamposDeportivos;
        this.valorArea = 2500000;
    }

    imprimir() {
        super.imprimir();
        console.log(`Valor de la administración: $${this.valorAdministracion}`);
        console.log(`Tiene piscina: ${this.tienePiscina}`);
        console.log(`Tiene campos deportivos: ${this.tieneCamposDeportivos}`);
    }
}
let casaRural = new CasaRural(101, 120, "Zona rural, KM 5", 4, 3, 2, 12, 1800);
casaRural.calcularPrecioVenta(casaRural.valorArea);
casaRural.imprimir();

let apartamentoFamiliar = new ApartamentoFamiliar(102, 80, "Calle 10 #5-20", 3, 2, 500000);
apartamentoFamiliar.calcularPrecioVenta(apartamentoFamiliar.valorArea);
apartamentoFamiliar.imprimir();

