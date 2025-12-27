document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("payment-form");
  const message = document.getElementById("payment-message");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("card-name").value.trim();
    const number = document.getElementById("card-number").value.trim();
    const expiry = document.getElementById("expiry").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    if (!name || !number || !expiry || !cvv) {
      message.textContent = "Please fill out all fields.";
      message.style.color = "red";
      return;
    }

    // Fake validation (replace with real payment gateway later)
    if (number.length === 16 && cvv.length === 3) {
      message.textContent = "Payment Successful! Redirecting...";
      message.style.color = "green";

      // Simulate redirection to success page
      setTimeout(() => {
        window.location.href = "success.html";
      }, 2000);
    } else {
      message.textContent = "Invalid card details.";
      message.style.color = "red";
    }
  });
});
