"use strict"

const goToTop = document.getElementById('arrowTop');
goToTop.hidden = true;

goToTop.addEventListener('click', function() {
    document.body.scrollIntoView({behavior: 'smooth'});
});
window.addEventListener('scroll', showGoToTopBtn);

function showGoToTopBtn() {
    // console.log(goToTop.hidden);
    goToTop.hidden = document.documentElement.scrollTop < document.documentElement.clientHeight;

    /* if(document.documentElement.scrollTop >= document.documentElement.clientHeight) {
        if(goToTop.hidden)
            goToTop.hidden = false;
    }else{
        if(!goToTop.hidden)
            goToTop.hidden = true;
    } */
}