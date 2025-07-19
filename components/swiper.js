const swiper = new Swiper('.mySwiper', {
      loop: true,
      spaceBetween: 30,
      slidesPerView: 'auto',
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
  icon.src = 'images/login-gray.svg';
});

button.addEventListener('mouseleave', () => {
  icon.src = 'images/login-black.svg';
});



window.addEventListener('scroll', function () {
  const navbar = document.getElementById('mainNavbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

