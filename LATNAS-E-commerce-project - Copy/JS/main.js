// js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      price: "₦500",
      image: "images/paracetamol.jpg"
    },
    {
      id: 2,
      name: "Amoxicillin 250mg",
      price: "₦1200",
      image: "C:\Users\Ishaqa\Desktop\my products/IMG_20100101_182429_496.jpg"
    },
    {
      id: 3,
      name: "Vitamin C 1000mg",
      price: "₦800",
      image: "images/vitamin-c.jpg"
    }
  ];

  const productContainer = document.getElementById("featured-products");

  featuredProducts.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p class="price">${product.price}</p>
      <button class="btn">Add to Cart</button>
    `;
    productContainer.appendChild(card);
  });
});
