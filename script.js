const toggleLinks = document.querySelectorAll('.signUpBtn-link, .signIBtn-link');
const wrapper = document.querySelector('.wrapper');

toggleLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        wrapper.classList.toggle('active');
    });
});

  