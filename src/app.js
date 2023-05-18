$(document).ready(function(){
    $('.prd-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots : true,
        // autoplay: true,
        // autoplaySpeed: 1000,

    }
    );
    
$('.what-slider').slick({
    centerMode: true,
    // centerPadding: '60px',
    slidesToShow: 5,
    slidesToScroll:1,
    infinite: true,
responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });


});


var btnM = document.querySelector('.btn_menu');
var btnC = document.querySelector('.btn-close');
var modalS = document.querySelector('.modal-show');
var bg = document.querySelector('.bg');
var modal = document.querySelector('.modal');
btnM.addEventListener("click", ()=>{
  console.log(1);
  modal.classList.add("modal-show")
  bg.classList.add("bg-show")
})

btnC.addEventListener("click", ()=>{
  modal.classList.remove("modal-show")
  bg.classList.remove("bg-show")
})