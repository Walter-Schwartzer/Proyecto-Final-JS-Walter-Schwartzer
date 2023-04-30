

function contenido(){
    let edad = prompt("Ingrese su edad");
    if(edad >= 18){
        alert("Usted va a poder ver el catalogo completo y poder realizar compras");
    } else{
        alert("Usted podra ver el catalogo completo pero no puede realizar compras por nuestras politicas de seguridad");
    }
}
const saludar = () =>{
    let nombre = prompt("ingrese su nombre");
    if(nombre !== ""){
        alert(`Bienvenido/a a Deco En Sillas ${nombre}`); 
    } else{
        alert("Lo siento, no pudimos identificarlo");
        while(nombre === ""){
            let nombre = prompt("ingrese nuevamente su nombre");
            alert(`Bienvenido/a a Deco En Sillas ${nombre}`);
            break
        }
    }
}

// while (nombre === ""){
//     alert("lo siento, no pudimos identificarlo");
//     let nombre = prompt("Ingrese nuevamente su nombre");
//     if(nombre !== ""){
//         alert(`Bienvenido/a a Deco En Sillas ${nombre}`);
//     }
//     return(`Bienvenido/a a Deco En Sillas ${nombre}`);
// }
// alert(`Bienvenido/a a Deco En Sillas ${nombre}`);

contenido();
saludar();


alert("gracias por visitar la primera Pre-Entrega");

const despedir = () =>{
    let cantidadDeVeces = parseInt(prompt("Ingrese un numero"));
    for(let i = 1; i <= cantidadDeVeces; i++){
        alert("Nos vemos en la siguiente Pre-entrega");
    }    
}

despedir();


class Sillas{
    constructor(tipo, precio, color){
        this.tipo = tipo;
        this.precio = precio;
        this.color = color;
        this.info = `silla ${this.tipo}, para la comodidad, con un valor de: ${this.precio}, y de color: ${this.color}.`;
    }

    verInfo(){
        document.write(this.info + "<br>");
    }
}


const silla1 = new Sillas ("acolchonada", "$" + 20000, "negro");
const silla2 = new Sillas ("con apoya brazos", "$" + 15000, "blanco");
const silla3 = new Sillas ("acolchonada", "$" + 19000, "gris");

silla1.verInfo();
silla2.verInfo();
silla3.verInfo();



