const form = document.getElementById('form');
const email = document.getElementById('email');
const email_error = document.getElementById('email-error');
const first_section = document.querySelector('.first');
const second_section = document.querySelector('.second');
const dismiss = document.querySelector('.dismiss');
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function handleSubmit(e) {
    e.preventDefault(); // prevent the default behaviour

    console.log(email.value);
    if (email.value === '') {
        email_error.textContent = 'Please enter an email';
        email.classList.add('error');
        return;
    } else if (!regex.test(email.value)) { // Fix: test against email.value
        email_error.textContent = 'Please enter a valid email';
        email.classList.add('error');
        return;
    } else {
        email.classList.remove('error');
        email_error.textContent = '';
        first_section.style.display = 'none';
        second_section.style.display = 'block';
    }
}

form.addEventListener('submit', handleSubmit);

dismiss.addEventListener('click', () => {
    first_section.style.display = 'flex';
    second_section.style.display = 'none';
    email.value = '';
});
