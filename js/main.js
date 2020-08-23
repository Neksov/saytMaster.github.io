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
    var showing = list.filter(':visible').length;
    list.slice(showing - 1, showing + numToShow).fadeIn();
    var nowShowing = list.filter(':visible').length;
    if (nowShowing >= numInList) {
      button.hide();
    }
  });
});

function DropDown(el) {
  this.dd = el;
  this.initEvents();
}
DropDown.prototype = {
  initEvents: function () {
    var obj = this;

    obj.dd.on('click', function (event) {
      $(this).toggleClass('active');
      event.stopPropagation();
    });
  }
}

$(function () {

  var distance = new DropDown($('#distance'));

  $(document).click(function () {
    // all dropdowns
    $('.wrapper-dropdown-2').removeClass('active');
  });

});