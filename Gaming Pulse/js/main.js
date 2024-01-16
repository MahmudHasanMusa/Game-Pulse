

function toggleMenu() {

    console.log(1);
    var element = document.querySelector(".menu");
   element.classList.toggle("active");
  } 


  function notification() {

    var element = document.querySelector(".notification");
   element.classList.toggle("active1");
  } 






  var swiper = document.querySelector(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });