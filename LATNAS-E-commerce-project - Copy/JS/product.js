// js/products.js

document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Paracetamol 500mg", category: "painkillers", price: "₦500", image: "images/paracetamol.jpg" },
    { id: 2, name: "Amoxicillin 250mg", category: "antibiotics", price: "₦1200", image: "images/amoxicillin.jpg" },
    { id: 3, name: "Vitamin C 1000mg", category: "supplements", price: "₦800", image: "images/vitamin-c.jpg" },
    { id: 4, name: "Ibuprofen 400mg", category: "painkillers", price: "₦600", image: "images/ibuprofen.jpg" },
    { id: 5, name: "Zinc Tablets", category: "supplements", price: "₦700", image: "images/zinc.jpg" },
    { id: 6, name: "Erythromycin 500mg", category: "antibiotics", price: "₦1500", image: "images/erythromycin.jpg" }
  ];

  const productList = document.getElementById("product-list");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");

  function renderProducts(filterText = "", category = "all") {
    productList.innerHTML = "";
    const filtered = products.filter(product => {
      const matchesCategory = category === "all" || product.category === category;
      const matchesText = product.name.toLowerCase().includes(filterText.toLowerCase());
      return matchesCategory && matchesText;
    });

    if (filtered.length === 0) {
      productList.innerHTML = '<p>No products found.</p>';
      return;
    }

    filtered.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("product-card");
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h4>${product.name}</h4>
        <p class="price">${product.price}</p>
        <button class="btn">Add to Cart</button>
      `;
      productList.appendChild(card);
    });
  }

  renderProducts();

  searchInput.addEventListener("input", () => {
    renderProducts(searchInput.value, categoryFilter.value);
  });

  categoryFilter.addEventListener("change", () => {
    renderProducts(searchInput.value, categoryFilter.value);
  });
});
