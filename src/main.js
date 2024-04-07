
import onSearch from "./js/pixabay-api";

const form = document.querySelector('.search-form');
const loader = document.querySelector('#loader');
const galleryList = document.querySelector('.gallery ');

form.addEventListener('submit', onSubmit);

loader.hidden = true; 

function onSubmit(event) {

    event.preventDefault();

    galleryList.innerHTML = ' ';

    loader.hidden = false; 

    const searchRequest = event.currentTarget.elements;

    let searchQuery = searchRequest.value;

    onSearch();

    form.reset();
}












console.log(SimpleLightbox);