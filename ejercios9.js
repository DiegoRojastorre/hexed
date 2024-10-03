class Profesor {
    
    imprimir() { 
        console.log("Es un profesor.");
    }
}


class ProfesorTitular extends Profesor {
   
    imprimir() {
        console.log("Es un profesor titular.");
    }
}


class Prueba2 {
   
    static main() {
        
        const objeto = new ProfesorTitular();
        objeto.imprimir(); 
    }
}


Prueba2.main()