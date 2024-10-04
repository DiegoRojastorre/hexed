class Persona {
    constructor(nombre, añoNacimiento) {
        this.nombre = nombre; 
        this.añoNacimiento = new Date(añoNacimiento); 
    }

    
    static calcularEdad(fechaNacimiento, fechaActual) {
        
        if (fechaNacimiento && fechaActual) {
            const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
            const mes = fechaActual.getMonth() - fechaNacimiento.getMonth();
            
            if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
                return edad - 1;
            }
            return edad; 
        }
        return 0; 
    }
    
    
    static main() {
        const nombre = prompt("Nombre = "); 
        console.log("Fecha de nacimiento");
        const día = parseInt(prompt("Día = "), 10); 
        const mes = parseInt(prompt("Mes (1-12) = "), 10); 
        const año = parseInt(prompt("Año = "), 10); 

        
        const fechaNacimiento = new Date(año, mes - 1, día); 
        const hoy = new Date(); 
        const años = Persona.calcularEdad(fechaNacimiento, hoy); 

        console.log(`Fecha de nacimiento = ${fechaNacimiento.toLocaleDateString()}`);
        console.log(`Años = ${años}`);
    }
}

Persona.main();