/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
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
            rootMargin: '0px 0px -40%',
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

document.addEventListener("DOMContentLoaded", function() {
    const firstNameElement = document.getElementById('firstName');
    const lastNameElement = document.getElementById('lastName');
    const locationElement = document.getElementById('location');
    const firstName = "Chuday";
    const lastName = "Viana";
    const location = 'Amsterdam - The Netherlands ';
    const flagImgHtml = ' &nbsp;<img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" alt="Flag_of_the_Netherlands" style="width: 26px;">';
    let firstIndex = 0;
    let lastIndex = 0;
    let locationIndex = 0;
    let timeoutId;

    function typeWriter() {
        if (firstIndex < firstName.length) {
            firstNameElement.innerHTML += firstName.charAt(firstIndex);
            firstIndex++;
        } else if (lastIndex < lastName.length) {
            lastNameElement.innerHTML += lastName.charAt(lastIndex);
            lastIndex++;
        } else if (locationIndex < location.length) {
            locationElement.innerHTML += location.charAt(locationIndex);
            locationIndex++;
        } else if (locationIndex === location.length) {
            locationElement.innerHTML += flagImgHtml;
            locationIndex++;
        } 
        timeoutId = setTimeout(typeWriter, 150);
    }
    typeWriter();
});
