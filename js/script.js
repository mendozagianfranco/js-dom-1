const imgBulb = document.querySelector('img');
const btnBulb = document.getElementById('btn-bulb');

btnBulb.addEventListener('click', function () {
    imgBulb.src = 'img/yellow_lamp.png';
    imgBulb.alt = 'Lampadina Accesa';
});