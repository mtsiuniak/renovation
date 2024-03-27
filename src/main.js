import n from 'accordion-js';
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
// hero js start -----

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 4,
    },
  },
});




const bg = document.querySelector('.hero-section')
let load = 0

let int = setInterval(blurring, 20)

function blurring() {
  load++
  if (load > 99) {
    clearInterval(int)
  }
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


const submitBtn = document.querySelector('.order-form-btn');
const form = document.getElementById('form');
const result = document.getElementById('result');
console.log(submitBtn);

submitBtn.addEventListener('click', onSubmit);
function onSubmit(e) {
  e.preventDefault(); 

  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const comments = form.elements.comments.value.trim();
  console.log(name, email, comments);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (name === "" || email === "" || comments === "") {
   
    iziToast.warning({
      title: 'Caution',
      message: 'Fill in all fields',
      backgroundColor: '#fafafa',
      color: '#070707'
    });
    return;
  }

  if (!emailRegex.test(email)) {
    
    iziToast.warning({
      title: 'Caution',
      message: 'Enter a valid email address',
      backgroundColor: '#fafafa',
      color: '#070707'
    });
    return; 
  }
  
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: json
  })
  .then(async (response) => {
    let json = await response.json();
    if (response.status == 200) {
      iziToast.success({
        title: 'OK',
        message: 'Successfully sent!',
      });
    } else {
      console.log(response);
    }
  })
  .catch(error => {
    iziToast.error({
    title: 'Error',
    message: 'Server problems',
});
  })
  .then(function() {
    form.reset();
    setTimeout(() => {
      result.style.display = "none";
    }, 1500);
  });
}

// Order section end =========