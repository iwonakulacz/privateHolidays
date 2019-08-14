const hamburger = document.querySelector('.nav__hamburger');

function toggleMenu(e){
    const show = hamburger.getAttribute('aria-expanded');
    if(show === 'true'){
        hamburger.setAttribute('aria-expanded', false);
        $('.nav__list').removeClass('active');
        $('.nav__hamburger').removeClass('active');
    }
    else{
        hamburger.setAttribute('aria-expanded', true);
        $('.nav__list').addClass('active');
        $('.nav__hamburger').addClass('active');
    }
}

hamburger.addEventListener('click', toggleMenu);