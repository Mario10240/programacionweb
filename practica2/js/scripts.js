$(window).on("load", function(){
  // Handler when all assets (including images) are loaded.

  // Find carousel.
  // document.getElementById("carouselExampleIndicators").carousel({
  //     interval: 100
  // });
  
  $('#mycarousel').carousel({ interval: 2000 });
});

$('.collapse').collapse()

$('#myCollapsible').collapse({
  toggle: false
})

$('#myCollapsible').on('hidden.bs.collapse', function () {
  // do something…
})