const search = document.getElementById('search');
const input = document.getElementById('input__shrink');

search.addEventListener('click', () => {
    input.classList.toggle('input__growth')
})