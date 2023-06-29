const navbar = document.querySelector('.header .flex .navbar');
document.querySelector('#menu-bar').onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}