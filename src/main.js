import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

hero js start =======
// const bg = document.querySelector('.hero-section')
// let load = 0

// let int = setInterval(blurring, 20)

// function blurring() {
//   load++
//   if (load > 99) {
//     clearInterval(int)
//   }
//   bg.style.filter = `blur(${scale(load, 0, 60, 30, 0)}px)`
// }

// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
// }
// hero js end ======


// about section start ========

const aboutTitle = document.querySelector('.title-about-us');
const aboutText = document.querySelector('.text-about-us');

window.addEventListener('scroll', function() {
  const sectionAboutTop = document.querySelector('.about-us').offsetTop;
  const windowAboutHeight = window.innerHeight;
  const scrollPosition = window.scrollY;
  const visibleAboutBottom = scrollPosition + windowAboutHeight;
  const sectionAboutBottom = sectionAboutTop + (document.querySelector('.about-us').offsetHeight * 0.2); 
  
  if (visibleAboutBottom >= sectionAboutBottom) {
    aboutTitle.classList.add('active');
    aboutText.classList.add('active');
    aboutText.style.display = 'block';
  } else {
    aboutTitle.classList.remove('active');
    aboutText.classList.remove('active');
  }
});


new Swiper('.swiper-container', {
  effect: "fade",
  centeredSlides: true, 
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
    },
  loop: true,
  slidesPerView: 1,
       pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});

// about section end ========

// smooth scrol start ==========

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

// smooth scrol end ==========




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
new Accordion('#accordion', {
  showMultiple: true,
});
// FAQ start ================





// Order section start =======

const submitBtn = document.querySelector('.order-form-btn');
const form = document.getElementById('form');
const result = document.getElementById('result');

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
// order section end =========



// cooperation section start =========

const cooperationTitle = document.querySelector('.cooperation-title');
const cooperationText = document.querySelector('.cooperation-text');

window.addEventListener('scroll', function() {
  const sectionTop = document.querySelector('.cooperation-section').offsetTop;
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;
  const visibleBottom = scrollPosition + windowHeight;
  const sectionBottom = sectionTop + (document.querySelector('.cooperation-section').offsetHeight * 0.2); 
  
  if (visibleBottom >= sectionBottom) {
    cooperationTitle.classList.add('active');
    cooperationText.classList.add('active');
    cooperationText.style.display = 'block';
  } else {
    cooperationTitle.classList.remove('active');
    cooperationText.classList.remove('active');
  }
});


 new Swiper(".cooperation-container .swiper", {
        speed: 600,
        parallax: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
 });
    // cooperation section end =========