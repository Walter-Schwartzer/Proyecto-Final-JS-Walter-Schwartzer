

const creandoSillas = async () => {
    const response = await fetch("../dataSillas.json");
    const data = await response.json();
    data.forEach((product) => {
        const article = document.createElement(`article`);
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

        button.addEventListener("click", () => {
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
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
            carritoCounter();
            saveLocal();
        }
        });
    });    
};

creandoSillas();















