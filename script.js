// product data array
const products = [
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 39.99 },
    { id: 3, name: 'Product 3', price: 49.99 },
];

// render products function
function renderProducts() {
    const productContainer = document.getElementById('product-container');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `<h3>${product.name}</h3><p>Price: $${product.price}</p>`;
        const addToCartButton = document.createElement('button');
        addToCartButton.innerText = 'Add to Cart';
        addToCartButton.onclick = () => addToCart(product.id);
        productDiv.appendChild(addToCartButton);
        productContainer.appendChild(productDiv);
    });
}

// cart handling
let cart = [];
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert(`${product.name} has been added to your cart!`);
}

// contact form handling
const contactForm = document.getElementById('contact-form');
contactForm.onsubmit = function(event) {
    event.preventDefault();
    const formData = new FormData(contactForm);
    console.log('Contact Form Submitted:', Object.fromEntries(formData));
    alert('Thank you for contacting us!');
};

// Call the renderProducts function to display products
renderProducts();
