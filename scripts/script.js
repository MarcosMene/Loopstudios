

// HAMBURGER BUTTON ========

const navToggle = document.querySelector('.menu-btn');
const navlinks = document.querySelectorAll('.nav_link');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav_open');
    document.body.classList.toggle('stop-scrolling');
    document.querySelector('.header_nav').style.visibility = "visible";
    
    
});

navlinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        document.body.classList.remove('stop-scrolling');
        document.querySelector('.header_nav').style.visibility = "hidden";
        

    })
});

