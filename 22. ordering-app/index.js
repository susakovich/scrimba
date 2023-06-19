import { menuArray } from "./data.js";
const paymentForm = document.getElementById("modal");
let cartEl = document.getElementById("item-cart");

// Function to listen for events

document.addEventListener("click", function (e) {
  if (e.target.dataset.add) {
    addToCart(e.target.dataset.add);
  } else if (e.target.dataset.remove) {
    removeFromCart(e.target.dataset.remove);
  } else if (e.target.id === "order-complete") {
    const totalPrice = calculateTotalPrice();

    if (totalPrice > 0) {
      document.getElementById("modal").style.display = "block";
    }
  }
});

//Function for payment form and prevent the default Behaviour

paymentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.getElementById("full-name-value").value;

  paymentForm.style.display = "none";

  //hiding the checkout section
  document.getElementById("item-cart").style.display = "none";

  //showing the thanks message
  document.getElementById(
    "order-confirmed"
  ).innerHTML = `<div id="order-confirm" class="order-confirm">
  <h2>Thanks ${fullName}. Your order is on its way!</h2>
  </div>
  `;
});

// function to add to cart

function addToCart(itemId) {
  menuArray[itemId].quantity += 1;
  checkout();
}

// function to remove from cart

function removeFromCart(itemId) {
  menuArray[itemId].quantity -= 1;
  checkout();
}

//Function for Checkout Section

function checkout() {
  let totalPrice = 0;
  let cartHtml = `
    <h2>Your Orders</h2>
    <div class="items-added">
  `;

  menuArray.forEach((item) => {
    if (item.quantity > 0) {
      totalPrice += item.quantity * item.price;
      cartHtml += `
        <div class="item">
          <div class="details">
            <h2 id="cart-item-quantity" class="cart-item-quantity">(${
              item.quantity
            }x)</h2>
            <h2 id="cart-item">${item.name}</h2>
            <button class="remove-btn" data-remove="${item.id}">remove</button>
          </div>
          <div class="price">$${item.quantity * item.price}</div>
        </div>
      `;
    }
  });

  cartHtml += `
    </div>
    <div class="total-price">
      <h2>Total price</h2>
      <h3 id="total-price">$${totalPrice}</h3>
    </div>
  `;

  if (totalPrice > 0) {
    // Only display the "Complete Order" button if totalPrice is greater than 0
    cartHtml += `
      <div class="complete-order-btn">
        <button type="submit" class="cart-btn" id="order-complete">Complete Order</button>
      </div>
    `;
  }

  cartEl.innerHTML = cartHtml;
  return cartEl;
}

function calculateTotalPrice() {
  let totalPrice = 0;

  menuArray.forEach((item) => {
    if (item.quantity > 0) {
      totalPrice += item.quantity * item.price;
    }
  });

  return totalPrice;
}

// Rendering out the Menu

function render() {
  let menuEl = document.getElementById("items-menu");
  for (let menu of menuArray) {
    menuEl.innerHTML += ` 
        <div class="menu-item">
         <div class="item-content">
        <h2 class="item-graphic">${menu.emoji}</h1>
         <div class="item-detail">
        <ul>
            <li class="item-title">${menu.name}</li>
            <li class="item-description">${menu.ingredients}</li>
            <li class="item-price">$${menu.price}</li>
        </ul>
    </div> 
    </div> 
    <button class="add-btn" data-add = "${menu.id}">+</button>
    </div>
    `;
  }
  return menuEl;
}

render();
