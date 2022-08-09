"use strict";

window.addEventListener("load", function () {
  // store tabs variable
  var myTabs = document.querySelectorAll(".services_nav > div");

  function myTabClicks(tabClickEvent) {
    for (var i = 0; i < myTabs.length; i++) {
      myTabs[i].classList.remove("active");
    }

    var clickedTab = tabClickEvent.currentTarget;
    clickedTab.classList.add("active");
    tabClickEvent.preventDefault();
    var myContentPanes = document.querySelectorAll(".serv_item");

    for (i = 0; i < myContentPanes.length; i++) {
      myContentPanes[i].classList.remove("active");
    }

    var anchorReference = tabClickEvent.target;
    var activePaneId = anchorReference.getAttribute("href");
    var activePane = document.getElementById(activePaneId);
    activePane.classList.add("active");
  }

  for (i = 0; i < myTabs.length; i++) {
    myTabs[i].addEventListener("click", myTabClicks);
  } // store tabs variable


  var myTabs2 = document.querySelectorAll(".adv_nav > div");

  function myTabClicks2(tabClickEvent) {
    for (var i = 0; i < myTabs2.length; i++) {
      myTabs2[i].classList.remove("active");
    }

    var clickedTab2 = tabClickEvent.currentTarget;
    clickedTab2.classList.add("active");
    tabClickEvent.preventDefault();
    var myContentPanes2 = document.querySelectorAll(".adv_item");

    for (i = 0; i < myContentPanes2.length; i++) {
      myContentPanes2[i].classList.remove("active");
    }

    var anchorReference2 = tabClickEvent.target;
    var activePaneId2 = anchorReference2.getAttribute("href");
    var activePane2 = document.getElementById(activePaneId2);
    activePane2.classList.add("active");
  }

  for (i = 0; i < myTabs2.length; i++) {
    myTabs2[i].addEventListener("click", myTabClicks2);
  }
});