class Profesor {
  
    imprimir() {
        console.log("Es un profesor.");
    }
}


class ProfesorTitular extends Profesor {
    
    constructor(años = 0) {
        super(); 
        this.años = años; 
    }

  
    imprimir() {
        console.log("Es un profesor titular.");
    }

    imprimirAños() {
        console.log("Años = " + this.años);
    }
}


class Prueba3 {
    
    static main() {
        
        const profesor1 = new ProfesorTitular(5); 
        profesor1.imprimir(); 
        profesor1.imprimirAños(); 
    }
}


Prueba3.main();