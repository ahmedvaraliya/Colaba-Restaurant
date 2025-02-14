// let cart = [];

// function addToCart(item, price) {
//     const cartItem = {
//         name:item,
//         price: price,
//     };
//     cart.push(cartItem);
//     console.log(cart);
//     alert(`${item} has been added to your cart.`);
// }

// document.querySelectorAll('.add-to-cart').forEach(button => {
//     button.addEventListener('click', function() {
//         const item = this.getAttribute('data-item');
//         const price = this.getAttribute('data-price');
//         addToCart(item, price);
//     });
// });

///////////////////////////////////////////////////////////////////////////////////////////
let cart = [];

function addToCart(item, price) {
    const cartItem = {
        name: item,
        price: price,
    };
    cart.push(cartItem);

    alert(`${item} has been added to your cart.`);

    updateCartDisplay();
}

document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const item = this.getAttribute('data-item');
          const price = this.getAttribute('data-price');
            addToCart(item, price);
        });
     });
     function updateCartDisplay() {
        const viewCartBtn = document.getElementById('view-cart-btn');
        viewCartBtn.style.display = 'block'; // Show the "View Cart" button
    }
    

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
//////////////////////////////////////////////////////////////////////////////////////////    


document.addEventListener("DOMContentLoaded", function() {
    const serviceLink = document.querySelector('a[href="#service"]');
    
    if (serviceLink) { 
        serviceLink.addEventListener('click', function(event) {
            event.preventDefault();
            
            const serviceSection = document.querySelector("#service");
            
            const currentDisplay = window.getComputedStyle(serviceSection).display;

            if (currentDisplay === "none") {
                serviceSection.style.display = "block"; 
            } else {
                serviceSection.style.display = "none"; 
            }
        });
    } else {
        console.error('Service link not found!');
    }
});





document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay");
    const underline = document.querySelector(".underline");

    setTimeout(function() {
        underline.style.width = "100%"; 

        setTimeout(function() {
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden'; 

            document.body.classList.add("show-content");
        }, 5000);
    }, 2000); 
});


///////////////////////////////////////////////////

document.getElementById("searchForm").addEventListener("submit", function(event) {
    // Disable search input and button when search is submitted
    document.getElementById("searchInput").disabled = true;
    document.getElementById("searchButton").disabled = true;

    // Optional: You can also add a loading indicator here if you want
    document.getElementById("searchButton").textContent = "Searching...";

    // Allow the form to submit
    return true;
});

// //////////////////////////////////////////

document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from submitting and showing results

    // Disable the search input field and button
    document.getElementById('searchInput').disabled = true;
    document.querySelector('button').disabled = true;

    // Display a message that search is blocked or not allowed
    document.getElementById('searchResults').innerHTML = "Search is blocked temporarily.";

    // Optionally, you can clear the input after blocking the search.
    document.getElementById('searchInput').value = ''; 
});

