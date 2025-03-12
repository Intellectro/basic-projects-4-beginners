// const username = document.getElementById('username');
// const password = document.getElementById('password');
// const email = document.getElementById('Email');
// const phoneNumber = document.getElementById('number');
// const repeatPassword = document.getElementById('r-password');
// const form = document.querySelector('form');
// const errorBtn = document.querySelector('.fa-exclamation-circle');
// const successBtn = document.querySelector('.fa-check-circle');

// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
    
//     validateInputs();
// })
// const setError = (element, message) =>{
//     const grabParent = element.parentElement;
//     const errorDisplay = grabParent.querySelector('.error');
//     errorDisplay.innerHTML = message;
//     grabParent.classList.add('error');
//     grabParent.classList.remove('success');
// }
// const setSuccess = (element) =>{
//     const grabParent = element.parentElement;
//     const errorDisplay = grabParent.querySelector('.error');
//     errorDisplay.innerHTML = "";
//     grabParent.classList.add('success');
//     grabParent.classList.remove('error');
// }

// const validateInputs = () =>{
//     let usernameValue = username.value.trim();
//     let emailValue = email.value.trim();
//     let passwordValue = password.value.trim();
//     let phoneNumberValue = phoneNumber.value.trim();
//     let repeatPasswordValue = repeatPassword.value.trim();
//     let regExp = /^([\+\d]{4,4})([\d]{1,12})/;
//     let emailValidate = /([\w]+)\@([a-z]{3,5})\.([a-z]{1,3})/;
//     if (usernameValue === ""){
//         setError(username, 'Username is required');
//     }else{
//         setSuccess(username)
//     }
//     if(emailValue === ""){
//         setError(email, 'Email is required');
//     }else if (emailValidate.test(emailValue) === false){
//         setError(email, 'Invalid Email Address');        
//     }else{
//         setSuccess(email);
//     }
//     if(phoneNumberValue === ""){
//         setError(phoneNumber, 'Phone Number is required');
//     }else if(regExp.test(phoneNumberValue) === false){
//         setError(phoneNumber, 'Invalid Phone Number');
//     }else{
//         setSuccess(phoneNumber);
//     }
//     if(passwordValue === ""){
//         setError(password, 'Password is required');
//     }else if(passwordValue.length < 8){
//         setError(password, "Password must contain as least 8 characters");
//     }else{
//         setSuccess(password);
//     }
//     if(repeatPasswordValue === ""){
//         setError(repeatPassword, 'Password is required');
//     }else if(repeatPasswordValue !== passwordValue){
//         setError(repeatPassword, "Password does not match");
//     }else{
//         setSuccess(repeatPassword);
//     }
// }
// console.log(setSuccess().every(get));


const username = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('Email');
const repeatPassword = document.getElementById('r-password');
const phoneNumber = document.getElementById('number');
const submitBtn = document.querySelector('button');
const form = document.getElementById('form');

form.onsubmit = (e) =>{
    e.preventDefault();

    validateInputs();
}

const setError = (element, message) =>{
    const parent = element.parentElement;
    const errorDisplay = parent.querySelector('.error');
    errorDisplay.innerHTML = message;
    parent.classList.add('error');
    parent.classList.remove('success');
}
const setSuccess = (element) =>{
    const parent = element.parentElement;
    const errorDisplay = parent.querySelector('.error');
    errorDisplay.innerHTML = "";
    parent.classList.add('success');
    parent.classList.remove('error');
}

const validateInputs = () =>{
    usernameValue = username.value.trim();
    psswordValue = password.value.trim();
    emailValue = email.value.trim();
    passwordValue = password.value.trim();
    repeatPasswordValue = repeatPassword.value.trim();
    phoneNumberValue = phoneNumber.value.trim();
    let emailReg = /^([\w]+)\@([a-z]{4,5})\.([a-z]{2,3})$/;
    let phoneReg = /^([+234]{4,4})([\d]{10,10})$/;

    if (usernameValue === ""){
        setError(username, "Username must be filled");
    }else{
        setSuccess(username)
    }
    if (passwordValue === ""){
        setError(password, "Password must be filled");
    }else if(passwordValue.length < 8){
        setError(password, "Password must be at least 8 characters");
    }else{
        setSuccess(password);
    }
    if (repeatPasswordValue === ""){
        setError(repeatPassword, "Password must be filled");
    }else if (repeatPasswordValue !== passwordValue){
        setError(repeatPassword, "Password does not match");
    }else{
        setSuccess(repeatPassword);
    }
    if (emailValue === ""){
        setError(email, "Email must be filled");
    }else if (!emailReg.test(emailValue)){
        setError(email, "Invalid Email Address");
    }else{
        setSuccess(email);
    }
    if (phoneNumberValue === ""){
        setError(phoneNumber, "Phone Number must be filled");
    }else if (!phoneReg.test(phoneNumberValue)){
        setError(phoneNumber, "Must begin with +234");
    }else{
        setSuccess(phoneNumber)
    }
}