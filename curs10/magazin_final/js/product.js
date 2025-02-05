
// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtnProduct = getElement('.addToCartBtn');



// cart product
let productID;

// show product when page loads
window.addEventListener('DOMContentLoaded', async function () {
  // query string-ul din URL: ?id=${id}
  const urlID = window.location.search;

  try {
    
      const product =  productsFilter(urlID);
      console.log(product, typeof product);
      // grab data
      const { id, name, company, price, colors, image} = product[0];
      productID = id;

     
      
      // set values

      document.title = `${name.toUpperCase()} | Comfy`;
      pageTitleDOM.textContent = `Home / ${name}`;
      imgDOM.src = image;
      titleDOM.textContent = name;
      companyDOM.textContent = `by ${company}`;
      priceDOM.textContent = formatPrice(price);
      descDOM.textContent = '';//description;
      colors.forEach((color) => {
        const span = document.createElement('span');
        span.classList.add('product-color');
        span.style.backgroundColor = `${color}`;
        colorsDOM.appendChild(span);
      });
    
  } catch (error) {
    console.log(error);
  }

  loading.style.display = 'none';
});

function productsFilter(idUrl){
  console.log(store);
 
  let regex = /\=(.*)/gm;
  var idProd = idUrl.match(regex);
  idProd = idProd[0].slice(1);
  
  // filtrez in localStorage dupa id
  const oneProduct = store.filter(product=>product.id == idProd);
  return oneProduct;
}

cartBtnProduct.addEventListener('click', function () {
  addToCart(productID);
});
