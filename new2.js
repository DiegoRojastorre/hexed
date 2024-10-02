class Atleta {
    // Atributo estático que cuenta los atletas creados
    static contador = 0;
    // Atributo estático que define el nombre de la selección de un atleta
    static seleccion = "Colombia";
    // Atributo estático que totaliza los tiempos de cada atleta
    static tiempoEquipo = 0;

    constructor(nombre, tiempo) {
        // Incrementa el contador y asigna como identificador
        Atleta.contador++;
        this.identificador = Atleta.contador;
        this.nombre = nombre; // Nombre del atleta
        this.tiempo = tiempo; // Tiempo del atleta en una competición
    }

    // Método para acumular el tiempo total del equipo
    correr400metros() {
        Atleta.tiempoEquipo += this.tiempo;
    }

    // Método para mostrar en pantalla los datos de un atleta
    imprimir() {
        console.log("Identificador del atleta = " + this.identificador);
        console.log("Nombre del atleta = " + this.nombre);
        console.log("Tiempo del atleta = " + this.tiempo + " segundos");
        console.log();
    }

    // Método estático para mostrar en pantalla el nombre de la selección del equipo
    static imprimirSeleccion() {
        console.log("Selección = " + Atleta.seleccion);
    }

    // Método estático para mostrar en pantalla el tiempo obtenido por el equipo
    static imprimirTiempoEquipo() {
        console.log("Tiempo del equipo = " + Atleta.tiempoEquipo + " segundos");
    }
}


function main() {
    let atleta1 = new Atleta("Alejandro Perlaza", 9.55);
    atleta1.correr400metros();

    let atleta2 = new Atleta("Anthony Zambrano", 9.28);
    atleta2.correr400metros();

    let atleta3 = new Atleta("Diego Palomeque", 9.53);
    atleta3.correr400metros();

    let atleta4 = new Atleta("Gilmar Herrera", 9.29);
    atleta4.correr400metros();

    Atleta.imprimirSeleccion();

    atleta1.imprimir();
    atleta2.imprimir();
    atleta3.imprimir();
    atleta4.imprimir();

    Atleta.imprimirTiempoEquipo();
}

main();