
let carrito = [];


const ctnSectionShop = document.getElementById(`ctn-productos`);
const verCarrito = document.getElementById(`verCarrito`);
const modal = document.getElementById(`ctn-modal`);


stockSilla.forEach((product)=>{
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

    const button = document.getElementById(`agregar${product.id}`);

    button.addEventListener("click", ()=>{
        carrito.push({
            id: product.id,
            nombre: product.producto,
            precio: product.precio,
        })
        console.log("🚀 ~ file: carrito.js:141 ~ button.addEventListener ~ carrito:", carrito)
    })
    
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
            `
            modal.append(carritoCtn);

            let eliminar = document.createElement(`span`);
            eliminar.innerHTML = "❌";
            eliminar.classList.add(`delete-product`);

            carritoCtn.append(eliminar);
        });


    
        const precioTotal = carrito.reduce((acc, el)=>  acc + el.precio, 0);
    
        const total = document.createElement(`div`);
        total.classList.add(`ctn-total`);
        total.innerHTML = `Total: $${precioTotal}`;
    
        modal.append(total);
}


verCarrito.addEventListener(`click`, crearCarrito);


const eliminarProducto = () =>{
    const foundId = carrito.find()
}

