const imgBulb = document.querySelector('img');
const btnBulb = document.getElementById('btn-bulb');


btnBulb.addEventListener('click', function () {
    let btnText = btnBulb.innerText;
    if (btnText.includes('Accendi')) {
        imgBulb.src = '../img/yellow_lamp.png';
        imgBulb.alt = 'Lampadina Accesa';
        btnBulb.innerText = 'Spegni';
    } else {
        imgBulb.src = '../img/white_lamp.png';
        imgBulb.alt = 'Lampadina Spenta';
        btnBulb.innerText = 'Accendi';
    }
});