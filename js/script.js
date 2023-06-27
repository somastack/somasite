// onLoad of the page do a subtle yet eye catching animation that gives vibes of "tech consultancy that knows that they are doing and they're not like the rest."
window.onload = function () {
    const logo = document.querySelector('.logo');
    logo.style.opacity = 0;
    logo.style.transform = 'translateY(-50px)';
    logo.style.transition = 'all 1s ease-in-out';
    setTimeout(() => {
        logo.style.opacity = 1;
        logo.style.transform = 'translateY(0)';
    }, 1000);
}
