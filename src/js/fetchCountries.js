export default function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
        .then(response => response.json())
        .then(result => {return result})
        .catch(error => console.log(error))
}