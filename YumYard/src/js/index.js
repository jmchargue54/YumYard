const api = 'https://api.spoonacular.com';
const key = '6193542d0b6b4048852bcb497aecb59b';

const pasta = api+'recipes/complexSearch?query=pasta&maxFat=25&number=2';

function pastatemplate() {
    return `
    <p>${pasta}</p>`
};

document.querySelector('main').innerHTML(pastatemplate);