// js/product-details.js

document.addEventListener("DOMContentLoaded", () => {
  // Simulated product data (normally would come from backend or localStorage)
  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct")) || {
    name: "Paracetamol 500mg",
    image: "images/paracetamol.jpg",
    price: "₦500",
    description: "Effective pain relief and fever reduction medication."
  };

  const container = document.getElementById("product-detail-container");

  container.innerHTML = `
    <div class="product-detail-box">
      <div class="product-image">
        <img src="${selectedProduct.image}" alt="${selectedProduct.name}" />
      </div>
      <div class="product-info">
        <h2>${selectedProduct.name}</h2>
        <p class="price">${selectedProduct.price}</p>
        <p class="description">${selectedProduct.description}</p>
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" min="1" value="1">
        <button class="btn add-to-cart">Add to Cart</button>
      </div>
    </div>
  `;

  document.querySelector(".add-to-cart").addEventListener("click", () => {
    const quantity = parseInt(document.getElementById("quantity").value);
    alert(`Added ${quantity} x ${selectedProduct.name} to cart!`);
    // Add cart logic here later...
  });
});
