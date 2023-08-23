

var number = 0;
var maxNumber = $(".test-item").length - 1;
var $element = $(".test-item").find("input, select, textarea");
var $elementRadio = $(".test-item").not('.final, .no-focus').find("input[type='radio'], input[type='checkbox'] ");
// var btnPrev = $(".test-prev");
var btnNext = $('.test-next');
var isValid;
var dataBlock;
var activeSlede = [];
var testTextNum = maxNumber;
testText = $('#qw-title');
// $(".numSlide").text(number + 1);
// $(".maxSlide").text(maxNumber);

for(var i = 0; i< maxNumber; i++){
  activeSlede[i] = false;
}
testText.text(testTextNum +' questions');
$element.on('change input', function (e) {
  var value = $(this).val().trim();

  isValid = value !== "";
  btnActive(!isValid);

});

function btnActive(isValid) {
  if(number === 0){
    // btnPrev.prop('disabled', 'false');
    btnNext.prop('disabled', isValid);
  }else{
    // btnPrev.prop('disabled', false);
    if(activeSlede[number] === true || isValid === false){
      btnNext.prop('disabled', false);
    }else{
      btnNext.prop('disabled', true);
    }
    
  }

}

// sidebar

  var $barLevel = 100 / (maxNumber);
  var $barWidth = $barLevel;
  // money
  var slideMoney = Math.floor(2000 / (maxNumber + 2));
  var sumMoney = slideMoney;

  function progress(){
    $(".progress-bar__line").css({"width": $barWidth + '%'});

    moneyAnim( ".proc-progres", Math.floor($barWidth),"%" )
    // $(".progress-bar__line-num").text(Math.floor($barWidth) + "%");

    if(number === maxNumber - 1){
      moneyAnim(".test__side-money", 2000, false )
    }else{
      moneyAnim(".test__side-money", Math.floor(sumMoney), false );
    }
  }
  progress();




$('input[name="qw6"]').on('change input', function() {
  $('.gift-block').show();
  $('.gift-block-title').text($(this).val().trim());
  $('#qw-title').text('Your gift:');
  // $('.test-gifts-price').text($(this).parents('.test_elem').find('.text-price').text().trim());
  $('.gift-img').attr({
        "src": $(this).parents('.test_elem').find('img').attr('src'),
      });

});
  
// btn

function btnClick() {

  btnNext.on('click', next);


  $elementRadio.on('input, change',next);
  $('.inp-next').on('input, change',next);

}
btnClick();

function animateTop (eq){
  var elem = $('.progress-bar');
  var top = elem.offset().top - 15;
  $('body,html').animate({scrollTop: top}, 400);
}


  function moneyAnim( selector, new_money, simbol ){
    var numb_start = 0; // Получаем начальное число
  
    $({numberValue: numb_start}).animate({numberValue: new_money}, {
    
      duration: 560, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
      easing: "linear",
      
      step: function(val) {
      
        $(selector).text(Math.ceil(val) + simbol); // Блок, где необходимо сделать анимацию
        
      }
      
    });

  }

function next(){
  event.preventDefault();
    activeSlede[number] = true;
    ++number;
    setTimeout(function(){
      $('.test-item').hide();
      $('.test-item').eq(number).fadeIn(1500);
      $('.test__numbers-item').hide();
      $('.test__numbers-item').eq(number).fadeIn(1500);
    }, 300);
    
    btnActive(!isValid);
    if(testTextNum != 1 && number < (maxNumber - 2)){
      testTextNum -= 1;
      if(testTextNum < 5 && testTextNum > 1){
        testText.text( testTextNum + ' questions');
      }else if(testTextNum < 2){
        testText.text( testTextNum + ' question');
      }else{
        testText.text( testTextNum + ' questions');
      }
    }else{
      if(number === maxNumber - 2){
        testText.text( 'Choose your gift');
        $('.sbt-js').hide();
        $('.left-block').css({
              "background": 'url(assets/images/gift-bg.png) no-repeat center',
              'background-size':'cover',
            });
      }
    }

    if(activeSlede[number] === true){
      btnNext.prop('disabled', false);
    }else{
      btnNext.prop('disabled', true);
    }

     if(number === 1){
        $('.test-item').eq(0).find('input').each(function(index, el) {
          if($(this).prop('checked')){
            $('.qw-i-jq').eq(index).show();
          }else{
            $('.qw-i-jq').eq(index).hide();
          }
        });
     }

    if(number === maxNumber - 1){
      setTimeout(function(){
      $('.test__btn-block').hide();
      $('.test__numbers').hide();
      $('.test-wrapper').addClass('predfinals');

    }, 300);
    }else if(number === maxNumber + 2){
      $('.progress-bar').hide();
      $('.test__main').addClass('final');
      $('.test-wrapper').addClass('finaltw');
      $('.left-block').addClass('no-show');
    }

    if(number === maxNumber){
    }else{
      setTimeout(function(){
      $barWidth += $barLevel;

      progress();

      animateTop (number);
    }, 100);
    }
}



$(function(){
  'use strict';
  var nForm = false;
$('form').on('submit', function(e){
    e.preventDefault();
    var $that = $(this);
    var fd = new FormData( this );
    var constr = [];
    var dopType = [];

    $that.find('.btn').attr({
      'disabled': 'true'
    });

    $('input[name="qw1"]').each(function(index, el) {
    
      if($(this).prop('checked')){
        constr.push($(this).val().trim());
      }
    });

     $('input[name="qw5"]').each(function(index, el) {
    
      if($(this).prop('checked')){
        dopType.push($(this).val().trim());
      }
    });



    var constr2= constr.join(' , ');
    var dopType2= dopType.join(' , ');
    fd.append('qw1', constr2);
    fd.append('qw5', dopType2);

   
    $.ajax({
      url: './send.php',
      type: 'POST',
      contentType: false, 
      processData: false, 
      data: fd,
      success: function(msg){
          console.log(msg);
          if(!nForm){
              $('.test-item').hide();
              $('.final').fadeIn(1500);
              $('.progress-bar').hide();
              $('.test__main').addClass('final');
              $('.test-wrapper').addClass('finaltw');
              $('.left-block').addClass('no-show');
              $('.test-wrapper').removeClass('predfinals');
              $('#final').find('.input').each(function(index, el) {
                $(this).attr({
                  "required": 'required',
                });
              });
              nForm = true;
              $that.find('.btn').removeAttr('disabled');
          }else{
            $('form').trigger('reset');
            $('form').find('input, button').attr({
              "disabled": 'true',
            });
            $('#thanks').fadeIn();
          }

      },

    });
  });
});

$('.close').on('click', function(event) {
  event.preventDefault();
  if($(this).hasClass('close-video')){
    $('.modal-video-body iframe').remove();
  }if($(this).hasClass('close-nav')){
    $(".nav").removeClass('active');
  }
  $(".overlay").fadeOut();
  $("html").removeClass('stop');
});

 $('.overlay').not('#modal-page, #test').mouseup(function(e){
    var container = $('.modal-wrap');
    if (container.has(e.target).length === 0 && !container.is(e.target)){
        $('html').removeClass('stop');
        $('.overlay').fadeOut();
    }
});