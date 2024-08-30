const email = document.getElementById('email');
const email_error = document.getElementById('email-error');
const first_section = document.querySelector('.first')
const second_section = document.querySelector('.second')
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log(email_error)
function handleSubmit(e) {
    
    e.preventDefault() // prevent the default behaviour
    
    if (email.value === '') {
        email_error.textContent = 'Please enter an email';
        email.classList.add('error');
        return;
    }else if (!regex.test(email)) {
        email_error.textContent = 'Please enter a valid email';
        email.classList.add('error');
        return;
    }else {
        email_error.textContent = '';
        first_section.style.display = 'none';
        second_section.style.display = 'block';
        email.classList.remove('error');

    }
    
    

}

form.addEventListener('submit', handleSubmit);