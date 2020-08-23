$(document).ready(function () {
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
  $(".accordion-label").click(function (event) {
    $(".return").toggleClass("active");
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
    $(".box").toggleClass("active");
  });
});