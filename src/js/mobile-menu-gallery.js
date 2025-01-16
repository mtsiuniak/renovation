const buttonopen = document.querySelector('.mobile-open-btn'); 
const menu = document.querySelector('.mobile-menu'); 
const buttonclose = document.querySelector('.button-close');

const onToggleMenuHandlerOP = () => menu.classList.toggle('is-open'); 
const onToggleMenuHandlerCL = () => menu.classList.remove('is-open');

buttonopen.addEventListener('click', onToggleMenuHandlerOP); 
buttonclose.addEventListener('click', onToggleMenuHandlerCL);

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
        menu.classList.remove('is-open'); 
    });
});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}

const links = document.querySelectorAll('.mobile-menu a');

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('is-open'); // 
    });
});

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