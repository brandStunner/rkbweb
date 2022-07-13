$(document).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      } else{
          $('.navbar').removeClass("sticky")
      }
      if(this.scrollY > 500){
          $('.scroll-up-btn').addClass("show");
      } else{
          $('.scroll-up-btn').removeClass("show");
      }
  })
  
  //slide-up script
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0})
  });

  /*toggle menu/navbar script*/
  $('.menu-btn').click(function(){
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

  //typing animation script
  var typed = new Typed(".typing",{
      strings: ["Front-End Developer", "Graphics Designer...", "Freelancer...", "Geologist..."],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  })

  var typed = new Typed(".typing-2",{
      strings: ["Front-End Developer", "Graphics Designer...", "Freelancer...", "Geologist..."],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  })

  //owl carousel section
  $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
          0:{
              items: 1,
              nav: false
          },
          600:{
              items: 2,
              nav: false
          },
          1000:{
              items: 3,
              nav: false
          },
      }
  })
});


window.addEventListener('scroll', reveal)
function reveal(){
  var reveals = document.querySelectorAll('.reveal')
  for(var i= 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowHeight - revealpoint){
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active')
    }
  }
}