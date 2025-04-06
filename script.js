document.addEventListener("DOMContentLoaded", function () {
  const orderButton = document.getElementById("orderBtn");

  if (orderButton) {
    orderButton.addEventListener("click", function () {
      alert("🎉 Your order has been placed! Thank you for choosing Sweet Delights.");
    });
  }
});
