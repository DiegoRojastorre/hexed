class EjemploStringTokenizer {
   
    static main() {
        
        const cadena1 = "PÉREZ GONZÁLEZ GUTIÉRREZ RODRÍGUEZ";
        
        const tokens1 = cadena1.split(" ");
        for (const token of tokens1) {
            console.log(token);
        }

        console.log(); 

        
        const cadena2 = "#1-ALVÁREZ #1-FERNÁNDEZ #1-GÓMEZ #1-HERNÁNDEZ";
       
        const tokens2 = cadena2.split(/#1-/);
        for (const token of tokens2) {
            if (token) { 
                console.log(token);
            }
        }
    }
}