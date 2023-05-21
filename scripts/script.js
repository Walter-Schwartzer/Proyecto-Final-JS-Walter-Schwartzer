

// funciones

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
const despedir = () =>{
    let cantidadDeVeces = parseInt(prompt("Ingrese un numero"));
    for(let i = 1; i <= cantidadDeVeces; i++){
        alert("Nos vemos en la siguiente Pre-entrega");
    }    
}

// objetos

// class Sillas{
//     constructor(tipo, precio, color){
//         this.tipo = tipo;
//         this.precio = precio;
//         this.color = color;
//         this.info = `silla ${this.tipo}, para la comodidad, con un valor de: ${this.precio}, y de color: ${this.color}.`;
//     }
//     verInfo(){
//         document.write(this.info + "<br>");
//     }
// }

// const silla1 = new Sillas ("acolchonada", "$" + 20000, "negro");
// const silla2 = new Sillas ("con apoya brazos", "$" + 15000, "blanco");
// const silla3 = new Sillas ("acolchonada", "$" + 19000, "gris");

//llamando objetos

// silla1.verInfo();
// silla2.verInfo();
// silla3.verInfo();

// llamando funciones

contenido();
saludar();
despedir();


// variables
const numerosFiltro = [20000, 30000, 15000, 19000, 4000, 31000, 7000, 50000, 20500];
const colores = ["negro","rojo","azul","blanco","gris"]

// arrays

const categorias = ["sillas", "mesas"];

const sillaNegra = [
    {
        id: 1,
        producto: "silla acolchonada",
        color: "negro",
        precio: 20000,
        categoria: "silla",
    },
    {
        id: 2,
        producto: "silla acolchonada",
        color: "blanco",
        precio: 21000,
        categoria: "silla",
    },
    {
        id: 3,
        producto: "silla acolchonada",
        color: "gris",
        precio: 20500,
        categoria: "silla",
    }
];
const mesaNegra = [
    {
        id: 2,
        producto: "mesa redonda",
        color: "negro",
        precio: 30000,
        categoria: "mesa",
    },
    {
        id: 2,
        producto: "mesa redonda",
        color: "blanco",
        precio: 31000,
        categoria: "mesa",
    },
    {
        id: 3,
        producto: "mesa redonda",
        color: "gris",
        precio: 30500,
        categoria: "mesa",
    }
];
const carrito = [];

const init = () =>{
    alert(`lista de inventario por categorias: 
            1: Sillas
            2: Mesas`);
    
    const listado = sillaNegra.reduce((acc, el) => acc += `${el.id} - ${el.producto} - $${el.precio} \n`, "\n");

    const elecUser = parseInt(prompt(`Ingrese el nro deseado ${listado}`));

    const buscarProd = sillaNegra.find(p => p.id === elecUser);

    console.log(buscarProd);

    const nuevoObjeto = {
        id: buscarProd.id,
        producto: buscarProd.producto,
        color: buscarProd.color,
        precio: buscarProd.precio,
        categoria: buscarProd.categoria,
        cantidad : 1,
    };
    carrito.push(nuevoObjeto);
}

init()

//funciones con arrays
const sillasFunction = () =>{
    let colorPregunta = prompt("color de la silla");
    let pregunta = prompt("elija un precio de a partir de 15000 a 50000");
    if(colorPregunta === colores[0] || pregunta === numerosFiltro[0]){
        console.log(sillaNegra[0]);
    } else if(colorPregunta === colores[3] || pregunta === numerosFiltro[0]){
        console.log(sillaNegra[1]);
    }else if(colorPregunta === colores[4] || pregunta === numerosFiltro[0]){
        console.log(sillaNegra[2]);
    }else{
        alert("Aun no tenemos disponible esa silla")
    }
}

const mesasFunction = () =>{
    let colorMesa = prompt("color de la mesa");
    let pregunta = prompt("elija un precio de a partir de 15000 a 50000");
    if(colorMesa === colores[0] || pregunta === numerosFiltro[1]){
        console.log(mesaNegra);
    } else{
        alert("Aun no tenemos disponible esa mesa")
    }

}

const cate = () =>{
    let categoriaPregunta = prompt("Ingrese la busqueda deseada: sillas y mesas").toLowerCase();
    const filtrar = sillaNegra.filter(p => p.categoria === categoriaPregunta);
    console.log(filtrar);
}

//llamando funciones

cate();


// var / prompt

let pregunta = prompt("elija un precio de a partir de 15000 a 50000");
let colorPregunta = prompt("color");

//funciones con arrays

const precios = () => {
    let filtro = numerosFiltro.filter(function(item){
        return item >= pregunta;
    });
    alert(filtro);    
}

const colorSilla = () =>{
    if(colorPregunta === colores[0]){
        alert(`Esto es ${colores[0]}`);
    } else if(colorPregunta === colores[1]){
        alert(`Esto es ${colores[1]}`);
    }else if(colorPregunta === colores[2]){
        alert(`Esto es ${colores[2]}`);
    }else if(colorPregunta === colores[3]){
        alert(`Esto es ${colores[3]}`);
    }else{
        alert("No tenemos disponible ese color")
    }
}

//llamando funciones

precios();
colorSilla();



