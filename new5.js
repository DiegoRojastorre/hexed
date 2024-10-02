class Medicamento {
    constructor(nombre, fabricante, viaAdministracion) {
        this.nombre = nombre;
        this.fabricante = fabricante;
        this.viaAdministracion = viaAdministracion;
        this.posologia = null;
    }

    setPosologia(posologia) {
        this.posologia = posologia;
    }

    imprimir() {
        console.log("Nombre del medicamento = " + this.nombre);
        console.log("Fabricante del medicamento = " + this.fabricante);
        console.log("Vía de administración = " + this.viaAdministracion);
    }
}

class Posologia {
    constructor(usuarios, dosis, periodo, recomendaciones) {
        this.usuarios = usuarios;
        this.dosis = dosis;
        this.periodo = periodo;
        this.recomendaciones = recomendaciones;
    }

    imprimir() {
        console.log("Usuarios = " + this.usuarios);
        console.log("Dosis = " + this.dosis);
        console.log("Periodo = " + this.periodo);
        console.log("Recomendaciones = " + this.recomendaciones);
    }
}

const medicamento = new Medicamento("Aspirina", "Bayer", "Oral");
const posologia = new Posologia("Adultos y mayores de 16 años", 500, "6 horas", "No debe tomar este medicamento con el estómago vacío.");

medicamento.setPosologia(posologia);
medicamento.imprimir();
medicamento.posologia.imprimir();
