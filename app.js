const container = document.querySelector('.container');
const signupButton = document.querySelector('.signup-section header');
const signinButton = document.querySelector('.signin-section header');

signinButton.addEventListener('click',() =>{
    container.classList.add('active');
});

signupButton.addEventListener('click',() =>{
    container.classList.remove('active');
});

