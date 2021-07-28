const headerBtn = document.querySelector('.headerBtn'),
    nav =  document.querySelector('.nav')

headerBtn,addEventListener('click', () => {
    nav.classList.toggle('opened');
})