
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

  loadText.innerText = `${load}%`
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

const faqItems = document.querySelectorAll('.faq');

faqItems.forEach(item => {
    const toggleButton = item.querySelector('.faq-toggle');
    const faqText = item.querySelector('.faq-text');

    toggleButton.addEventListener('click', () => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            faqText.style.display = 'none';
        } else {
            item.classList.add('active');
            faqText.style.display = 'block';
        }
    });
});