var appendNull = function (num) {
  return num < 10 ? 0 + num.toString() : num;
};
d = new Date();
p = new Date(d.getTime() + 0 * 86400000);
monthb = "01,02,03,04,05,06,07,08,09,10,11,12".split(",");
document.write(
  appendNull(p.getDate()) +
    "." +
    monthb[p.getMonth()] +
    "." +
    p.getFullYear()
);

$(function () {
  $(".popupBox").css({
    height: $(document).height() + "px",
  }),
    $(".close").click(function () {
      $(".popupBox").fadeOut(200);
    });
  $(".knopka").click(function () {
    $(".popupBox").fadeOut(200);
  });
  var c = !0;
  $(window).mouseout(function (e) {
    e.pageY - $(window).scrollTop() < 1 &&
      1 == c &&
      ($(".popupBox").fadeIn(200), (c = !1));
  });
});
