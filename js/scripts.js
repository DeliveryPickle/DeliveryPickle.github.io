/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
var currentMode = 1; //0 is dark 1 is light
function darkMode() {
    var r = document.querySelector(':root');
    r.style.setProperty('--bs-body-color', '#222e3a');
    r.style.setProperty('--bs-body-bg', '#dee2e6');
    if (currentMode) {
        //switch to dark mode
        r.style.setProperty('--bs-body-color', '#222e3a');
        r.style.setProperty('--bs-body-bg', '#dee2e6');
        r.style.setProperty('--bs-gray-400', '#495057');
        currentMode = 0;
    } else {
        //switch to light mode
        r.style.setProperty('--bs-body-color', '#dee2e6');
        r.style.setProperty('--bs-body-bg', '#222e3a');
        r.style.setProperty('--bs-gray-400', '#ced4da');
        currentMode = 1;
    }
} 
