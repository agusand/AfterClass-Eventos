const gridContainer = document.getElementById("js-gridContainer");
const searchInput = document.getElementById("js-searchInput");
/* const searchButton = document.getElementById("js-searchButton"); */

const htmlTemplate = (product) => {
	return `<div class="card">
                <p class="card__name">${product.name}</p>
                <p class="card__category">${product.category}</p>
                <p class="card__price">$${product.price}</p>
            </div>`;
};

const renderHTML = (products, container) => {
	container.innerHTML = "";
	if (products.length > 0) {
		for (const product of products) {
			const productInHTML = htmlTemplate(product);

			container.innerHTML += productInHTML;
		}
	} else {
		container.innerHTML = `<p class="container__message">No se encuentran productos</p>`;
	}
};

renderHTML(products, gridContainer);

const filterProducts = () => {
	const searchInputValue = searchInput.value;

	const filteredProducts = products.filter((product) => {
		const productNameLowerCase = product.name.toLowerCase();
		const productCategoryLowerCase = product.category.toLowerCase();

		const isFiltered =
			productNameLowerCase.includes(searchInputValue.toLowerCase()) ||
			productCategoryLowerCase.includes(searchInputValue.toLowerCase());

		return isFiltered;
	});

	renderHTML(filteredProducts, gridContainer);
};

/* searchButton.addEventListener("click", filterProducts); */

searchInput.addEventListener("keyup", filterProducts);
