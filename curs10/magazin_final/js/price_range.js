let rangeMin = 0;
const range = document.querySelector(".range-selected");
const rangeInput = document.querySelectorAll(".range-input input");
const rangePrice = document.querySelectorAll(".range-price input");

let minRange = 0;
let maxRange = 8000;
window.addEventListener("load", (e) => {

    rangePrice[0].value = 0;
    rangePrice[1].value = 8000;
    range.style.left = "0%";
    range.style.right = "0%";
    rangeInput.forEach((input, index) => {
        rangeInput[0].value = 0;
        rangeInput[1].value = 8000;
    });
});

rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        minRange = parseInt(rangeInput[0].value);
        maxRange = parseInt(rangeInput[1].value);
        //alert("minRange: " + minRange + " maxRange: " + maxRange);
        if (maxRange - minRange < rangeMin) {

            if (e.target.className === "min") {
                rangeInput[0].value = maxRange - rangeMin;
            } else {
                rangeInput[1].value = minRange + rangeMin;
            }
        } else {
            rangePrice[0].value = minRange;
            rangePrice[1].value = maxRange;
            range.style.left = (minRange / rangeInput[0].max) * 100 + "%";
            range.style.right = 100 - (maxRange / rangeInput[1].max) * 100 + "%";
        }
        filterByPrice(minRange, maxRange);
    });
});

rangePrice.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minPrice = parseInt(rangePrice[0].value);
        let maxPrice = parseInt(rangePrice[1].value);
        //alert("minPrice: " + minPrice + " maxPrice: " + maxPrice);
        if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "min") {
                rangeInput[0].value = minPrice;
                range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
        filterByPrice(minPrice, maxPrice);
    });
});




// funcția de filtrare după preț
function filterByPrice(minPrice, maxPrice) {
    // alert("minPrice: " + typeof minPrice + " maxPrice: " + typeof maxPrice);
    const filteredProducts = productsJsonList.filter((product) => {

        return parseFloat(product.fields.price) >= minPrice && parseFloat(product.fields.price) <= maxPrice;
    });
    console.log('filteredProducts', filteredProducts)
    displayProducts(filteredProducts);
}



// TODO Metoda 2 sa finctioneze filtrarea dupa toate criteriile

// let filters = {
//   searchTerm: '',
//   category: 'all',
//   minPrice: 0,
//   maxPrice: 8000,
// };
// // funcția de aplicare a filtrelor
// function applyFilters() {
//   let filteredProducts = productsJsonList;

//   // Filtrare după termenul de căutare
//   if (filters.searchTerm.trim() && filters.searchTerm.trim().length > 2) {
//     filteredProducts = filteredProducts.filter((product) => {
//       return product.fields.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
//     });
//   }

//   // Filtrare după categorie
//   if (filters.category !== 'all') {
//     filteredProducts = filteredProducts.filter((product) => {
//       return product.fields.company.toLowerCase() === filters.category.toLowerCase();
//     });
//   }

//   // Filtrare după preț
//   filteredProducts = filteredProducts.filter((product) => {
//     return product.fields.price >= filters.minPrice && product.fields.price <= filters.maxPrice;
//   });

//   displayProducts(filteredProducts);
// }
