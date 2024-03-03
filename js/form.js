//обратный счетчик товара
$(function () {
  var timerIdPackCountNumber = 49;
  $(".pack_count").html(timerIdPackCountNumber);

  var timerIdPackCount = setTimeout(function tick() {
    timerIdPackCountNumber--;
    $(".pack_count").html(timerIdPackCountNumber);
    if (timerIdPackCountNumber > 5) {
      timerIdPackCount = setTimeout(tick, 60000);
    }
  }, 0);
});