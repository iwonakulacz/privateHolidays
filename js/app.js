const hamburger = document.querySelector('.hamburger');

function toggleMenu(e){
    const show = hamburger.getAttribute('aria-expanded');
    if(show === 'true'){
        hamburger.setAttribute('aria-expanded', false);
        $('.nav__list').slideUp();
        $('.hamburger').removeClass('active');

    }
    else{
        hamburger.setAttribute('aria-expanded', true);
        $('.nav__list').slideDown();
        $('.hamburger').addClass('active');
    }
}

hamburger.addEventListener('click', toggleMenu);