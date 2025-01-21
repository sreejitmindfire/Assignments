//onchange functions
function v_name(){
    name_text =document.getElementById("Name").value;
    const isValid = /^[A-Za-z][A-Za-z0-9_$ ]*$/.test(name_text);
    if (name_text == "" || isValid == false) {
        document.getElementById("Name").classList.add("invalid");
        document.getElementById("invalid_name").style.display = 'block';
    }
    else{
        document.getElementById("Name").classList.remove("invalid");
        document.getElementById("invalid_name").style.display = 'none';
    }
}

function v_email(){
    email = document.getElementById("Email");
    text = email.value;
    let indexa = text.indexOf("@");
    let indexdot = text.indexOf(".");

    if((indexa <= 0)||(indexdot < indexa)){
        document.getElementById("Email").classList.add("invalid");
        document.getElementById("invalid_email").style.display = 'block';
    }
    else{
        document.getElementById("Email").classList.remove("invalid");
        document.getElementById("invalid_email").style.display = 'none';
    }
}
function v_number(){
    number = document.getElementById("Phno");
    text = document.getElementById("Phno").value;
    num_int = parseInt(text)

    if((num_int>9999999999)||(num_int<2002000000)){
        document.getElementById("Phno").classList.add("invalid");
        document.getElementById("invalid_number").style.display = 'block';
    }
    else{
        document.getElementById("Phno").classList.remove("invalid");
        document.getElementById("invalid_number").style.display = 'none';
    }
}
function v_link(){
    text = document.getElementById("Linkedin").value;
    let indexa = text.indexOf("https://linkedin.com");
    let indexb = text.indexOf("https://www.linkedin.com");
    if(indexa != 0 && indexb != 0){
        document.getElementById("Linkedin").classList.add("invalid");
        document.getElementById("invalid_link").style.display = 'block';
    }
    else{
        document.getElementById("Linkedin").classList.remove("invalid");
        document.getElementById("invalid_link").style.display = 'none';
    }
}
function v_git(){
    email = document.getElementById("Github");
    text = document.getElementById("Github").value;
    let indexa = text.indexOf("https://github.com");
    let indexb = text.indexOf("https://www.github.com");
    if(indexa == 0 || indexb == 0){
        document.getElementById("Github").classList.remove("invalid");
        document.getElementById("invalid_git").style.display = 'none';
    }
    else{
        document.getElementById("Github").classList.add("invalid");
        document.getElementById("invalid_git").style.display = 'block';
    }

}
function v_image(){
    text = document.getElementById("Image").value;
    let indexa = text.indexOf("https://");
    if(indexa == 0){
        document.getElementById("Image").classList.remove("invalid");
        document.getElementById("invalid_img").style.display = 'none';
    }
    else{
        document.getElementById("Image").classList.add("invalid");
        document.getElementById("invalid_img").style.display = 'block';
    }

}
//onchange functions



//onsubmit verification functions
function vname(name){
    const isValid = /^[A-Za-z][A-Za-z0-9_$ ]*$/.test(name);
    if (name == "" || isValid == false) {
        return true;
    }
    else{
        return false;
    }
}
function vnumber(number){
    if (number == null) {
        return true;
    }
    else{
        return false;
    }
}
function vemail(email){
    text = email;
    let indexa = text.indexOf("@");
    let indexdot = text.indexOf(".");
    if((indexa > 0)&&(indexdot > indexa)){
        return false;
    }
    else{
        return true;
    }
}
function vlink(linkedin){
    text = linkedin;
    let indexa = text.indexOf("https://linkedin.com");
    let indexb = text.indexOf("https://www.linkedin.com");
    if(indexa == 0 || indexb == 0){
        return false;
    }
    else{
        return true;
    }
}
function vgit(github){
    text = github;
    let indexa = text.indexOf("https://github.com");
    let indexb = text.indexOf("https://github.com");
    if(indexa == 0 || indexb == 0){
        return false;
    }
    else{
        return true;
    }
}
function vimage(image_link){
    text = image_link;
    let indexa = text.indexOf("https://");
    if(indexa == 0){
        return false;
    }
    else{
        return true;
    }

}
//onsubmit verification functions




//display and hide functions
function showlogin() {
    document.getElementById('login').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
    document.getElementById('main').style.display = 'none';
}
function showmain() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'none';
    document.getElementById('main').style.display = 'block';
}
function showsignup() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'block';
    document.getElementById('main').style.display = 'none';
}
//display and hide functions



//reload function
function reload_page(){
    location.reload(true);
}
//reload function





//signup
function signup(event) {
    event.preventDefault();
    let username = document.forms['signupp']['usernamee'].value;
    let password = document.forms['signupp']['passwordd'].value;
    let confirm_password = document.forms['signupp']['password_c'].value;
    let key = 0;
    if (vname(username)) {
        alert ("invalid username");
    }
    else{
        if (password != confirm_password) {
            alert ("password do not match");
        }
        else{
            for (let i = 0; i < localStorage.length; i++) {
                let lsKey = localStorage.key(i);
                let storedValue = JSON.parse(localStorage.getItem(lsKey));
                if (storedValue && 'Username' in storedValue) {
                    key++;
                }
            }
        
            localStorage.setItem(key, JSON.stringify({ "Username": username, "Password": password }));
            showlogin();
        }
    }
    
}
//signup

//login process
function login_process(event) {
    event.preventDefault();
    let username = document.forms['login']['username'].value;
    let password = document.forms['login']['password'].value;
    let found_username = 0
    for (let i = 0; i < localStorage.length; i++) {
        let lsKey = localStorage.key(i);
        let storedValue = JSON.parse(localStorage.getItem(lsKey));
        
        if (storedValue && 'Username' in storedValue) {
            if (username === storedValue.Username) {
                if (password === storedValue.Password) {
                    found_username =1;
                    sessionStorage.setItem('Loggedin', 'True');
                    sessionStorage.setItem('Username', username);
                    showdata(event);
                    showmain();
                    break;
                } else {
                    alert('Wrong password');
                    return;
                }
            }
        }
    }
    if (found_username==0) {
        alert('Wrong username');
    }    
};
//login process





//varify and put the data in users
function varify_and_input() {
    let name = document.forms["myform"]["Name"].value;
    let email = document.forms["myform"]["Email"].value;
    let number = document.forms["myform"]["Phno"].value;
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

    //name validation after submission
    if (v_name(name)) {
        alert("Invalid name");
        return false;
    }

    //email validation after submission
    else if (vemail(email)) {
        alert("email should be valid");
        return false;
    }

    //number validation after submission
    else if (v_number(number)) {
        alert("Phone number should be valid");
        return false;
    }

    //github validation after submission
    else if (vgit(github)) {
        alert("github should be valid");
        return false;
    }

    //linkedin validation after submission
    else if (vlink(linkedin)) {
        alert("linkedin should be valid");
        return false;
    }

    //image validation after submission
    else if (vimage(img_link)) {
        alert("image link should be valid");
        return false;
    }

    //data entry in local storage
    else {
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
                let storedValue = JSON.parse(sessionStorage.getItem(ssKey));
                if (storedValue && 'Github' in storedValue) {
                    k++;
                }
            }
            let key = sessionStorage.getItem('Username') + String(k);
            sessionStorage.setItem(key, JSON.stringify(data));
        }

        reload_page();
    }
}
//varify and put the data in users




//shows inputted data
function showdata(event) {
    event.preventDefault();
    for (let i = 0; i < localStorage.length; i++) {
        let lsKey = localStorage.key(i);
        let storedValue = JSON.parse(localStorage.getItem(lsKey));

        if (storedValue && 'Github' in storedValue) {
            let name = storedValue.Name;
            let email = storedValue.Email;
            let number = storedValue.Number;
            let github = storedValue.Github;
            let linkedin = storedValue.Linkedin;
            let img_link = storedValue.Img_Link;
            let storage = storedValue.Storage;
            let key = lsKey;

                let user_div = document.createElement('div');
                user_div.classList.add('card');

                let user_div_body = document.createElement('div')
                user_div_body.classList.add('card-body')

                let user_div_body_header = document.createElement('h5');
                user_div_body_header.classList.add('card-title');
                user_div_body_header.textContent = name;

                let user_div_body_email = document.createElement('p');
                user_div_body_email.classList.add('card-text');
                user_div_body_email.textContent = email;

                let user_div_body_phone = document.createElement('p');
                user_div_body_phone.classList.add('card-text');
                user_div_body_phone.textContent = number;
                
                let user_div_github = document.createElement('button');
                user_div_github.classList.add('btn');
                user_div_github.classList.add('btn-primary');
                user_div_github.textContent = "Github";
                user_div_github.addEventListener("click",function(){window.open(github)});

                let user_div_linkedin = document.createElement('button');
                user_div_linkedin.classList.add('btn');
                user_div_linkedin.classList.add('btn-primary');
                user_div_linkedin.textContent = "Linkedin";
                user_div_linkedin.addEventListener("click",function(){window.open(linkedin)});
                
                let user_div_image = document.createElement('img');
                user_div_image.classList.add('imggg');
                user_div_image.src = img_link;
                
                let user_div_edit_button = document.createElement('button');
                user_div_edit_button.classList.add('btn');
                user_div_edit_button.classList.add('btn-primary');
                user_div_edit_button.textContent = "edit";
                user_div_edit_button.addEventListener("click",function(){edit_in_form(event,key,storage)});

                let user_div_delete_button = document.createElement('button');
                user_div_delete_button.classList.add('btn');
                user_div_delete_button.classList.add('btn-primary');
                user_div_delete_button.textContent = "delete";
                user_div_delete_button.addEventListener("click",function(){del(key,storage)});

                let line_brk = document.createElement('br');

                user_div_body.appendChild(user_div_image);
                user_div_body.appendChild(user_div_body_header);
                user_div_body.appendChild(user_div_body_email);
                user_div_body.appendChild(user_div_body_phone);
                user_div_body.appendChild(user_div_github);
                user_div_body.appendChild(user_div_linkedin);
                user_div_body.appendChild(line_brk);
                user_div_body.appendChild(user_div_edit_button);
                user_div_body.appendChild(user_div_delete_button);

                user_div.appendChild(user_div_body);
                document.getElementById('input_given_by_user').appendChild(user_div);

            
        }
    }

    for (let i = 0; i < sessionStorage.length; i++) {
        let ssKey = sessionStorage.key(i);
        if (ssKey == "Username" || ssKey == "Loggedin" || ssKey == "IsThisFirstTime_Log_From_LiveServer") {
            continue;
        }
        console.log(ssKey);
        let storedValue = JSON.parse(sessionStorage.getItem(ssKey));

        if (storedValue && 'Github' in storedValue) {
            let name = storedValue.Name;
            let email = storedValue.Email;
            let number = storedValue.Number;
            let github = storedValue.Github;
            let linkedin = storedValue.Linkedin;
            let img_link = storedValue.Img_Link;
            let storage = storedValue.Storage;
            let key = ssKey;

            let user_div = document.createElement('div');
                user_div.classList.add('card');

                let user_div_body = document.createElement('div')
                user_div_body.classList.add('card-body')

                let user_div_body_header = document.createElement('h5');
                user_div_body_header.classList.add('card-title');
                user_div_body_header.textContent = name;

                let user_div_body_email = document.createElement('p');
                user_div_body_email.classList.add('card-text');
                user_div_body_email.textContent = email;

                let user_div_body_phone = document.createElement('p');
                user_div_body_phone.classList.add('card-text');
                user_div_body_phone.textContent = number;
                
                let user_div_github = document.createElement('button');
                user_div_github.classList.add('btn');
                user_div_github.classList.add('btn-primary');
                user_div_github.textContent = "Github";
                user_div_github.addEventListener("click",function(){window.open(github)});

                let user_div_linkedin = document.createElement('button');
                user_div_linkedin.classList.add('btn');
                user_div_linkedin.classList.add('btn-primary');
                user_div_linkedin.textContent = "Linkedin";
                user_div_linkedin.addEventListener("click",function(){window.open(linkedin)});
                
                let user_div_image = document.createElement('img');
                user_div_image.classList.add('imggg');
                user_div_image.src = img_link;
                
                let user_div_edit_button = document.createElement('button');
                user_div_edit_button.classList.add('btn');
                user_div_edit_button.classList.add('btn-primary');
                user_div_edit_button.textContent = "edit";
                user_div_edit_button.addEventListener("click",function(){edit_in_form(event,key,storage)});

                let user_div_delete_button = document.createElement('button');
                user_div_delete_button.classList.add('btn');
                user_div_delete_button.classList.add('btn-primary');
                user_div_delete_button.textContent = "delete";
                user_div_delete_button.addEventListener("click",function(){del(key,storage)});

                let line_brk = document.createElement('br');

                user_div_body.appendChild(user_div_image);
                user_div_body.appendChild(user_div_body_header);
                user_div_body.appendChild(user_div_body_email);
                user_div_body.appendChild(user_div_body_phone);
                user_div_body.appendChild(user_div_github);
                user_div_body.appendChild(user_div_linkedin);
                user_div_body.appendChild(line_brk);
                user_div_body.appendChild(user_div_edit_button);
                user_div_body.appendChild(user_div_delete_button);

                user_div.appendChild(user_div_body);
                document.getElementById('input_given_by_user').appendChild(user_div);

            break;
        }
    }
}
//shows inputted data



//logout
function logout() {
    sessionStorage.removeItem('Loggedin');
    sessionStorage.removeItem('Username');
    showlogin();
}
//logout

//puting existing value to the form for edit
function edit_in_form(event, key, storage) {
    event.preventDefault();
    let data;

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
        document.forms["myform"]["Phno"].value = number;
        document.forms["myform"]["Github"].value = github;
        document.forms["myform"]["Linkedin"].value = linkedin;
        document.forms["myform"]["Image"].value = img_link;
        if(storage=='local'){
            document.getElementById('local').click();
        }
        else{
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

        document.getElementById("submit_button").innerText = "Edit";
        let form = document.getElementById("myform");
        form.onsubmit = function(event) {
            event.preventDefault(); 
            edit_submit(event,key);
        }
    }
}
//puting existing value to the form for edit




//submitting edited value
function edit_submit(event, key) {
    event.preventDefault();

    let name = document.forms["myform"]["Name"].value;
    let email = document.forms["myform"]["Email"].value;
    let number = document.forms["myform"]["Phno"].value;
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
    let old_storage = document.forms["myform"]["old_Storage"].value;
    let key_form = document.forms["myform"]["key"].value;

    let data = {
        "Name": name,
        "Email": email,
        "Number": number,
        "Github": github,
        "Linkedin": linkedin,
        "Img_Link": img_link,
        "Storage": storage,
        "Key": key_form,
        "Old_Storage": old_storage
    };

    // Remove old entry
    if (old_storage === 'session') {
        sessionStorage.removeItem(key)
;
    } else if (old_storage === 'local') {
        localStorage.removeItem(key)
;
    }

    // Store updated data
    if (storage === 'session') {
        sessionStorage.setItem(key, JSON.stringify(data));
    } else if (storage === 'local') {
        localStorage.setItem(key, JSON.stringify(data));
    }

    reload_page();
}
//submitting edited value


//delete
function del(key, storage) {
    if (storage === 'session') {
        sessionStorage.removeItem(key);
    } else if (storage === 'local') {
        localStorage.removeItem(key);
    }
    reload_page();
}
//delete