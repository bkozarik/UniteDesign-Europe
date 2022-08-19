"use strict";

var TxtType = function TxtType(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");

  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");

    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  } // INJECT CSS


  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
  document.body.appendChild(css);
};

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
  } // store tabs variable


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
  });
  $(".popup_open").click(function () {
    $('body').addClass('overflow');
    $('.popup').fadeIn();
    $('.popup_overlay').fadeIn();
  });
  $(".popup_close").click(function () {
    $('body').removeClass('overflow');
    $('.popup').fadeOut();
    $('.popup_overlay').fadeOut();
  });
  $(".popup_overlay").click(function () {
    $('body').removeClass('overflow');
    $('.popup').fadeOut();
    $('.popup_overlay').fadeOut();
  });
  $('input:radio').click(function () {
    $('label:has(input:radio:checked)').addClass('rightAnswer');
    $('label:has(input:radio:not(:checked))').removeClass('rightAnswer');
  });
});