// js/cart.js

document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("checkout-btn");

  // Sample cart data (replace with actual localStorage or backend data)
  const cart = JSON.parse(localStorage.getItem("cart")) || [
    {
      name: "Paracetamol 500mg",
      price: 500,
      quantity: 2,
      image: "images/paracetamol.jpg"
    },
    {
      name: "Ibuprofen 200mg",
      price: 700,
      quantity: 1,
      image: "images/ibuprofen.jpg"
    }
  ];

  function displayCartItems() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      const itemHTML = `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" />
          <div class="cart-item-info">
            <h3>${item.name}</h3>
            <p>Price: ₦${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Subtotal: ₦${itemTotal}</p>
            <button class="remove-btn" data-index="${index}">Remove</button>
          </div>
        </div>
      `;

      cartItemsContainer.insertAdjacentHTML("beforeend", itemHTML);
    });

    cartTotal.textContent = `₦${total}`;
  }

  function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
  }

  cartItemsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const index = parseInt(e.target.dataset.index);
      removeItem(index);
    }
  });

  checkoutBtn.addEventListener("click", () => {
    alert("Proceeding to checkout...");
    // Add checkout navigation or backend connection here
  });

  displayCartItems();
});
