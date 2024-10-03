
class Animal {
    constructor(sonido, alimentos, hábitat, nombreCientífico) {
        this.sonido = sonido; 
        this.alimentos = alimentos; 
        this.hábitat = hábitat; 
        this.nombreCientífico = nombreCientífico; 
    }

   
    getNombreCientífico() {
        throw new Error("Método abstracto, debe ser implementado en subclases.");
    }

    getSonido() {
        throw new Error("Método abstracto, debe ser implementado en subclases.");
    }

    getAlimentos() {
        throw new Error("Método abstracto, debe ser implementado en subclases.");
    }

    getHábitat() {
        throw new Error("Método abstracto, debe ser implementado en subclases.");
    }
}


class Cánido extends Animal {
    constructor(sonido, alimentos, hábitat, nombreCientífico) {
        super(sonido, alimentos, hábitat, nombreCientífico);
    }
}


class Perro extends Cánido {
    constructor() {
        super("Ladrido", "Carnívoro", "Doméstico", "Canis lupus familiaris");
    }

    getSonido() {
        return this.sonido;
    }

    getAlimentos() {
        return this.alimentos;
    }

    getHábitat() {
        return this.hábitat;
    }

    getNombreCientífico() {
        return this.nombreCientífico;
    }
}


class Lobo extends Cánido {
    constructor() {
        super("Aullido", "Carnívoro", "Bosque", "Canis lupus");
    }

    getSonido() {
        return this.sonido;
    }

    getAlimentos() {
        return this.alimentos;
    }

    getHábitat() {
        return this.hábitat;
    }

    getNombreCientífico() {
        return this.nombreCientífico;
    }
}


class Felino extends Animal {
    constructor(sonido, alimentos, hábitat, nombreCientífico) {
        super(sonido, alimentos, hábitat, nombreCientífico);
    }
}


class León extends Felino {
    constructor() {
        super("Rugido", "Carnívoro", "Praderas", "Panthera leo");
    }

    getSonido() {
        return this.sonido;
    }

    getAlimentos() {
        return this.alimentos;
    }

    getHábitat() {
        return this.hábitat;
    }

    getNombreCientífico() {
        return this.nombreCientífico;
    }
}


class Gato extends Felino {
    constructor() {
        super("Maullido", "Ratones", "Doméstico", "Felis silvestris catus");
    }

    getSonido() {
        return this.sonido;
    }

    getAlimentos() {
        return this.alimentos;
    }

    getHábitat() {
        return this.hábitat;
    }

    getNombreCientífico() {
        return this.nombreCientífico;
    }
}


class Prueba {
   
    static main() {
        const animales = [
            new Gato(),
            new Perro(),
            new Lobo(),
            new León()
        ]; 
        for (const animal of animales) {
            console.log(animal.getNombreCientífico());
            console.log("Sonido: " + animal.getSonido());
            console.log("Alimentos: " + animal.getAlimentos());
            console.log("Hábitat: " + animal.getHábitat());
            console.log();
        }
    }
}


Prueba.main();