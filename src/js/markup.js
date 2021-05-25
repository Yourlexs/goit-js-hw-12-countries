import error from './pnotify';
import countryMarkup from '../templates/countryMarkup.hbs';
import countriesMarkup from '../templates/countriesMarkup.hbs';

const refs = {
    input: document.querySelector('#searchQuery'),
    countriesCountainer: document.querySelector('.js-countries'),
}


function appendMarkup(array) {
    if (!array) {
        return;
    }
    else if (array.status === 404) {
        error('Такой страны не существует!');
    }
    else if (array.length > 10) {
        error('Можно как-то поточнее?!');
    }
    else if (array.length > 1) {
        refs.countriesCountainer.insertAdjacentHTML('beforeend', countriesMarkup(array));
    }
    else if (array.length === 1) {
        refs.countriesCountainer.insertAdjacentHTML('beforeend', countryMarkup(array));
    }
}


export {refs, appendMarkup};