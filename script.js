document.addEventListener("DOMContentLoaded", () => {
    const cartButton = document.getElementById("cartButton");
    const cart = document.getElementById("cart");
    const cartItems = document.getElementById("cartItems");
    const checkoutButton = document.getElementById("checkoutButton");
    const vinylButtons = document.querySelectorAll(".vinyler");

    let cartData = [];

    cartButton.addEventListener("click", () => {
        cart.classList.toggle("hidden");
    });

    vinylButtons.forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            
            cartData.push(name);
            updateCart();
            cart.classList.remove("hidden");
        });
    });

    function updateCart() {
        cartItems.innerHTML = "";
        cartData.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            cartItems.appendChild(li);
        });
    }

    checkoutButton.addEventListener("click", () => {
        alert("Proceeding to checkout...");
        cartData = [];
        updateCart();
    });
});
