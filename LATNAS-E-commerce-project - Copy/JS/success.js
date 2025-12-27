// js/success.js
document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("customerName");
  if (name) {
    const message = document.querySelector(".success-section h2");
    message.textContent = `Thank you, ${name}, for your order!`;
    localStorage.removeItem("customerName");
  }
});
