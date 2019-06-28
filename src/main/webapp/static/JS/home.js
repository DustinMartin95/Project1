
//Create event listener for the login button
document.getElementById("login").addEventListener("click", login);

function login(){
  document.getElementById("fail-login").innerHTML = "";
  let url = "http://ec2-3-19-30-224.us-east-2.compute.amazonaws.com:8080/EmployeeSite/login";
  let xhr = new XMLHttpRequest();
  xhr.open("GET",url);

  xhr.onreadystatechange = function(){
  if(this.readyState === 4 && this.status === 200){
      let auth = xhr.getResponseHeader("Authorization");
      sessionStorage.setItem("token", auth);
      sessionStorage.setItem("email", email);
      window.location.href="http://ec2-3-19-30-224.us-east-2.compute.amazonaws.com:8080/EmployeeSite/employeeHub";
    }else if(this.readyState === 4 && this.status === 401){
      failLogin();
    }
  }
  
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  xhr.setRequestHeader("Email",email);
  xhr.setRequestHeader("Password",password);
  xhr.send();
}

function failLogin(){
  document.getElementById("fail-login").innerHTML = "Invalid Login";
}