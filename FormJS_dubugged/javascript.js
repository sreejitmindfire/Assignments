//signup button disable function
function activateSignupButton() {
    let username = document.getElementById("username_signup").value;
    let password = document.getElementById("password_signup").value;
    let passwordConfirm = document.getElementById("password_signup_confirm").value;

    let usernameVarification = varifyName(username) && (!checkExistingUsername(username));
    let passwordVarification = varifyPassword(password, passwordConfirm);

    let signupButton = document.getElementById('signupButton');
    if (usernameVarification && passwordVarification) {
        signupButton.disabled = false;
    } else {
        signupButton.disabled = true;
    }
}
//signup button disable function
//button diabled function
function activateButton() {
    let name = document.getElementById("Name").value;
    let number = document.getElementById("Number").value;
    let email = document.getElementById("Email").value;
    let github = document.getAnimations("Github").value;
    let linkedin = document.getElementById("Linkedin").value;
    let image = document.getElementById("Image").value;

    let nameVarification = varifyName(name);
    let numberVarification = varifyNumber(number);
    let emailVarification = varifyNumber(email);
    let githubVarification = varifyNumber(github);
    let linkedinVarification = varifyNumber(linkedin);
    let imageVarification = varifyNumber(image);
    let submitButton = document.getElementById('submit_button');
    let editButton = document.getElementById('edit_button');
    if (nameVarification && emailVarification && numberVarification && githubVarification && linkedinVarification && imageVarification) {
        submitButton.disabled = false;
        editButton.disabled = false;
    } else {
        submitButton.disabled = true;
        editButton.disabled = true;
    }
}

//button diabled function

//event listners
document.addEventListener("DOMContentLoaded", function () {
    //signup form submit
    const signup_form = document.getElementById("signup_form");
    if (signup_form) {
        signup_form.addEventListener("submit", function (event) {
            event.preventDefault();
            signup(event);
        });
    }

    const edit_form = document.getElementById("edit_form");
    if (signup_form) {
        signup_form.addEventListener("submit", function (event) {
            event.preventDefault();
            editSubmit(event);
        });
    }

    //login form submit
    const login_form = document.getElementById("login");
    if (login_form) {
        login_form.addEventListener("submit", function (event) {
            event.preventDefault();
            loginProcess(event);
        });
    }

    //data submit
    const data_form = document.getElementById("myform");
    if (data_form) {
        data_form.addEventListener("submit", function (event) {
            event.preventDefault();
            input(event);
        });
    }

    //signup username onchange
    const username_signup_change = document.getElementById("username_signup");
    if (username_signup_change) {
        username_signup_change.addEventListener("change", function (event) {
            event.preventDefault();
            usernameOnchange();
        });
    }

    //signup password onchange
    const username_password_change = document.getElementById("password_signup_confirm");
    if (username_password_change) {
        username_password_change.addEventListener("change", function (event) {
            event.preventDefault();
            passwordOnchange();
        });
    }

    //name change main form
    const name_change = document.getElementById("Name");
    if (name_change) {
        name_change.addEventListener("change", function (event) {
            event.preventDefault();
            nameOnChange();
        });
    }

    //email change main form
    const email_change = document.getElementById("Email");
    if (email_change) {
        email_change.addEventListener("change", function (event) {
            event.preventDefault();
            emailOnChange();
        });
    }

    //number change main form
    const number_change = document.getElementById("Number");
    if (number_change) {
        number_change.addEventListener("change", function (event) {
            event.preventDefault();
            numberOnChange();
        });
    }

    //github change main form
    const git_change = document.getElementById("Github");
    if (git_change) {
        git_change.addEventListener("change", function (event) {
            event.preventDefault();
            githubOnChange();
        });
    }

    //linkedin change main form
    const link_change = document.getElementById("Linkedin");
    if (link_change) {
        link_change.addEventListener("change", function (event) {
            event.preventDefault();
            linkedinOnChange();
        });
    }

    //image change main form
    const image_change = document.getElementById("Image");
    if (image_change) {
        image_change.addEventListener("change", function (event) {
            event.preventDefault();
            imageOnChange();
        });
    }

    //signup to login button click
    const signup_to_login = document.getElementById("showlogin");
    if (signup_to_login) {
        signup_to_login.addEventListener("click", function (event) {
            event.preventDefault();
            showLogin();
        });
    }

    //login to signup button click
    const login_to_signup = document.getElementById("showsignup");
    if (login_to_signup) {
        login_to_signup.addEventListener("click", function (event) {
            event.preventDefault();
            showSignup();
        });
    }

    //logout button click
    const logout_varriable = document.getElementById("logout_button");
    if (logout_varriable) {
        logout_varriable.addEventListener("click", function (event) {
            event.preventDefault();
            logout();
        });
    }


});
//event listners

//onload function
window.onload = function (event) {
    //if need to clear data code here
    if (sessionStorage.getItem('Loggedin') === 'True') {
        showData(event);
        showMain();
    } else {
        showLogin();
    }
};
//onload function


//onchange functions
function nameOnChange() {
    name_text = document.getElementById("Name").value;
    if (varifyName(name_text)) {
        document.getElementById("Name").classList.remove("invalid");
        document.getElementById("invalid_name").style.display = 'none';
    } else {
        document.getElementById("Name").classList.add("invalid");
        document.getElementById("invalid_name").style.display = 'block';
    }
    activateButton();
}

function numberOnChange() {
    number = document.getElementById("Number").value;
    num_int = parseInt(number)
    if (varifyNumber(number)) {
        document.getElementById("Number").classList.remove("invalid");
        document.getElementById("invalid_number").style.display = 'none';
    } else {
        document.getElementById("Number").classList.add("invalid");
        document.getElementById("invalid_number").style.display = 'block';
    }
    activateButton();
}

function emailOnChange() {
    email = document.getElementById("Email").value;
    if (varifyEmail(email)) {
        document.getElementById("Email").classList.remove("invalid");
        document.getElementById("invalid_email").style.display = 'none';
    } else {
        document.getElementById("Email").classList.add("invalid");
        document.getElementById("invalid_email").style.display = 'block';
    }
    activateButton()
}

function linkedinOnChange() {
    let linkedin = document.getElementById("Linkedin").value;
    if (varifyLinkedin(linkedin)) {
        document.getElementById("Linkedin").classList.remove("invalid");
        document.getElementById("invalid_link").style.display = 'none';
    } else {
        document.getElementById("Linkedin").classList.add("invalid");
        document.getElementById("invalid_link").style.display = 'block'
    }
    activateButton()
}

function githubOnChange() {
    github = document.getElementById("Github").value;
    if (varifyGithub(github)) {
        document.getElementById("Github").classList.remove("invalid");
        document.getElementById("invalid_git").style.display = 'none';
    } else {
        document.getElementById("Github").classList.add("invalid");
        document.getElementById("invalid_git").style.display = 'block';
    }
    activateButton();
}

function imageOnChange() {
    let image = document.getElementById("Image").value;
    if (varifyImage(image)) {
        document.getElementById("Image").classList.remove("invalid");
        document.getElementById("invalid_img").style.display = 'none';
    } else {
        document.getElementById("Image").classList.add("invalid");
        document.getElementById("invalid_img").style.display = 'block';
    }
    activateButton();
}

function checkExistingUsername(name) {
    let storedData = localStorage.getItem('Username');
    if (storedData) {
        let usersArray = JSON.parse(storedData);
        for (let i = 0; i < usersArray.length; i++) {
            if (usersArray[i].Username == name) {
                return true;
            }
        }
        return false;
    }
}

function usernameOnchange() {
    name_text = document.getElementById("username_signup").value;
    if (varifyName(name_text)) {
        if (checkExistingUsername(name_text)) {
            document.getElementById("username_signup").classList.add("invalid");
            document.getElementById("usernameAlreadyInUse").style.display = 'block';
            document.getElementById("invalid_username").style.display = 'none';
        } else {
            document.getElementById("username_signup").classList.remove("invalid");
            document.getElementById("invalid_username").style.display = 'none';
        }
    } else {
        document.getElementById("username_signup").classList.add("invalid");
        document.getElementById("invalid_username").style.display = 'block';
    }
    activateSignupButton();
}

function passwordOnchange() {
    let password = document.getElementById("password_signup").value;
    let confirmPassword = document.getElementById("password_signup_confirm").value;
    if (varifyPassword(password, confirmPassword)) {
        document.getElementById("password_signup").classList.remove("invalid");
        document.getElementById("password_signup_confirm").classList.remove("invalid");
        document.getElementById("passwordErrorShow").style.display = 'none';
    } else {
        document.getElementById("password_signup").classList.add("invalid");
        document.getElementById("password_signup_confirm").classList.add("invalid");
        document.getElementById("passwordErrorShow").style.display = 'block';
    }
    activateSignupButton();
}
//onchange functions



//verification functions
function varifyName(name) {
    const isValid = /^[A-Za-z][A-Za-z0-9_$ ]*$/.test(name);
    if (name == "" || isValid == false) {
        return false;
    } else {
        return true;
    }
}

function varifyNumber(number) {
    if ((number == "") || (number > 9999999999) || (number < 2002000000)) {
        return false;
    } else {
        return true;
    }
}

function varifyEmail(email) {
    text = email;
    let indexa = text.indexOf("@");
    let indexdot = text.indexOf(".");
    if (((indexa <= 0) && (indexdot < indexa)) || email == "") {
        return false;
    } else {
        return true;
    }
}

function varifyLinkedin(linkedin) {
    text = linkedin;
    let indexa = text.indexOf("https://linkedin.com");
    let indexb = text.indexOf("https://www.linkedin.com");
    if (indexa != 0 && indexb != 0) {
        return false;
    } else {
        return true;
    }
}

function varifyGithub(github) {
    if (github == undefined) {
        return false;
    } else {
        let indexa = github.indexOf("https://github.com");
        let indexb = github.indexOf("https://github.com");
        if (indexa != 0 && indexb != 0) {
            return false;
        } else {
            return true;
        }
    }
}

function varifyImage(image_link) {
    text = image_link;
    let indexa = text.indexOf("https://");
    if (indexa != 0) {
        return false;
    } else {
        return true;
    }

}

function varifyPassword(password, confirmPassword) {
    if (password == "") {
        return false;
    }
    if (password == confirmPassword) {
        return true;
    } else {
        return false;
    }
}
//verification functions




//display and hide functions
function showLogin() {
    document.getElementById('login_div').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    document.getElementById('signup_form').reset();
}

function showMain() {
    document.getElementById('login_div').style.display = 'none';
    document.getElementById('signup').style.display = 'none';
    document.getElementById('main').style.display = 'block';
}

function showSignup() {
    document.getElementById('login_div').style.display = 'none';
    document.getElementById('signup').style.display = 'block';
    document.getElementById('main').style.display = 'none';
    document.getElementById('login').reset();
}
//display and hide functions



//reload function
function reloadPage() {
    location.reload(true);
}
//reload function





//signup
function signup(event) {
    event.preventDefault();

    let username = document.forms['signup_form']['username_signup'].value.trim();
    let password = document.forms['signup_form']['password_signup'].value.trim();

    let newUser = JSON.stringify({
        "Username": username,
        "Password": password
    });

    if (localStorage.getItem('Username')) {
        let existingData = JSON.parse(localStorage.getItem('Username'));
        existingData.push(JSON.parse(newUser));
        localStorage.setItem('Username', JSON.stringify(existingData));
    } else {
        let newUserArray = [];
        newUserArray.push(JSON.parse(newUser));
        localStorage.setItem('Username', JSON.stringify(newUserArray));
    }
    alert("Signup successful!");
    showLogin();
}
//signup

//login process
function loginProcess(event) {
    event.preventDefault();
    let username = document.forms['login']['username'].value
    let password = document.forms['login']['password'].value
    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }
    let storedData = localStorage.getItem('Username');
    if (storedData) {
        let usersArray = JSON.parse(storedData);
        let userFound = false;
        for (let i = 0; i < usersArray.length; i++) {
            if (usersArray[i].Username === username) {
                userFound = true;
                if (usersArray[i].Password === password) {
                    sessionStorage.setItem('Loggedin', 'True');
                    sessionStorage.setItem('Username', username);
                    showData(event);
                    showMain();
                    return;
                } else {
                    alert('Wrong password');
                    return;
                }
            }
        }
        if (!userFound) {
            alert('Wrong username');
        }
    } else {
        alert('databse error');
    }
};
//login process





//varify and put the data in users
function input() {
    let name = document.forms["myform"]["Name"].value;
    let email = document.forms["myform"]["Email"].value;
    let number = document.forms["myform"]["Number"].value;
    let github = document.forms["myform"]["Github"].value;
    let linkedin = document.forms["myform"]["Linkedin"].value;
    let img_link = document.forms["myform"]["Image"].value;
    let storages = document.getElementsByName('Rad');
    let storage = null;
    for (const radio of storages) {
        if (radio.checked) {
            storage = radio.value;
            break;
        }
    }
    let data = {
        "Name": name,
        "Email": email,
        "Number": number,
        "Github": github,
        "Linkedin": linkedin,
        "Img_Link": img_link,
        "Storage": storage
    };

    if (storage === 'local') {
        let k = 0;
        for (let i = 0; i < localStorage.length; i++) {
            let lsKey = localStorage.key(i);
            let storedValue = JSON.parse(localStorage.getItem(lsKey));
            if (storedValue && 'Github' in storedValue) {
                k++;
            }
        }
        let key = sessionStorage.getItem('Username') + String(k);
        localStorage.setItem(key, JSON.stringify(data));
    }

    if (storage === 'session') {
        let k = 0;
        for (let i = 0; i < sessionStorage.length; i++) {
            let ssKey = sessionStorage.key(i);
            if (ssKey == "Username" || ssKey == "Loggedin" || ssKey == "IsThisFirstTime_Log_From_LiveServer") {
                continue;
            }
            let storedValue = JSON.parse(sessionStorage.getItem(ssKey));
            if (storedValue && 'Github' in storedValue) {
                k++;
            }
        }
        let key = sessionStorage.getItem('Username') + String(k);
        sessionStorage.setItem(key, JSON.stringify(data));
    }

    reloadPage();
}
//varify and put the data in users

function show(key, storage, event) {
    let storedValue = null;
    if (storage == "local") {
        storedValue = JSON.parse(localStorage.getItem(key));
    } else {
        storedValue = JSON.parse(sessionStorage.getItem(key));
    }

    if (storedValue && 'Github' in storedValue) {
        let name = storedValue.Name;
        let email = storedValue.Email;
        let number = storedValue.Number;
        let github = storedValue.Github;
        let linkedin = storedValue.Linkedin;
        let img_link = storedValue.Img_Link;
        let storage = storedValue.Storage;

        const userTemplate = `
        <div class="card">
            <div class="card-body">
                <img class="imgOfSidebar" src="{{img_link}}" alt="Pic">
                <h5 class="card-title">{{name}}</h5>
                <p class="card-text">{{email}}</p>
                <p class="card-text">{{number}}</p>
                <button class="btn btn-primary" onclick="window.open('{{github}}')">Github</button>
                <button class="btn btn-primary" onclick="window.open('{{linkedin}}')">LinkedIn</button> <br>
                <button class="btn btn-primary" onclick="editInForm(event, '{{key}}', '{{storage}}')">Edit</button>
                <button class="btn btn-primary" onclick="deleteData('{{key}}', '{{storage}}')">Delete</button>
            </div>
            <br>
        </div>
    `;
        let newUserCard = userTemplate
            .replace(/{{name}}/g, name)
            .replace(/{{email}}/g, email)
            .replace(/{{number}}/g, number)
            .replace(/{{github}}/g, github)
            .replace(/{{linkedin}}/g, linkedin)
            .replace(/{{img_link}}/g, img_link)
            .replace(/{{key}}/g, key)
            .replace(/{{storage}}/g, storage)
        document.getElementById('input_given_by_user').insertAdjacentHTML("beforeend", newUserCard);
    }
}


//shows inputted data
function showData(event) {
    //local show
    let storage_of_show = "local"
    event.preventDefault();
    let username = sessionStorage.getItem('Username');
    for (let i = 0; i < localStorage.length; i++) {
        let lsKey = localStorage.key(i);
        if (lsKey.includes(username)) {
            show(lsKey, storage_of_show, event);
        }
    }

    //session show
    storage_of_show = "session"
    for (let i = 0; i < sessionStorage.length; i++) {
        let ssKey = sessionStorage.key(i);
        if (ssKey == "Username" || ssKey == "Loggedin" || ssKey == "IsThisFirstTime_Log_From_LiveServer") {
            continue;
        }
        if (ssKey.includes(username)) {
            show(ssKey, storage_of_show, event);
        }
    }
}
//shows inputted data



//puting existing value to the form for edit
function editInForm(event, key, storage) {
    event.preventDefault();
    let data;
    console.log(key);
    if (storage === 'session') {
        data = JSON.parse(sessionStorage.getItem(key));
    } else if (storage === 'local') {
        data = JSON.parse(localStorage.getItem(key));
    }

    if (data) {
        let name = data.Name;
        let email = data.Email;
        let number = data.Number;
        let github = data.Github;
        let linkedin = data.Linkedin;
        let img_link = data.Img_Link;
        let storageType = data.Storage;

        document.forms["myform"]["Name"].value = name;
        document.forms["myform"]["Email"].value = email;
        document.forms["myform"]["Number"].value = number;
        document.forms["myform"]["Github"].value = github;
        document.forms["myform"]["Linkedin"].value = linkedin;
        document.forms["myform"]["Image"].value = img_link;
        if (storage == 'local') {
            document.getElementById('local').click();
        } else {
            document.getElementById('session').click();
        }
        key_input = document.createElement("input");
        key_input.type = 'hidden';
        key_input.id = 'key'
        key_input.value = key;
        document.getElementById("myform").appendChild(key_input);

        storage_input = document.createElement("input");
        storage_input.type = 'hidden';
        storage_input.id = 'old_storage'
        storage_input.value = storage;
        document.getElementById("myform").appendChild(storage_input);

        submitButton = document.getElementById("submit_button");
        submitButton.style.display = 'none';

        editButton = document.getElementById("edit_button");
        editButton.style.display = 'block';
    }
    activateButton();
}
//puting existing value to the form for edit




//submitting edited value
function editSubmit(event) {
    event.preventDefault();

    let name = document.forms["myform"]["Name"].value;
    let email = document.forms["myform"]["Email"].value;
    let number = document.forms["myform"]["Number"].value;
    let github = document.forms["myform"]["Github"].value;
    let linkedin = document.forms["myform"]["Linkedin"].value;
    let img_link = document.forms["myform"]["Image"].value;
    let key = document.forms["myform"]["key"].value;
    let storages = document.getElementsByName('Rad');
    let storage = null;
    for (const radio of storages) {
        if (radio.checked) {
            storage = radio.value;
            break;
        }
    }
    let old_storage = document.forms["myform"]["old_storage"].value;

    let data = {
        "Name": name,
        "Email": email,
        "Number": number,
        "Github": github,
        "Linkedin": linkedin,
        "Img_Link": img_link,
        "Storage": storage,
        "Old_Storage": old_storage
    };

    // Remove old entry
    if (old_storage == 'session') {
        sessionStorage.removeItem(key);
    } else {
        localStorage.removeItem(key);
    }

    // Store updated data
    if (storage === 'session') {
        sessionStorage.setItem(key, JSON.stringify(data));
    } else if (storage === 'local') {
        localStorage.setItem(key, JSON.stringify(data));
    }

    reloadPage();
}
//submitting edited value


//delete
function deleteData(key, storage) {
    if (storage === 'session') {
        sessionStorage.removeItem(key);
    } else if (storage === 'local') {
        localStorage.removeItem(key);
    }
    reloadPage();
}
//delete

//logout
function logout() {
    sessionStorage.removeItem('Loggedin');
    sessionStorage.removeItem('Username');
    showLogin();
}
//logout