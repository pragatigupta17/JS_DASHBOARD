function data(){
    let username = document.querySelector('#username').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#pasword').value
    let confirm_password = document.querySelector('#confirm_password').value;
    console.log(username,email,password,confirm_password);
    if(username === ""){
       // window.alert("please enter ur name");
       document.querySelector('#form').innerHTML = "please enter ur name";
       let selectname = document.querySelector('# username');
       selectname.style.borderColor = "red"
       selectname.style.outlineColor = "red"
       return false;
    }

   else if(!(email.includes('@')&& email.includes(".com"))){
        document.querySelector('#form').innerHTML = "please enter ur email";
        let selectage = document.querySelector('#email');
        selectage.style.borderColor = "red"
        selectage.style.borderColor = "red"
        return false;
    }


    else if(no.length !== 10){
        document.querySelector('#errorno').innerHTML = "please enter ur  10 digit no";
        let selectage = document.querySelector('#no');
        selectage.style.borderColor = "red"
        selectage.style.borderColor = "red"
        return false;
    }
    else if(isNaN(number)){
        document.querySelector('#form').innerHTML = "please enter int type no";
        let selectage = document.querySelector('#number');
        selectage.style.borderColor = "red"
        selectage.style.borderColor = "red"
        return false;
    }

 else if(password === ""){
        document.querySelector('#form').innerHTML = "please enter ur password";
        let selectage = document.querySelector('#password');
        selectage.style.borderColor = "red"
        selectage.style.borderColor = "red"
        return false;
    }
    else if
    (!(password.match(/[1234567890]/)
     && 
     password.match(/[!@#$%^&*_()-]/) 
     && 
     password.match(/[qwertyuiopasdfghjklzxcvbnm]/) 
     && 
     password.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)))
     {
        document.querySelector('#form').innerHTML = "password contains atleast 1 lower, upper,special and number";
        let selectage = document.querySelector('#password');
        selectage.style.borderColor = "red"
        selectage.style.borderColor = "red"
        return false;
    }
    

    else if(confirm_password === ""){
        document.querySelector('#form').innerHTML = "please enter ur cpswd";
        let selectage = document.querySelector('#confirm_password');
        selectage.style.borderColor = "red"
        selectage.style.borderColor = "red"
        return false;
    }
    else if
    (!(confirm_password.match(/[1234567890]/)
     && 
     confirm_password.match(/[!@#$%^&*_()-]/) 
     && 
     confirm_password.match(/[qwertyuiopasdfghjklzxcvbnm]/) 
     && 
     confirm_ppa.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)))
     {
        document.querySelector('#form').innerHTML = "password contains atleast 1 lower, upper,special and number";
        let selectage = document.querySelector('#confirm_password');
        selectage.style.borderColor = "red"
        selectage.style.borderColor = "red"
        return false;
    }

    }

    