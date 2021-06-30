$('#place_to_go').owlCarousel({
  loop:true,
  margin:20,
  nav:true,
  navText: ["<img src='img/left.png'>","<img src='img/location.png'>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
});

$("header .menu_btn").click(function(){
    $(".mobile_nav").show();
});
$(".mobile_nav .close_btn").click(function(){
    $(".mobile_nav").hide();
});