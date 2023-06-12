const url = new URL(window.location.href);
const redir_url = url.searchParams.get("app_offer");
const image_url = url.searchParams.get("app_product_image_url");
const prod_name = url.searchParams.get("app_product_name");
const app_casino_bonus = url.searchParams.get("app_casino_bonus");

let links = document.querySelectorAll("a");
let prod_image = document.querySelectorAll(".prod_image");
let prod_names = document.querySelectorAll(".brandName");
let casino_bonus = document.querySelectorAll(".casino_bonus");

links.forEach((item) => {
  item.href = redir_url;
});

prod_image.forEach((item) => {
  if (image_url) {
    item.src = image_url;
    item.alt = prod_name;
  } else {
    item.src = "images/logo.png";
  }
});

prod_names.forEach((item) => {
  if (prod_name) {
    item.innerHTML = prod_name;
  } else {
    item.innerHTML = "Example Product";
  }
});
casino_bonus.forEach((item) => {
  if (casino_bonus) {
    item.innerHTML = app_casino_bonus;
  } else {
    item.innerHTML = "";
  }
});

const today = new Date();
const options = { weekday: "long", month: "long", day: "numeric", year: "numeric" };
const dateElements = document.getElementsByClassName("currentDate");
for (let i = 0; i < dateElements.length; i++) {
  dateElements[i].innerText = today.toLocaleDateString("en-US", options);
}

let currentYear = document.getElementsByClassName("currentYear");
for (let i = 0; i < currentYear.length; i++) {
  currentYear[i].innerText = today.getFullYear();
}

// if (document.cookie.indexOf("visited=true") > -1) {
//   window.location = redir_url;
// } else {
//   var expirationDate = new Date();
//   expirationDate.setFullYear(expirationDate.getFullYear() + 1);
//   document.cookie = "visited=true; expires=" + expirationDate.toUTCString() + "; path=/";
// }
