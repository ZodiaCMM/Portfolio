var jwt = localStorage.getItem('jwt');
if(jwt!=null){
  window.location.href = '/index.html';
}   

function login(){  
    const username = document.getElementById('username').Value;
    const password = document.getElementById('password').Value;

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://www.melivecode.com/api/login");
    xhttp.setRequestHeader("Content-Type", "application/json, charset=utf-8");
    xhttp.send(JSON.stringify({ 
        "username": username,
        "password": password
    }));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 ) {
            const objects = JSON.parse(this.responseText);
            console.log(objects);
            if(objects('status') == 'ok'){
                localStorage.setItem('jwt', objects["acesstoken"]);
                window.location.href = '/index.html';
            }else{
                alert("Login failed");
            }
        }
    }
    return false;
}