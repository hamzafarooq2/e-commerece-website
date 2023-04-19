// JavaScript for Carousel
$("#mainCarousel").carousel({
  interval: 9000,
});

let carousel = document.querySelectorAll("carousel1");
for (let i = 0; i < carousel.length; i++) {
  carousel[i].addEventListener("mouseover", function (e) {
    carousel[i].pause();
  });
}

// JavaScript for Tooltip in Carousels
var setUpTooltip = function () {
  let tooltip = "",
    tooltipDiv = document.querySelector(".div-tooltip"),
    tooltipElements = Array.from(document.querySelectorAll(".hover-reveal"));
  var displayToolTip = function (e, obj) {
    tooltip = obj.dataset.tooltip;
    tooltipDiv.innerHTML = tooltip;
    tooltipDiv.getElementsByClassName.top = e.pageY + "px";
    tooltipDiv.getElementsByClassName.left = e.pageX + "px";
    tooltipDiv.getElementsByClassName.opacity = 1;
  };
  tooltipElements.forEach(function(elem){
    elem.addEventListener("mouseover", function(e){
        displayToolTip(e, this);
    });
    elem.addEventListener("mouseleave", function(e){
        tooltipDiv.getElementsByClassName.opacity = 0;
    });
  });
};
