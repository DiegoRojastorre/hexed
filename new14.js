class Asignatura {
    constructor(codigo, nombre, creditos) {
        this.codigo = codigo; 
        this.nombre = nombre; 
        this.creditos = creditos; 
    }

    
    imprimir() {
        console.log(`Código de la asignatura = ${this.codigo}`);
        console.log(`Nombre de la asignatura = ${this.nombre}`);
        console.log(`Cantidad de créditos = ${this.creditos}`);
    }


    escribirAsignatura() {
        const data = JSON.stringify(this);
        localStorage.setItem("asignatura", data); 
    }


    leerAsignatura() {
        const data = localStorage.getItem("asignatura"); 
        if (data) {
            const asignatura = JSON.parse(data); 
            this.codigo = asignatura.codigo; 
            this.nombre = asignatura.nombre;
            this.creditos = asignatura.creditos;
            this.imprimir();
        } else {
            console.log("No se pudo leer el archivo");
        }
    }
}
Clase: Prueba
javascript

class Prueba {
    
    static main() {
        const asignatura = new Asignatura(4100547, "Programación Orientada a Objetos", 4);
        asignatura.escribirAsignatura(); 
        asignatura.leerAsignatura();
    }
}


Prueba.main();