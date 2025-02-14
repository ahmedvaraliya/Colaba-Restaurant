let cart = [];

function addToCart(item, price) {
    const cartItem = {
        name: item,
        price: price,
    };
    cart.push(cartItem);

    // Show alert when an item is added
    alert(`${item} has been added to your cart.`);

    // Update the cart display
    updateCartDisplay();
}

// Update Cart Display (show the View Cart button when an item is added)
function updateCartDisplay() {
    const viewCartBtn = document.getElementById('view-cart-btn');
    viewCartBtn.style.display = 'block'; // Show the "View Cart" button
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const item = this.getAttribute('data-item');
        const price = parseFloat(this.getAttribute('data-price'));
        addToCart(item, price);
    });
});

document.getElementById('view-cart-btn').addEventListener('click', function() {
    // Show the cart section
    const cartSection = document.getElementById('cart-section');
    const cartItemsList = document.getElementById('cart-items-list');
    const totalPriceElement = document.getElementById('total-price');

    // Clear the previous items in the cart
    cartItemsList.innerHTML = '';
    
    // Calculate the total price and list the cart items
    let totalPrice = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;
        cartItemsList.appendChild(itemElement);

        totalPrice += item.price;
    });

    // Display the total price
    totalPriceElement.textContent = `Total: ₹${totalPrice.toFixed(2)}`;

    // Show the cart section
    cartSection.style.display = 'block';
});

// Close Cart functionality
document.getElementById('close-cart-btn').addEventListener('click', function() {
    const cartSection = document.getElementById('cart-section');
    cartSection.style.display = 'none';
});


document.querySelectorAll('.add').forEach(button => {
  button.addEventListener('click', function() {
      const item = this.getAttribute('data-item');
      const price = parseFloat(this.getAttribute('data-price'));
      addToCart(item, price);
  });
});