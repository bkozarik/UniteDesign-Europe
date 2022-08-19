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
  } // adds animation for section cards 


  window.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY;
    var scrollEl = document.getElementById("calc");
    var header = document.getElementById("main_bg");

    if (scrollEl.offsetTop < last_known_scroll_position) {
      header.classList.add("header_open");
    } else {
      header.classList.remove("header_open");
    }
  });
  $(".open_fast_view").click(function () {
    $('body').addClass('overflow');
  });
  $(".close").click(function () {
    $('body').removeClass('overflow');
    $('.case_item_fw').removeClass('fw_open');
  }); // store tabs variable

  var myTabs3 = document.querySelectorAll(".open_fast_view");

  function myTabClicks3(tabClickEvent) {
    for (var i = 0; i < myTabs3.length; i++) {
      myTabs3[i].classList.remove("active");
    }

    var clickedTab3 = tabClickEvent.currentTarget;
    clickedTab3.classList.add("active");
    tabClickEvent.preventDefault();
    var myContentPanes3 = document.querySelectorAll(".case_item_fw");

    for (i = 0; i < myContentPanes3.length; i++) {
      myContentPanes3[i].classList.remove("active");
    }

    var anchorReference3 = tabClickEvent.target;
    var activePaneId3 = anchorReference3.getAttribute("href");
    var activePane3 = document.getElementById(activePaneId3);
    activePane3.classList.add("fw_open");
  }

  for (i = 0; i < myTabs3.length; i++) {
    myTabs3[i].addEventListener("click", myTabClicks3);
  }
});