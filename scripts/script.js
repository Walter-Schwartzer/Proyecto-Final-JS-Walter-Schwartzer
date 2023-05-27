

// // funciones

// function contenido(){
//     let edad = prompt("Ingrese su edad");
//     if(edad >= 18){
//         alert("Usted va a poder ver el catalogo completo y poder realizar compras");
//     } else{
//         alert("Usted podra ver el catalogo completo pero no puede realizar compras por nuestras politicas de seguridad");
//     }
// }
// const saludar = () =>{
//     let nombre = prompt("ingrese su nombre");
//     if(nombre !== ""){
//         alert(`Bienvenido/a a Deco En Sillas ${nombre}`); 
//     } else{
//         alert("Lo siento, no pudimos identificarlo");
//         while(nombre === ""){
//             let nombre = prompt("ingrese nuevamente su nombre");
//             alert(`Bienvenido/a a Deco En Sillas ${nombre}`);
//             break
//         }
//     }
// }
// const despedir = () =>{
//     let cantidadDeVeces = parseInt(prompt("Ingrese un numero"));
//     for(let i = 1; i <= cantidadDeVeces; i++){
//         alert("Nos vemos en la siguiente Pre-entrega");
//     }    
// }

// // // objetos

// // // class Sillas{
// // //     constructor(tipo, precio, color){
// // //         this.tipo = tipo;
// // //         this.precio = precio;
// // //         this.color = color;
// // //         this.info = `silla ${this.tipo}, para la comodidad, con un valor de: ${this.precio}, y de color: ${this.color}.`;
// // //     }
// // //     verInfo(){
// // //         document.write(this.info + "<br>");
// // //     }
// // // }

// // const silla1 = new Sillas ("acolchonada", "$" + 20000, "negro");
// //const silla2 = new Sillas ("con apoya brazos", "$" + 15000, "blanco");
// // const silla3 = new Sillas ("acolchonada", "$" + 19000, "gris");

// //llamando objetos

// //silla1.verInfo();
// //silla2.verInfo();
// //silla3.verInfo();

// // llamando funciones

// contenido();
// saludar();
// despedir();


// // variables
// const numerosFiltro = [20000, 30000, 15000, 19000, 4000, 31000, 7000, 50000, 20500];
// const colores = ["negro","rojo","azul","blanco","gris"]

// // arrays

// const categorias = ["sillas", "mesas"];

// const sillaNegra = [
//     {
//         id: 1,
//         producto: "silla acolchonada",
//         color: "negro",
//         precio: 20000,
//         categoria: "silla",
//     },
//     {
//         id: 2,
//         producto: "silla acolchonada",
//         color: "blanco",
//         precio: 21000,
//         categoria: "silla",
//     },
//     {
//         id: 3,
//         producto: "silla acolchonada",
//         color: "gris",
//         precio: 20500,
//         categoria: "silla",
//     }
// ];
// const mesaNegra = [
//     {
//         id: 2,
//         producto: "mesa redonda",
//         color: "negro",
//         precio: 30000,
//         categoria: "mesa",
//     },
//     {
//         id: 2,
//         producto: "mesa redonda",
//         color: "blanco",
//         precio: 31000,
//         categoria: "mesa",
//     },
//     {
//         id: 3,
//         producto: "mesa redonda",
//         color: "gris",
//         precio: 30500,
//         categoria: "mesa",
//     }
// ];
// const carrito = [];

// const init = () =>{
//     alert(`lista de inventario por categorias: 
//             1: Sillas
//             2: Mesas`);
//         const listado = sillaNegra.reduce((acc, el) => acc += `${el.id} - ${el.producto} - $${el.precio} \n`, "\n");
//         const elecUser = parseInt(prompt(`Ingrese el nro deseado ${listado}`));
//         const buscarProd = sillaNegra.find(p => p.id === elecUser);
//         console.log(buscarProd);
//         const nuevoObjeto = {
//             id: buscarProd.id,
//             producto: buscarProd.producto,
//         color: buscarProd.color,
//         precio: buscarProd.precio,
//         categoria: buscarProd.categoria,
//         cantidad : 1,
//     };
//     carrito.push(nuevoObjeto);
// }

// init()

// //funciones con arrays
// const sillasFunction = () =>{
//     let colorPregunta = prompt("color de la silla");
//     let pregunta = prompt("elija un precio de a partir de 15000 a 50000");
//     if(colorPregunta === colores[0] || pregunta === numerosFiltro[0]){
//         console.log(sillaNegra[0]);
//     } else if(colorPregunta === colores[3] || pregunta === numerosFiltro[0]){
//         console.log(sillaNegra[1]);
//     }else if(colorPregunta === colores[4] || pregunta === numerosFiltro[0]){
//         console.log(sillaNegra[2]);
//     }else{
//         alert("Aun no tenemos disponible esa silla")
//     }
// }

// const mesasFunction = () =>{
//     let colorMesa = prompt("color de la mesa");
//     let pregunta = prompt("elija un precio de a partir de 15000 a 50000");
//     if(colorMesa === colores[0] || pregunta === numerosFiltro[1]){
//         console.log(mesaNegra);
//     } else{
//         alert("Aun no tenemos disponible esa mesa")
//     }

// }

// const cate = () =>{
//     let categoriaPregunta = prompt("Ingrese la busqueda deseada: sillas y mesas").toLowerCase();
//     const filtrar = sillaNegra.filter(p => p.categoria === categoriaPregunta);
//     console.log(filtrar);
// }

// //llamando funciones

// cate();


// // // var / prompt

// let pregunta = prompt("elija un precio de a partir de 15000 a 50000"); let colorPregunta = prompt("color");

// //funciones con arrays

// const precios = () => {
//     let filtro = numerosFiltro.filter(function(item){
//         return item >= pregunta;
//     });
//     alert(filtro);    
// }
// const colorSilla = () =>{
//     if(colorPregunta === colores[0]){
//         alert(`Esto es ${colores[0]}`);
//     } else if(colorPregunta === colores[1]){
//         alert(`Esto es ${colores[1]}`);
//     }else if(colorPregunta === colores[2]){
//         alert(`Esto es ${colores[2]}`);
//     }else if(colorPregunta === colores[3]){
//         alert(`Esto es ${colores[3]}`);
//     }else{
//         alert("No tenemos disponible ese color")
//     }
// }

// //llamando funciones

// precios();
// colorSilla();


// let carrito = [];


// let seleccion = prompt("desea comprar");


// while(seleccion != "si" && seleccion != "no"){
//     alert("pls ingresa si o no");
//     seleccion = prompt("desea comprar");
// }

// if(seleccion == "si"){
//     alert("a continuacion los producs");
//     let todosLosProductos = StockMesa.map((producto) => producto.categoria + " " + producto.precio + "$");
//     alert(todosLosProductos)
// }else if(seleccion == "no"){
//     alert("chau")
// }



// while(seleccion != "no"){
//     let producto = prompt("agrega un prod a tu carrito");
//     let precio = 0;

//     if(producto == "mesa niño" || producto == "mesa redonda" || producto == "mesa rectangular"){
//         switch(producto){
//             case "mesa niño":
//                 precio = 20000;
//                 break;
//                 case "mesa redonda":
//                     precio = 10000;
//                     break;
//                     case "mesa rectangular":
//                         precio = 30000;
//                         break;
//                         default:
//                             break;
//             }
//             let unidades = parseInt(prompt("cuantas quiere llevar"));
//             carrito.push({producto, unidades, precio});
//             console.log("🚀 ~ file: carrito.js:151 ~ carrito:", carrito)
            
//     } else{
//         alert("no ta")
//     }

//     seleccion = prompt("quiere ma");
//     while(seleccion === "no"){
//         alert("gracias perro");
//         carrito.forEach((carritoFinal)=> {
//             console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total: ${carritoFinal.unidades * carritoFinal.precio}`)
//         });
//         break;
//     }

// }

// const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0); 
// console.log("🚀 ~ file: carrito.js:169 ~ total:", total)
let carrito = JSON.parse(localStorage.getItem(`carrito`)) || [];


const ctnSectionShop = document.getElementById(`ctn-productos`);
const ctnSectionShopMesas = document.getElementById(`ctn-productosMesas`);
const ctnSectionShopSillones = document.getElementById(`ctn-productosSillones`);
const verCarrito = document.getElementById(`verCarrito`);
const modal = document.getElementById(`ctn-modal`);
const cantidadCarrito = document.getElementById(`cantidadCarrito`);


const generarCarrito = (array) =>{
    array.forEach((product)=>{
        let article = document.createElement(`article`);
        article.classList.add(`card`);
        article.classList.add(`col-4`);
        article.innerHTML = `
        <div class="face front">
            <img src="${product.img}">
            <h3>${product.producto}</h3>
        </div>
        <div class="face back">
            <p>$${product.precio}</p>
            <button id="agregar${product.id}" class="link"><a>Agregar al carrito</a></button>
        </div>
        `;
    
        ctnSectionShop.append(article);
        ctnSectionShopMesas.append(article);
        ctnSectionShopSillones.append(article);
    
        const button = document.getElementById(`agregar${product.id}`);
    
        button.addEventListener("click", ()=>{
    
            const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
    
            if(repeat){
                carrito.map((prod) =>{
                    if(prod.id === product.id){
                        prod.cantidad++;
                    } 
                });
            } else {
    
                carrito.push({
                    id: product.id,
                    nombre: product.producto,
                    precio: product.precio,
                    cantidad: product.cantidad,
                });
                console.log("🚀 ~ file: carrito.js:47 ~ button.addEventListener ~ carrito:", carrito);
    
                carritoCounter();
                saveLocal();
            }
    
        });
        
    });
}

generarCarrito(stockSilla);
generarCarrito(StockMesa);
generarCarrito(StockSillones);

const crearCarrito = () =>{
    modal.innerHTML = "";
    modal.style.display = "flex";
    const modalHeader = document.createElement(`div`);
    modalHeader.className = `modal-header`;

    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito</h1>
    `;

    modal.append(modalHeader);

    const modalButton = document.createElement(`h1`);
    modalButton.innerText = "X";
    modalButton.classList = `modal-header-button`;

    modalButton.addEventListener(`click`, () =>{
        modal.style.display = "none";
    })

    modalHeader.append(modalButton);

    carrito.forEach((product)=>{
        let carritoCtn = document.createElement(`div`);
        carritoCtn.classList.add(`modal-ctn`);
        carritoCtn.innerHTML = `
        <h3>${product.nombre}</h3>
        <p>$${product.precio}</p>
        <span class="restar"> - </span>
        <p>cantidad: ${product.cantidad}</p>
        <span class="sumar"> + </span>
        <p>total: $${product.cantidad*product.precio}</p>
        <span class="delete-product">❌</span>
        `
        modal.append(carritoCtn);

        let eliminar = carritoCtn.querySelector(`.delete-product`);

        eliminar.addEventListener(`click`, () =>{
            eliminarProducto(product.id);
        })


        let restar = carritoCtn.querySelector(`.restar`);

        restar.addEventListener(`click`, () =>{
            if(product.cantidad !== 1){
                product.cantidad--;
            }
            saveLocal();                 
            crearCarrito();
        });

        let sumar = carritoCtn.querySelector(`.sumar`);

        sumar.addEventListener(`click`, () =>{
            product.cantidad++;
            saveLocal();
            crearCarrito();
        });

        console.log(carrito.length);
    });



    const precioTotal = carrito.reduce((acc, el)=>  acc + el.precio * el.cantidad, 0);

    const total = document.createElement(`div`);
    total.classList.add(`ctn-total`);
    total.innerHTML = `Total: $${precioTotal}`;

    modal.append(total);
}


verCarrito.addEventListener(`click`, crearCarrito);


const eliminarProducto = (id) =>{
const foundId = carrito.find((element) => element.id === id);
console.log("🚀 ~ file: carrito.js:139 ~ eliminarProducto ~ foundId:", foundId)

carrito = carrito.filter((carritoId) =>{
    return carritoId !== foundId;
});

crearCarrito();
saveLocal()
carritoCounter();
};

const carritoCounter = () =>{
cantidadCarrito.style.display = `block`;

const carritoLength = carrito.length;

localStorage.setItem(`carritoLength`, JSON.stringify(carritoLength));

cantidadCarrito.innerText = JSON.parse(localStorage.getItem(`carritoLength`));
};

const saveLocal = () =>{
localStorage.setItem(`carrito`, JSON.stringify(carrito));
};

carritoCounter();



