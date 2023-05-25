let carrito = JSON.parse(localStorage.getItem(`carrito`)) || [];


const ctnSectionShopMesas = document.getElementById(`ctn-productosMesas`);
const verCarrito = document.getElementById(`verCarrito`);
const modal = document.getElementById(`ctn-modal`);
const cantidadCarrito = document.getElementById(`cantidadCarrito`);

StockMesa.forEach((product)=>{
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

    ctnSectionShopMesas.append(article);

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