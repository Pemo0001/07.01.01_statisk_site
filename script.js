function toggleMenu() {
  var menu = document.querySelector(".menu-items");
  var burger = document.querySelector(".burger-menu");

  menu.classList.toggle("active");
  burger.classList.toggle("active");
}

// Add an event listener for each menu item
var menuItems = document.querySelectorAll(".menu-items a");
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", function () {
    // Close the menu when a menu item is clicked
    var menu = document.querySelector(".menu-items");
    var burger = document.querySelector(".burger-menu");

    menu.classList.remove("active");
    burger.classList.remove("active");
  });
});

const urlParams = new URLSearchParams(window.location.search);
const season = urlParams.get("season");

const url = "https://kea-alt-del.dk/t7/api/products?season=" + season;

fetch(url)
  .then((response) => response.json())
  .then(dataReceived);

function dataReceived(data) {
  //We have the data
  console.log(data);
  data.forEach(listProducts);
}

function listProducts(oneProduct) {
  console.log("listProducts");
  const product = document.querySelector("template").content;
  const myClone = product.cloneNode(true);

  myClone.querySelector(".productname").textContent = oneProduct.productdisplayname;
  myClone.querySelector(".category").textContent = oneProduct.category;
  myClone.querySelector(".price").textContent = oneProduct.price;
  myClone.querySelector(".smallImage").src = `https://kea-alt-del.dk/t7/images/webp/640/${oneProduct.id}.webp`;
  myClone.querySelector(".readmore").setAttribute("href", `produkt.html?id=${oneProduct.id}`);
  if (oneProduct.soldout) {
    myClone.querySelector("article").classList.add("soldOut");
  }
  myClone.querySelector(".discounted").innerHTML = `<p>${oneProduct.discount}% off</p>`;
  const parent = document.querySelector("main");
  parent.appendChild(myClone);
}
