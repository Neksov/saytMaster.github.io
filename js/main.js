$(document).ready(function () {
  //крточки 
  var list = $(".cards .card");
  var numToShow = 6; //сколько показывать элементов
  var button = $(".btn");
  var numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();
  button.click(function () {
    var showing = list.filter(":visible").length;
    list.slice(showing - 1, showing + numToShow).fadeIn();
    var nowShowing = list.filter(":visible").length;
    if (nowShowing >= numInList) {
      button.hide();
    }
  });

  //дополнительные опции
  var list1 = $(".checkbox .checkbox__item");
  var numToShow1 = 5; //сколько показывать элементов
  var button1 = $(".options__btn");
  var numInList1 = list1.length;
  list1.hide();
  if (numInList1 > numToShow1) {
    button1.show();
  }
  list1.slice(0, numToShow1).show();
  button1.click(function () {
    var showing1 = list1.filter(":visible").length;
    list1.slice(showing1 - 1, showing1 + numToShow1).fadeIn();
    var nowShowing1 = list1.filter(":visible").length;
    if (nowShowing1 >= numInList1) {
      button1.hide();
    }
  });
  //галочка вниз-вверх
  $(".distance__accordion-label").click(function (event) {
    $(".returnDistance").toggleClass("active");
  });
  $(".term__accordion-label").click(function (event) {
    $(".returnTerm").toggleClass("active");
  });
  $(".options__accordion-label").click(function (event) {
    $(".returnOptions").toggleClass("active");
  });

  $(".box1").click(function (event) {
    $(".box1").toggleClass("active");
  });
  $(".box2").click(function (event) {
    $(".box2").toggleClass("active");
  });
  $(".box3").click(function (event) {
    $(".box3").toggleClass("active");
  });
  $(".box4").click(function (event) {
    $(".box4").toggleClass("active");
  });
  $(".distance__btn").click(function (event) {
    $(".box1, .box2, .box3, .box4").removeClass("active");
    $(".box").toggleClass("active");
  });

  $(".car").click(function (event) {
    $(".car").toggleClass("active");
  });
  $(".ceiling").click(function (event) {
    $(".ceiling").toggleClass("active");
  });
  $(".pantry").click(function (event) {
    $(".pantry").toggleClass("active");
  });
  $(".windows").click(function (event) {
    $(".windows").toggleClass("active");
  });
  $(".floor").click(function (event) {
    $(".floor").toggleClass("active");
  });
  $(".car2").click(function (event) {
    $(".car2").toggleClass("active");
  });
  $(".ceiling2").click(function (event) {
    $(".ceiling2").toggleClass("active");
  });
  $(".pantry2").click(function (event) {
    $(".pantry2").toggleClass("active");
  });


  $.each($(".radiobutton__item"), function (index, val) {
    if ($(this).find("input").prop("checked") == true) {
      $(this).addClass("active");
    }
  });
  $(document).on("click", ".radiobutton__item", function (event) {
    allRadio = $(this).parents()["0"].children;
    for (child of Object.values(allRadio)) {
      $(child).removeClass("active");
      child.firstElementChild.checked = false;
    }

    $(this).toggleClass("active");
    $(this).find("input").prop("checked", true);
    return false;
  });

  //checkbox2

  $.each($('.checkbox2'), function (index, val) {
    if ($(this).find('input').prop('checked') == true) {
      $(this).addClass('active');
    };
  });
  $(document).on('click', '.checkbox2', function (event) {
    if ($(this).hasClass('active')) {
      $(this).find('input').prop('checked', false);
    } else {
      $(this).find('input').prop('checked', true);
    };
    $(this).toggleClass('active');

    return false;
  });

  $('.rightColumn__btn2').click(function () {
    window.location.reload();
  });

});