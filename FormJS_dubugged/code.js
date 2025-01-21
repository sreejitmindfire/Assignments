function showLogin() {
    document.getElementById('login').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
    document.getElementById('main').style.display = 'none';
}

function showMain() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('signup').style.display = 'none';
    document.getElementById('main').style.display = 'block';
}

function update_git(github){
    gIthub = github;
}
function update_Link(linkedin){
    linkk = linkedin;
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
function validateForm(event){
    indx = localStorage.length+1
    event.preventDefault();
    let name = document.forms["myform"]["Name"].value;
    let email = document.forms["myform"]["Email"].value;
    let number = document.forms["myform"]["Phno"].value;
    let github = document.forms["myform"]["Github"].value;
    let linkedin = document.forms["myform"]["Linkedin"].value;
    let img_link = document.forms["myform"]["Image"].value;
    let storages = document.getElementsByName('Rad');
    let storage = null;
    for (const radio of storages){
        if(radio.checked){
            storage = radio.value;
            break;
        }
    }
    const isValid = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name);
    if (name == "" || isValid == false) {
        alert("Invalid name");
        return false;
    }
    else if(vemail(email)){
        alert("email should be valid");
        return false;
    }
    else if(number==""){
        alert("Phone number should be valid");
        return false;
    }
    else if(vgit(github)){
        alert("github should be valid");
        return false;
    }
    else if(vlink(linkedin)){
        alert("linkedin should be valid");
        return false;
    }
    else if(vimage(img_link)){
        alert("image link should be valid");
        return false;
    }
    else{
        let data = name + " " + email + " " + number + " " + github + " " + linkedin + " " + img_link + " " + storage;
        //console.log(data);
        if(storage == "local")
        {
            key = usernameeee + "" +indx

                console.log(key)
                console.log(data)
                localStorage.setItem(key, data);
           
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

                user_div_edit_button = document.createElement('button');
                user_div_edit_button.classList.add('btn');
                user_div_edit_button.classList.add('btn-primary');
                user_div_edit_button.textContent = "edit";
                user_div_edit_button.addEventListener("click",function(){edit(event,key,data)});

                let user_div_delete_button = document.createElement('button');
                user_div_delete_button.classList.add('btn');
                user_div_delete_button.classList.add('btn-primary');
                user_div_delete_button.textContent = "delete";
                user_div_delete_button.addEventListener("click",function(){del(event,key,data)});

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
        else if(storage == "session")
        {
            key = usernameeee + "" +indx
            // console.log(key);
            // console.log("local");
            sessionStorage.setItem(key, data);
            // sessionStorage.clear();
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

                user_div_edit_button = document.createElement('button');
                user_div_edit_button.classList.add('btn');
                user_div_edit_button.classList.add('btn-primary');
                user_div_edit_button.textContent = "edit";
                user_div_edit_button.addEventListener("click",function(){edit(event,key,data)});

                let user_div_delete_button = document.createElement('button');
                user_div_delete_button.classList.add('btn');
                user_div_delete_button.classList.add('btn-primary');
                user_div_delete_button.textContent = "delete";
                user_div_delete_button.addEventListener("click",function(){del(event,key,data)});

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
    

    
}
function redirect_git(){
    window.open(gIthub);
}
function redirect_link(){
    window.open(linkk);
}
function signup(event){
    event.preventDefault();
    let username = document.forms["signupp"]["usernamee"].value;
    let password = document.forms["signupp"]["passwordd"].value;
    let password_c = document.forms["signupp"]["password_c"].value;
    if(password!=password_c){
        alert('password do not match');
        return 0;
    }
    localStorage.setItem(username, password);
    document.getElementById('signup').style.display='none';
    document.getElementById('login').style.display='block';
}
function showpage(event){
    event.preventDefault();
    
    let username = document.forms["login"]["username"].value;
    usernameeee = username;
    let password = document.forms["login"]["password"].value;
    const storedPassword = localStorage.getItem(username);
    if (storedPassword) {
        // console.log("Hi");
        // Check if the password matches
        if (password === storedPassword) {
            //console.log(username);
            //loged in
            // localStorage.clear();
            localStorage.setItem('loggedIn', 'true');
            user_key = username + "6969";
            localStorage.setItem('inside', user_key);
            let myArray = [];
            for(let i=0; i<localStorage.length; i++){
                let key =localStorage.key(i);
                // console.log(localStorage.getItem(key));
                // console.log(key+"hero");
                // console.log(username);
                if(key.includes(username) && key !== username){
                    let valuer = localStorage.getItem(key);
                    let value = String(valuer);
                    myArray = value.split(" ");
                    // console.log(myArray);
                
                let user_div = document.createElement('div');
                user_div.classList.add('card');

                let user_div_body = document.createElement('div')
                user_div_body.classList.add('card-body')

                let user_div_body_header = document.createElement('h5');
                user_div_body_header.classList.add('card-title');
                user_div_body_header.textContent = myArray[0];

                let user_div_body_email = document.createElement('p');
                user_div_body_email.classList.add('card-text');
                user_div_body_email.textContent = myArray[1];

                let user_div_body_phone = document.createElement('p');
                user_div_body_phone.classList.add('card-text');
                user_div_body_phone.textContent = myArray[2];
                
                let user_div_github = document.createElement('button');
                user_div_github.classList.add('btn');
                user_div_github.classList.add('btn-primary');
                user_div_github.textContent = "Github";
                user_div_github.addEventListener("click",function(){window.open(myArray[3])});

                let user_div_linkedin = document.createElement('button');
                user_div_linkedin.classList.add('btn');
                user_div_linkedin.classList.add('btn-primary');
                user_div_linkedin.textContent = "Linkedin";
                user_div_linkedin.addEventListener("click",function(){window.open(myArray[4])});
                
                let user_div_image = document.createElement('img');
                user_div_image.classList.add('imggg');
                user_div_image.src = myArray[5];
                
                let user_div_edit_button = document.createElement('button');
                user_div_edit_button.classList.add('btn');
                user_div_edit_button.classList.add('btn-primary');
                user_div_edit_button.textContent = "edit";
                user_div_edit_button.addEventListener("click",function(){edit(event,key,value)});

                let user_div_delete_button = document.createElement('button');
                user_div_delete_button.classList.add('btn');
                user_div_delete_button.classList.add('btn-primary');
                user_div_delete_button.textContent = "delete";
                user_div_delete_button.addEventListener("click",function(){del(event,key,value)});

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

            for(let i=0; i<sessionStorage.length; i++){
                let key = sessionStorage.key(i);
                // console.log(localStorage.getItem(key));
                // console.log(key);
                // console.log(username);
                if(key!= null){
                    if(key.includes(username) && key !== username){
                    let valuer = localStorage.getItem(key);
                    let value = String(valuer);
                    myArray = value.split(" ");
                    // console.log(myArray);
                
                let user_div = document.createElement('div');
                user_div.classList.add('card');

                let user_div_body = document.createElement('div')
                user_div_body.classList.add('card-body')

                let user_div_body_header = document.createElement('h5');
                user_div_body_header.classList.add('card-title');
                user_div_body_header.textContent = myArray[0];

                let user_div_body_email = document.createElement('p');
                user_div_body_email.classList.add('card-text');
                user_div_body_email.textContent = myArray[1];

                let user_div_body_phone = document.createElement('p');
                user_div_body_phone.classList.add('card-text');
                user_div_body_phone.textContent = myArray[2];
                
                let user_div_github = document.createElement('button');
                user_div_github.classList.add('btn');
                user_div_github.classList.add('btn-primary');
                user_div_github.textContent = "Github";
                user_div_github.addEventListener("click",function(){window.open(myArray[3])});

                let user_div_linkedin = document.createElement('button');
                user_div_linkedin.classList.add('btn');
                user_div_linkedin.classList.add('btn-primary');
                user_div_linkedin.textContent = "Linkedin";
                user_div_linkedin.addEventListener("click",function(){window.open(myArray[4])});
                
                let user_div_image = document.createElement('img');
                user_div_image.classList.add('imggg');
                user_div_image.src = myArray[5];

                user_div_edit_button = document.createElement('button');
                user_div_edit_button.classList.add('btn');
                user_div_edit_button.classList.add('btn-primary');
                user_div_edit_button.textContent = "edit";
                user_div_edit_button.addEventListener("click",function(){edit(event,key,value)});

                let user_div_delete_button = document.createElement('button');
                user_div_delete_button.classList.add('btn');
                user_div_delete_button.classList.add('btn-primary');
                user_div_delete_button.textContent = "delete";
                user_div_delete_button.addEventListener("click",function(){del(event,key,value)});

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

                   
            }

            // console.log("Hello");
            document.getElementById('signup').style.display='none';
            document.getElementById('login').style.display='none';
            document.getElementById('main').style.display='block';
        } else {
            alert("Wrong password");
        }
    } else {
        alert("Username not found");
    }
    
}
function sgnup(event){
    event.preventDefault();
    document.getElementById('login').style.display='none';
    document.getElementById('signup').style.display='block';
}
function lgin(event){
    event.preventDefault();
    document.getElementById('signup').style.display='none';
    document.getElementById('login').style.display='block';
}
function edit(event,key,value){
    let elementss =[];
    elementss = value.split(" ");
    document.getElementById("Name").value = elementss[0];
    document.getElementById("Email").value = elementss[1];
    document.getElementById("Phno").value = elementss[2];
    document.getElementById("Github").value = elementss[3];
    document.getElementById("Linkedin").value = elementss[4];
    document.getElementById("Image").value = elementss[5];
    key_input = document.createElement("input");
    key_input.type = 'hidden';
    key_input.id = 'key'
    key_input.value = key;
    document.getElementById("myform").appendChild(key_input);

    document.getElementById("submit_button").innerText = "Edit";
    let form = document.getElementById("myform");
    form.onsubmit = function(event) {
        event.preventDefault(); 
        console.log("New dynamic function executed!");
        edit_data(event,key,value);

    }

    console.log(elementss[6]);

    if(elementss[6]=='local'){
        document.getElementById('local').click();
    }
    else{
        document.getElementById('session').click();
    }   
}
function edit_data(event,key,value) {
    event.preventDefault();

    event.preventDefault();
    let name = document.forms["myform"]["Name"].value;
    let email = document.forms["myform"]["Email"].value;
    let number = document.forms["myform"]["Phno"].value;
    let github = document.forms["myform"]["Github"].value;
    let linkedin = document.forms["myform"]["Linkedin"].value;
    let img_link = document.forms["myform"]["Image"].value;
    let keyy = document.forms["myform"]["key"].value;
    let storages = document.getElementsByName('Rad');
    let storage = null;
    for (const radio of storages){
        if(radio.checked){
            storage = radio.value;
            break;
        }
    }
    

    if (name == "") {
        alert("Name must be filled out");
        return false;
    }
    else if(vemail(email)){
        alert("email should be valid");
        return false;
    }
    else if(number==""){
        alert("Phone number should be valid");
        return false;
    }
    else if(vgit(github)){
        alert("github should be valid");
        return false;
    }
    else if(vlink(linkedin)){
        alert("linkedin should be valid");
        return false;
    }
    else if(vimage(img_link)){
        alert("image link should be valid");
        return false;
    }
    else{
        //delete local data
        localStorage.removeItem(keyy);
        //delete session data
        sessionStorage.removeItem(keyy);
        let data = name + " " + email + " " + number + " " + github + " " + linkedin + " " + img_link + " " + storage;
        //console.log(data);
        if(storage == "local")
        {
                // console.log(keyy)
                // console.log(data)
                localStorage.setItem(keyy, data);
           
        }
        else if(storage == "session")
        {
            // console.log(key);
            // console.log("local");
            sessionStorage.setItem(keyy, data);
            // sessionStorage.clear();
        }
        location.reload(true);
    }           
}
function del(event,key,value){
    let elementss =[];
    elementss = value.split(" ");
    if(elementss[6]=='local'){
        localStorage.removeItem(key);
        location.reload(true);
    }
    else{
        sessionStorage.removeItem(key);
        location.reload(true);
    }

}   
function logout() {
    localStorage.removeItem('loggedIn');
    showLogin();
}
function show_the_page(event){
    event.preventDefault();
    let myArray = [];
            for(let i=0; i<localStorage.length; i++){
                let key =localStorage.key(i);
                // console.log(localStorage.getItem(key));
                // console.log(key+"hero");
                // console.log(username);
                if(key.includes(usernameeee) && key !== usernameeee){
                    let valuer = localStorage.getItem(key);
                    let value = String(valuer);
                    myArray = value.split(" ");
                    // console.log(myArray);
                
                let user_div = document.createElement('div');
                user_div.classList.add('card');

                let user_div_body = document.createElement('div')
                user_div_body.classList.add('card-body')

                let user_div_body_header = document.createElement('h5');
                user_div_body_header.classList.add('card-title');
                user_div_body_header.textContent = myArray[0];

                let user_div_body_email = document.createElement('p');
                user_div_body_email.classList.add('card-text');
                user_div_body_email.textContent = myArray[1];

                let user_div_body_phone = document.createElement('p');
                user_div_body_phone.classList.add('card-text');
                user_div_body_phone.textContent = myArray[2];
                
                let user_div_github = document.createElement('button');
                user_div_github.classList.add('btn');
                user_div_github.classList.add('btn-primary');
                user_div_github.textContent = "Github";
                user_div_github.addEventListener("click",function(){window.open(myArray[3])});

                let user_div_linkedin = document.createElement('button');
                user_div_linkedin.classList.add('btn');
                user_div_linkedin.classList.add('btn-primary');
                user_div_linkedin.textContent = "Linkedin";
                user_div_linkedin.addEventListener("click",function(){window.open(myArray[4])});
                
                let user_div_image = document.createElement('img');
                user_div_image.classList.add('imggg');
                user_div_image.src = myArray[5];
                
                let user_div_edit_button = document.createElement('button');
                user_div_edit_button.classList.add('btn');
                user_div_edit_button.classList.add('btn-primary');
                user_div_edit_button.textContent = "edit";
                user_div_edit_button.addEventListener("click",function(){edit(event,key,value)});

                let user_div_delete_button = document.createElement('button');
                user_div_delete_button.classList.add('btn');
                user_div_delete_button.classList.add('btn-primary');
                user_div_delete_button.textContent = "delete";
                user_div_delete_button.addEventListener("click",function(){del(event,key,value)});

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

            for(let i=0; i<sessionStorage.length; i++){
                let key = sessionStorage.key(i);
                // console.log(localStorage.getItem(key));
                // console.log(key);
                // console.log(username);
                if(key!= null){
                    if(key.includes(usernameeee) && key !== usernameeee){
                    let valuer = localStorage.getItem(key);
                    let value = String(valuer);
                    myArray = value.split(" ");
                    // console.log(myArray);
                
                let user_div = document.createElement('div');
                user_div.classList.add('card');

                let user_div_body = document.createElement('div')
                user_div_body.classList.add('card-body')

                let user_div_body_header = document.createElement('h5');
                user_div_body_header.classList.add('card-title');
                user_div_body_header.textContent = myArray[0];

                let user_div_body_email = document.createElement('p');
                user_div_body_email.classList.add('card-text');
                user_div_body_email.textContent = myArray[1];

                let user_div_body_phone = document.createElement('p');
                user_div_body_phone.classList.add('card-text');
                user_div_body_phone.textContent = myArray[2];
                
                let user_div_github = document.createElement('button');
                user_div_github.classList.add('btn');
                user_div_github.classList.add('btn-primary');
                user_div_github.textContent = "Github";
                user_div_github.addEventListener("click",function(){window.open(myArray[3])});

                let user_div_linkedin = document.createElement('button');
                user_div_linkedin.classList.add('btn');
                user_div_linkedin.classList.add('btn-primary');
                user_div_linkedin.textContent = "Linkedin";
                user_div_linkedin.addEventListener("click",function(){window.open(myArray[4])});
                
                let user_div_image = document.createElement('img');
                user_div_image.classList.add('imggg');
                user_div_image.src = myArray[5];

                user_div_edit_button = document.createElement('button');
                user_div_edit_button.classList.add('btn');
                user_div_edit_button.classList.add('btn-primary');
                user_div_edit_button.textContent = "edit";
                user_div_edit_button.addEventListener("click",function(){edit(event,key,value)});

                let user_div_delete_button = document.createElement('button');
                user_div_delete_button.classList.add('btn');
                user_div_delete_button.classList.add('btn-primary');
                user_div_delete_button.textContent = "delete";
                user_div_delete_button.addEventListener("click",function(){del(event,key,value)});

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

                   
            }

            // console.log("Hello");
            document.getElementById('signup').style.display='none';
            document.getElementById('login').style.display='none';
            document.getElementById('main').style.display='block';
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








function v_name(){
    name = document.getElementById("Name");
    name_text =document.getElementById("Name").value;
    // console.log("i am here");
    const isValid = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name_text);
    console.log(name_text);
    console.log(isValid);
    if (name_text == "" || isValid == false) {
        console.log("i am here");
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
    console.log(text);
    // console.log("i am here");
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
    console.log(text);
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
    console.log(indexa);
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
    console.log(text);
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