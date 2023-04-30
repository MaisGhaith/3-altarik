

// ! switch between login and registration forms

const registerSection = document.getElementById('register');
const loginSection = document.getElementById('login');
const logLink = document.getElementById('log');
const regLink = document.getElementById('reg');

logLink.addEventListener('click', () => {
    registerSection.style.display = 'none';
    loginSection.style.display = 'block';
});

regLink.addEventListener('click', () => {
    registerSection.style.display = 'block';
    loginSection.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => {
    registerSection.style.display = 'none';
    loginSection.style.display = 'block';
});

const registerForm = document.querySelector('#register form');
registerForm.addEventListener('submit', event => {
    event.preventDefault();
    registerSection.style.display = 'none';
    loginSection.style.display = 'block';
});

const loginForm = document.querySelector('#login form');
loginForm.addEventListener('submit', event => {
    event.preventDefault();
    registerSection.style.display = 'block';
    loginSection.style.display = 'none';
});



// ! validation register form 

// ! initialize 
let emailData = []
let PassData = []
// ! this to check Validate for every single function, so we can check if true or false to make decision depending on result
let validateEmail, validateUsername, vaildatePassword, validatePhone

// ! store data in emailData and PassData in localStorage
if (localStorage.emailData != null) {
    emailData = JSON.parse(localStorage.emailStorage)
    PassData = JSON.parse(localStorage.passwordStorage)
}

// ! check username validate, we call the function in html submit button 
let Username
function usernameValidate() {
    const UsernameInput = document.getElementById("username")
    Username = UsernameInput.value;

    const regex = /^(?!\s)[a-zA-Z\S]{8,16}$/;

    if (regex.test(Username)) {
        console.log("valid userName")
        validateUsername = true
    } else {
        alert("Username must be between 8-16 character and no spaces")
        validateUsername = false

    }

}

// ! check password validate, we call the function in html submit button 
let Password
function passwordValidate() {
    const PasswordInput = document.getElementById("password")
    Password = PasswordInput.value;
    // passowrd condition, more than 8 characters, with at least 1 number, uppercase, and special characters.
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regex.test(Password)) {
        console.log("valid Password")
        vaildatePassword = true

    } else {
        alert("Password must contain more than 8 characters, with at least 1 number, uppercase, and special characters. ")
        vaildatePassword = false

    }
    // checkPassValidate(Password)
}

// ! check email validate, we call the function in html submit button 
let Email
function emailValidate() {
    const EmailInput = document.getElementById("email")
    Email = EmailInput.value;

    // email condition, email format
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (regex.test(Email)) {
        console.log("valid email")
        validateEmail = true

    } else {
        alert("your email should be as Email format")
        validateEmail = false

    }

    if (emailData.includes(Email)) {
        alert("This Email is already exist, Log in")
    }
}

// ! check phone validate, we call the function in html submit button 
let Phone
function phoneValidate() {
    const PhoneInput = document.getElementById("phone")
    Phone = PhoneInput.value;

    const regex = /^07\d{8}$/;
    if (regex.test(Phone)) {
        console.log("valid phone number")
        validatePhone = true

    } else {
        alert("Phone number must contain 10 digits, starts with 07")
        validatePhone = false

    }
}




// ! check validate for Email and password to store it in localStorage, if there is one of the 
// ! entered data is not validate, will not store any data
// ! if all is valid, will store the data in localStorage and replace page to homePage.html
function checkValidate() {

    if (validateEmail === true && vaildatePassword === true && validatePhone === true && validateUsername === true) {
        emailData.push(Email)
        localStorage.setItem('emailStorage', JSON.stringify(emailData))
        // localStorage.setItem('passwordStorage', JSON.stringify(arrData))
        console.log(emailData)

        PassData.push(Password)
        localStorage.setItem('passwordStorage', JSON.stringify(PassData))
        console.log(PassData)

        location.replace('../UpConstruction/homePage.html')
    }


}




// ! this function to show if the entered data is the same with data in local storage
function validLogin() {
    if (localStorage.emailStorage != null) {

        let enterEmail = document.getElementById('loginEmail').value;
        let enterPass = document.getElementById('loginPass').value;

        let getEmail = JSON.parse(localStorage.emailStorage);
        let getPass = JSON.parse(localStorage.passwordStorage)

        console.log(enterEmail, enterPass, getPass, getEmail)

        if (enterEmail.includes(getEmail)) {
            let emailIndex = getEmail.indexOf(enterEmail)
            if (getPass[emailIndex] == enterPass) {
                location.replace('../UpConstruction/homePage.html')
            } else {
                alert("password invalid")

            }
        } else {
            alert("email invlaid")
        }
    }
}



//! functions to hide and show the quizes on click at show quizes buttons 

let problemSolvingShowBtn = document.getElementById("showbtn");
let problemSolvingQuizesBtn = document.getElementById("hideQuizes");
let isVisibleroblemSolving = false;

problemSolvingShowBtn.onclick = function () {
    if (!isVisibleroblemSolving) {
        problemSolvingQuizesBtn.style.visibility = "hidden"; //! onclick, the card will expand and show the buttons
        problemSolvingQuizesBtn.style.display = "none"; //! we can use hideQuizes or problemSolvingQuizesBtn
        isVisibleroblemSolving = true;
    } else {
        problemSolvingQuizesBtn.style.visibility = "visible"; //! onclick, the card will expand and show the buttons
        problemSolvingQuizesBtn.style.display = "block";  //! we can use hideQuizes or problemSolvingQuizesBtn
        isVisibleroblemSolving = false;
    }
};

let backEndshowBtn = document.getElementById("showbtn2")
let backEndQuizesBtn = document.getElementById("hideQuizes2")
let isVisibleBackEnd = false;

backEndshowBtn.onclick = function () {
    if (!isVisibleBackEnd) {
        backEndQuizesBtn.style.visibility = "hidden"; //! onclick, the card will expand and show the buttons
        backEndQuizesBtn.style.display = "none"; //! we can use backEndQuizesBtn or hideQuizes2
        isVisibleBackEnd = true;
    } else {
        backEndQuizesBtn.style.display = "block";//! we can use backEndQuizesBtn or hideQuizes2
        backEndQuizesBtn.style.visibility = "visible"; //! onclick, the card will expand and show the buttons

        isVisibleBackEnd = false;
    }
}


let frontEndShowBtn = document.getElementById("showbtn3")
let frontEndQuizesBtn = document.getElementById("hideQuizes3")
let isVisibleFrontEnd = false;

frontEndShowBtn.onclick = function () {
    if (!isVisibleFrontEnd) {
        frontEndQuizesBtn.style.visibility = "hidden"; //! we can use frontEndQuizesBtn or hideQuizes3
        frontEndQuizesBtn.style.display = "none"; //! we can use frontEndQuizesBtn or hideQuizes3
        isVisibleFrontEnd = true;
    } else {
        frontEndQuizesBtn.style.visibility = "visible"; //! we can use frontEndQuizesBtn or hideQuizes3
        frontEndQuizesBtn.style.display = "block";
        isVisibleFrontEnd = false;
    }
}

