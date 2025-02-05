
const productsDOM = document.querySelector('.products-container');
const searchForm = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');
const categoryButtons = document.querySelectorAll('.company-btn');

const fetchProducts = function () {
  productsDOM.innerHTML = '<div class="loading"></div>';
  try {
    // productsJsonList sunt produsele din data.js
    // console.log(productsJsonList);
    const data = productsJsonList;
    return data;
  } catch (error) {
    productsDOM.innerHTML = '<p class="error">there was an error</p>';
  }
};


// afisez produsele
const displayProducts = (list) => {
  const productList = list
    .map((product) => {
      const id = product.id;
      const company = product.fields.company;
      const title = product.fields.name;
      const price = product.fields.price;
      const img = product.fields.image[0].url;
      // sau in forma compacta: ES6 destructuring assignment
      // const { id } = product;
      // const { name: title,company, price } = product.fields;
      // const { url: img } = product.fields.image[0];

      return `<article class="product">
      <div class="product-container">
        <img src="${img}" class="product-img img" alt="${title}">
       
        <div class="product-icons">
          <a href="product.html?id=${id}" class="product-icon">
            <i class="fas fa-search"></i>
          </a>
          <button class="product-cart-btn product-icon" data-id="${id}">
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
      <footer>
        <p class="product-name">${title}</p>
        <h5>${company}</h5>
        <h4 class="product-price">${formatPrice(price)}</h4>
      </footer>
    </article>
      `;
    })
    .join('');
  productsDOM.innerHTML = productList;
};

// functia de cautare
function searchProducts(term) {
  if (!term.trim() || term.trim().length <= 2) {
    displayProducts(productsJsonList);
    return;
  }
  const filteredProducts = productsJsonList.filter((product) => {
    return product.fields.name.toLowerCase().includes(term.toLowerCase());
  });
  displayProducts(filteredProducts);
};
// eveniment de ascultare pentru submit-ul formularului de căutare
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value;

  searchProducts(searchTerm);
});


// funcția de filtrare după categorie
function filterByCategory(category) {
  if (category === 'all') {
    displayProducts(productsJsonList);
    return;
  }
  const filteredProducts = productsJsonList.filter((product) => {
    return product.fields.company.toLowerCase() === category.toLowerCase();
  });
  displayProducts(filteredProducts);
}
// eveniment de ascultare pentru butoanele de categorie
categoryButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const category = e.currentTarget.dataset.category;
    filterByCategory(category);
  });
});

const start = function () {
  console.log('start');
  const data = fetchProducts();
  // salvez in localStorage
  setupStore(data);
  displayProducts(data);
};

start();





