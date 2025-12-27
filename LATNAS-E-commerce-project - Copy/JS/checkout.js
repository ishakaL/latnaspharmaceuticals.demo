// js/checkout.js

document.addEventListener("DOMContentLoaded", () => {
  const checkoutForm = document.getElementById("checkout-form");

  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();
    const state = document.getElementById("state").value.trim();
    const localgovernment = document.getElementById("localgovernment").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!firstname || !lastname || !email || !state || !localgovernment || !address) {
      alert("Please fill out all required fields.");
      return;
    }

    // Simulate placing an order
    alert("Order placed successfully!\nThank you, " + name + ".");

    // Optionally clear cart and redirect
    localStorage.removeItem("cart");
    window.location.href = "payment.html";
  });
});
