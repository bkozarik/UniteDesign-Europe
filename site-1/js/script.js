let currentData = document.querySelector(".currentData");
let now = new Date();

now.setHours(now.getHours() - 2);

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes;
  return strTime;
}

document.querySelector("span.currentDate").innerHTML = now.toLocaleDateString("de-AT", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

// script for data-end
