const form = document.querySelector('form');
const throttle = require('lodash.throttle');

form.addEventListener("input", throttle(()=>{
    const obj = {
        email: form.email.value,
        message: form.message.value
    };

    localStorage.setItem("feedback-form-state", JSON.stringify(obj));
}, 500));

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const obj = {
        email: form.email.value,
        message: form.message.value
    };
    console.log(obj);
    form.reset();
    localStorage.clear();
});

window.addEventListener("load", ()=>{
    const msg = JSON.parse(localStorage.getItem("feedback-form-state"));
    

    if (msg !== null){
        form.email.value = msg.email;
        form.message.value = msg.message;
    }
});