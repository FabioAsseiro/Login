const mode = document.getElementById('mode-icon');
const body = document.body;
const img = document.getElementById('img-principal');

mode.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
        img.src = "assests/img/img-dark.svg";
    } else {
        body.classList.add('dark-mode');
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        img.src = "assests/img/img-light.svg";
    }
});