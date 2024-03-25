import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.css';
// hero js start -----

const loadText = document.querySelector('.loading-title')
const bg = document.querySelector('.hero-section')

let load = 0

let int = setInterval(blurring, 20)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 60, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
// hero js end-----

// ------ scrol on hero section to order ----

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// scroll top button start-----

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// scroll top button end-----

// FAQ start ================
const accordion = new Accordion('#accordion', {
  showMultiple: true,
});
// FAQ start ================

// Order section start =======
const orderBtn = document.querySelector('.order-form-btn')
const form = document.querySelector('.order-form');

orderBtn.addEventListener('click', onOrderBtn);

function onOrderBtn(event) {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const comments = form.elements.comments.value.trim();

   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    
    iziToast.warning({
      title: 'Caution',
      message: 'Enter a valid email address',
      backgroundColor: '#fafafa',
      color: '#070707'
    });
  }

  if (!name || !email || !comments) {
    event.preventDefault();
    iziToast.warning({
      title: 'Caution',
      message: 'Fill in all fields',
      backgroundColor: '#fafafa',
      color: '#070707'
    });
  }
  
}
// Order section end =========