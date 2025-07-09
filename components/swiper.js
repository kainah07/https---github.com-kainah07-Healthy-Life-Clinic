const swiper = new Swiper('.mySwiper', {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 'auto', // ✅ Important
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
      }
    });


const button = document.querySelector('.login-button');
const icon = document.getElementById('login-icon');

button.addEventListener('mouseenter', () => {
  icon.src = 'images/login-hover.svg';
});

button.addEventListener('mouseleave', () => {
  icon.src = 'images/login-icon.svg';
});
