const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();


name.addEventListener('blur', () => {
    console.log("name is blurred");
    // validate name here
    regex = /^[a-zA-z]([0-9a-zA-Z]){2,10}$/;
    const str = name.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log("Your name is valid");
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else {
        console.log("Your name not is valid");
        name.classList.add('is-invalid');
        validUser = false;

    }
})

email.addEventListener('blur', () => {
    console.log("email is blurred");
    // validate email here
    regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    const str = email.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log("Your email is valid");
        email.classList.remove('is-invalid')
        validEmail = true;
    }
    else {
        console.log("Your name not is valid");
        email.classList.add('is-invalid');
        validEmail = false;

    }

})

phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    // validate phone here
    regex = /([0-9]){10}$/;
    const str = phone.value;
    console.log(regex, str);

    if (regex.test(str)) {
        console.log("Your phone is valid");
        phone.classList.remove('is-invalid')
        validPhone = true;
    }
    else {
        console.log("Your phone not is valid");
        phone.classList.add('is-invalid');
        validPhone = false;

    }

})

let Submit = document.getElementById('submit');
Submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("You clicked on submit");
    //submit your form

    if (validEmail && validUser && validPhone) {
        let failure = document.getElementById('failure');

        console.log('Phone,email and user are valid.Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();


    } else {
        console.log('one out of Phone,email and user are not valid. Hence not Submitting the form.Please correct the error and try again.');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
    }
});

