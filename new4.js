class Envoltorio {
    
    constructor() {
        this.a = 7;
        this.b = 100;
        this.c = 28.9; 
        this.d = 271.8; 
        this.e = 'M'; 

       
        this.objetoByte = null;
        this.objetoInteger = null;
        this.objetoFloat = null;
        this.objetoDouble = null;
        this.objetoChar = null;
    }

   
    convertirToWrapper() {
        this.objetoByte = this.a; 
        this.objetoInteger = this.b;
        this.objetoFloat = this.c;
        this.objetoDouble = this.d;
        this.objetoChar = this.e;

        console.log("Objeto Byte = " + this.objetoByte);
        console.log("Objeto Integer = " + this.objetoInteger);
        console.log("Objeto Float = " + this.objetoFloat);
        console.log("Objeto Double = " + this.objetoDouble);
        console.log("Objeto Character = " + this.objetoChar);
    }

   
    convertirToTipoPrimitivo() {
        let tipoByte = this.objetoByte;
        let tipoInt = this.objetoInteger;
        let tipoFloat = this.objetoFloat;
        let tipoDouble = this.objetoDouble;
        let tipoChar = this.objetoChar;

        console.log("Tipo byte = " + tipoByte);
        console.log("Tipo int = " + tipoInt);
        console.log("Tipo float = " + tipoFloat);
        console.log("Tipo double = " + tipoDouble);
        console.log("Tipo char = " + tipoChar);
    }

   
    consultarChar() {
        let esMinuscula = this.e === this.e.toLowerCase(); 
        console.log("¿El carácter e = " + this.e + " está en minúscula? = " + esMinuscula);

        let esMayuscula = this.e === this.e.toUpperCase(); 
        console.log("¿El carácter e = " + this.e + " está en mayúscula? = " + esMayuscula);

        let esLetra = /[a-zA-Z]/.test(this.e); 
        console.log("¿El carácter e = " + this.e + " es una letra? = " + esLetra);

        let esDigito = /\d/.test(this.e); 
        console.log("¿El carácter e = " + this.e + " es un dígito? = " + esDigito);

        let charMinuscula = this.e.toLowerCase(); 
        console.log("Carácter e = " + this.e + " convertido a minúscula = " + charMinuscula);
    }

    
    static main() {
        let wrapper = new Envoltorio();
        wrapper.convertirToWrapper();
        wrapper.convertirToTipoPrimitivo();
        wrapper.consultarChar();
    }
}

Envoltorio.main();