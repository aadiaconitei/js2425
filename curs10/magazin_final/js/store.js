// salveaza datele in loacalSorage
const setStorageItem = (name, item) => {
    localStorage.setItem(name, JSON.stringify(item))
}
// returneaza datele din localStorage
const getStorageItem = (item) => {
    let storageItem = localStorage.getItem(item)
    if (storageItem) {
        storageItem = JSON.parse(localStorage.getItem(item))
    } else {
        storageItem = []
    }
    return storageItem
}

// salveaza toate produsele in localStorage
let store = getStorageItem('store');
const setupStore = (products) => {
    store = products.map((product) => {
        //Metoda1
        // Extragem proprietățile `id` și `fields` din obiectul `product`
        // const id = product.id;
        // const fields = product.fields;

        // // Extragem proprietățile `featured`, `name`, `price`, `company`, `colors` și `image` din obiectul `fields`
        // // și redenumim `image` în `img`
        // const featured = fields.featured;
        // const name = fields.name;
        // const price = fields.price;
        // const company = fields.company;
        // const colors = fields.colors;
        // const img = fields.image;


        //Metoda2
        // metoda mai compacta de a defini si artibui mai multe variabile in acelasi timp
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        const {
            id,
            fields: { featured, name, price, company, colors, image: img },
        } = product;
        const image = img[0].thumbnails.large.url;
        return { id, featured, name, price, company, colors, image };
    });
    setStorageItem('store', store);
};


// cauta un produs 
const findProduct = (id) => {
    let product = store.find((product) => product.id === id);
    return product;
};

// formateaza pretul
const formatPrice = (price) => {
    let formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
    }).format((price / 1).toFixed(2))
    return formattedPrice
}
const getElement = (selection) => {
    const element = document.querySelector(selection)
    if (element) return element
    throw new Error(`Please check "${selection}" selector, no such element exist`)
}
