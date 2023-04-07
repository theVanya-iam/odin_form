const psw = document.querySelector('input[id=password]');
const confirm_psw = document.querySelector('input[id=passwordConfirm]');
const button = document.querySelector('.form_button');
const errorString = document.querySelector('.error_message');

// password validation
psw.addEventListener("input", function(event){
    if(psw.value && confirm_psw.value){
    passValidate();
    }
});

confirm_psw.addEventListener("input", function(event){
    if(psw.value && confirm_psw.value){
    passValidate();
    }
});

function passValidate(){
    if(psw.value == confirm_psw.value){
        psw.classList.remove("error");
        confirm_psw.classList.remove("error");
        errorString.style.setProperty("visibility","hidden");
    } else {
        psw.classList.add("error");
        confirm_psw.classList.add("error");
        errorString.style.setProperty("visibility","visible");
    }
}