var body = document.querySelector('body');
var toggle = document.querySelector('#toggle');


toggle.addEventListener('click', function toggleMenu(){
    body.classList.toggle('active');
});
