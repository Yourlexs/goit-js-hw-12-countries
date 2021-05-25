import './sass/main.scss';
import fetchCountries from './js/fetchCountries';
var debounce = require('lodash.debounce');
import { refs, appendMarkup } from './js/markup';


refs.input.addEventListener('input', debounce(onShowCountries, 500));

function onShowCountries(e) {
    let searchQuery = e.target.value;
    if (!searchQuery) {
        refs.countriesCountainer.innerHTML = '';
        return;
    }
    if (searchQuery) {
        refs.countriesCountainer.innerHTML = '';
        fetchCountries(searchQuery).then(appendMarkup);
    }
}