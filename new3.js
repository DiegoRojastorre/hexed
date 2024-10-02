class Cadena {
    
    constructor() {
        this.cadenaInicial = " Programación Orientada a Objetos ";
    }

    
    static main() {
        let cadena = new Cadena();

   
        let longitud = cadena.cadenaInicial.length;
        console.log("La longitud del String es = " + longitud);

       
        let cadenaSinEspacios = cadena.cadenaInicial.trim();
        console.log("El String sin espacios en blanco = " + cadenaSinEspacios);

    
        let cadenaMayuscula = cadenaSinEspacios.toUpperCase();
        console.log("El String en mayúscula = " + cadenaMayuscula);

       
        let cadenaConcatenada = cadenaMayuscula.concat("12345");
        console.log("El String concatenado = " + cadenaConcatenada);

       
        let cadenaExtraida = cadenaConcatenada.substring(24, 31);
        console.log("El String extraído = " + cadenaExtraida);

        
        let cadenaReemplazada = cadenaExtraida.replace(/O/g, "X");
        console.log("El String reemplazado = " + cadenaReemplazada);

        
        let comparacion = cadenaReemplazada === "Programación";
        console.log("Los String son iguales = " + comparacion);
    }
}


Cadena.main();