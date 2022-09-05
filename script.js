const hamburger = document.querySelector('.hamburger');
const mobile_hamburger = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('is-active');
  mobile_hamburger.classList.toggle('is-active');
})