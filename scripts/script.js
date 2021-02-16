// function openCloseNav() {
//     var checkBox = document.getElementById("menu-btn");
    
//     if (checkBox.checked == true){
//         // document.getElementById("header_nav").style.display = "none";
//         document.getElementById("side_nav").style.width = "100%";
//     } else {
//         // document.getElementById("header_nav").style.display = "block";
//         document.getElementById("side_nav").style.width = "0";
//     }
//   }

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

