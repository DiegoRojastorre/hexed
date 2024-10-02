class ArticuloCientifico {
    constructor(titulo, autor, palabrasClaves = [], publicacion = '', año = 0, resumen = '') {
        this.titulo = titulo;  
        this.autor = autor;    
        this.palabrasClaves = palabrasClaves.length > 0 ? palabrasClaves : new Array(3); 
        this.publicacion = publicacion;  
        this.año = año;     
        this.resumen = resumen; 
    }

    imprimir() {
        console.log("Título del artículo = " + this.titulo);
        console.log("Autor del artículo = " + this.autor);
        console.log("Palabras clave = ");
   
        for (let i = 0; i < this.palabrasClaves.length; i++) {
            console.log(this.palabrasClaves[i]);
        }
        console.log("Publicación = " + this.publicacion);
        console.log("Año = " + this.año);
        console.log("Resumen = " + this.resumen);
    }
}

// Función principal
function main() {
    let palabras = ["Física", "Espacio", "Tiempo"];
    let articulo = new ArticuloCientifico(
        "La teoría especial de la relatividad",
        "Albert Einstein",
        palabras,
        "Anales de Física",
        1913,
        "Las leyes de la física son las mismas en todos los sistemas de referencia inerciales."
    );
    articulo.imprimir();
}


main();