const productCards = document.querySelectorAll ('.card');
const changeColorAllCardButton = document.querySelector ('#change-color-all-card-button');
const lilacColorHash = '#b28ec7';
const peachColorHash = '#e5ac93';

changeColorAllCardButton.addEventListener('click', () => {
    productCards.forEach((card) => card.style.backgroundColor = lilacColorHash)
})

const productCardFirst = document.querySelector ('.card');
const changeColorFirstCardButton = document.querySelector ('#change-color-first-card-button');

changeColorFirstCardButton.addEventListener('click', () => {
    productCardFirst.style.backgroundColor = peachColorHash;
})



const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
    const googleURL = 'https://google.com';
    const answer = confirm('Вы действительно хотите открыть Google?');

    if (answer === true) {
        window.open(googleURL)
    } else {
        return;
    }
}



const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'));

function outputConsoleLog(message) {
    alert('message')
    console.log(message)
}