// for invalid email function ('@')

const emailInput = document.getElementById('email');
const emailoutput = document.getElementById('emailError');

emailInput.addEventListener('input' , function(){
    if (emailInput.value.includes('@')){
        emailError.textContent = "";
    }
    else {
        emailError.textContent = "Invalid Email !";
    }
})