$(document).ready(function () {
  $(".owl-carousel-one").owlCarousel({
    items: 2,
    loop: true,
    dots:false,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });
  $(".owl-carousel-two").owlCarousel({
    items: 2,
    loop: true,
    dots:false,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });
  $(".owl-carousel-there").owlCarousel({
    items: 1,
    loop: true,
    dots:false,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
  });
  $("#countdownOne").syotimer({
    year: 2022,
    month: 9,
    day: 25,
    hour: 20,
    minute: 30,
});
$(".owl-carousel-four").owlCarousel({
  loop: true,
  dots:false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive:{
  0:{
      items:1
  },
  480:{
      items:2
  },
  767:{
      items:3
  },
  1200:{
      items:5
  }
}
});
$(".owl-carousel-five").owlCarousel({
  loop: true,
  dots:false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive:{
  0:{
      items:1
  },
   767:{
      items:2
  },
  1200:{
      items:3
  }
}
});
$(".owl-carousel-six").owlCarousel({
  loop: true,
  dots:false,
  margin: 10,
  center:true,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive:{
    0:{
        items:1
    },
     767:{
        items:2
    },
    1200:{
        items:3
    }
  }
});

$(".owl-carousel-seven").owlCarousel({
  loop: true,
  margin: 10,
  dots:false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive:{
  0:{
      items:2
  },
   767:{
      items:3
  },
  1200:{
      items:6
  }
}
});
});


