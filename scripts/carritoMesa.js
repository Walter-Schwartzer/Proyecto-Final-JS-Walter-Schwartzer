
const ctnSectionShopMesas = document.getElementById(`ctn-productosMesas`);


const creandoMesas = async () =>{
    const response = await fetch("../dataMesas.json");
    const data = await response.json();

    data.forEach((product) => {
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

        button.addEventListener("click", () => {
            const repeat = carrito.some(
            (repeatProduct) => repeatProduct.id === product.id
            );

            // repeat ? carrito.map ((prod) => { prod.id === product.id ? prod.cantidad++}) : carrito.push({id: product.id, nombre: product.producto, precio: product.precio, cantidad: product.cantidad,});

            if (repeat) {
            carrito.map((prod) => {
                if (prod.id === product.id) {
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
            console.log(
                "🚀 ~ file: carrito.js:47 ~ button.addEventListener ~ carrito:",
                carrito
            );

            carritoCounter();
            saveLocal();
            }
        });
        });
}

creandoMesas();


