const heroswiperAnimation = new SwiperAnimation();

const swiper = new Swiper(".hero-swiper", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        clickable: true,
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        init: function() {
            heroswiperAnimation.init(this).animate();
        },
        slideChange: function() {
            heroswiperAnimation.init(this).animate();
        }
    }

    // And if we need scrollbar
});
const experswiperAnimation = new SwiperAnimation();

const swiperExper = new Swiper(".swiper-exper", {
    // Optional parameters
    loop: true,
    slidesToScroll: 1,
    slidesPerView: 1,
    // centeredSlides: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: true,
    },
    // If we need pagination
    pagination: {
        clickable: true,
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
        init: function() {
            experswiperAnimation.init(this).animate();
        },
        slideChange: function() {
            experswiperAnimation.init(this).animate();
        }
    }

    // And if we need scrollbar
});

const swiperIncub = new Swiper(".swiper-incubator", {
    // Optional parameters
    loop: true,
    slidesToScroll: 1,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    // If we need pagination
    pagination: {
        clickable: true,
        el: ".swiper-pagination",
    },
    breakpoints: {
        "@1.00": {
            slidesPerView: 1,
        },
        "@1.50": {
            slidesPerView: 1.5,
        },
    },

    // And if we need scrollbar
});

// Start Nav Bar
function openNav() {
    document.getElementById("navlist").style.right = "0";
}

function closeNav() {
    document.getElementById("navlist").style.right = "-100%";
}

// rtl nav
function openNavRtl() {
    document.getElementById("navlistRtl").style.left = "0";
}

function closeNavRtl() {
    document.getElementById("navlistRtl").style.left = "-100%";
}

// End Nav Bar

const swiperEd = new Swiper(".swiper.test", {
    // Optional parameters
    loop: true,
    slidesToScroll: 1,
    slidesPerView: 1,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    breakpoints: {
        "@1.00": {
            slidesPerView: 1,
        },
        "@1.50": {
            slidesPerView: 1.5,
        },
    },

    // And if we need scrollbar
});

var swiperbrak = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    speed: 2000,
    // autoplay:true,
    autoplay: {
        delay: 0,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        "@1.50": {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});
AOS.init();

const links = document.querySelectorAll('.cus-nav-link');
const sections = document.querySelectorAll('.forJS');

function changeLinkState() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

    links.forEach((link) => link.classList.remove('active'));

    // add the active class if within visible height of the element
    if (scrollY - sections[index].offsetHeight <
        sections[index].offsetTop) {

        links[index].classList.add('active');
        links[2].classList.remove('active');
    }
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);


var scrollPosition = window.scrollY;
var logoContainer = document.querySelector('.navbar-box');

window.addEventListener('scroll', function() {

    scrollPosition = window.scrollY;

    if (scrollPosition >= 600) {
        logoContainer.classList.add('nav-active');
    } else {
        logoContainer.classList.remove('nav-active');
    }

});
