const email = document.getElementById("email");
const form = document.getElementById('form');
const password = document.getElementById('password')
const confirmPassword = document.getElementById('password2')
const errorLabel = document.getElementById('error')
const  inputs = document.querySelectorAll('input');
let messages = [];

//Clear red border if input is active
inputs.forEach((input) => {
    input.onfocus =() =>{
        input.style.outline = 'none'
        messages= []
    }
})

//Checking Empty fields
const checkEmpty = (inputs) => {
    isEmpty = false;
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].value === ""){
            inputs[i].style.outline = '1px solid red';
            isEmpty = true;
        }
    }
    if(isEmpty === true){
        messages.push('All fields are mandatory.');
    }
    return isEmpty;
}

//Password validation
const passwordValidation = (password, confirmPassword) => {
    let regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if(!regex.test(password.value)){
        messages.push('Password must be minimum six characters, at least one letter and one number.');
        password.style.outline = '1px solid red';
    }

    if(confirmPassword.value !== password.value){
        messages.push('Passwords do not match.');
        confirmPassword.style.outline = '1px solid red';
    }

}

//Email validation
const emailValidation = (email) => {
    let regex =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!regex.test(email.value)){
        messages.push('Invalid Email');
        email.style.outline = '1px solid red';
    }
}


//Form validation 
form.onsubmit = (e) => {
    e.preventDefault();
    messages = []
    if(checkEmpty(inputs));
    else{
        emailValidation(email)
        passwordValidation(password, confirmPassword)
    }

    if(messages.length > 0){
        errorLabel.innerText = messages.join('\n')
        errorLabel.style.color = 'red'
    }
    else{
        errorLabel.innerText = 'Submitted';
        errorLabel.style.color = 'green'
    }
}

