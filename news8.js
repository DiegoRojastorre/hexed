class DispositivoInformatico {
    constructor() {
        this.marca = "Acer"; 
        console.log(`Marca = ${this.marca}`); 
    }
}
class Tableta extends DispositivoInformatico {
    constructor(marca) {
        super(); 
        console.log(`Marca = ${marca}`); 
    }
}
class Prueba {
    static main() {
        let tableta = new Tableta("Dell"); 
    }
}


Prueba.main();