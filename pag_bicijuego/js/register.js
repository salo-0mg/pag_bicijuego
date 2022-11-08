var jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = './succes_register.html'
}
function register() {

  let birthday = document.getElementById("birthday").value;
  let birthdayCheck = new Date(birthday.split("-").join("/"));
  let maxYear = new Date().getFullYear()-12;
  let maxDate = new Date(new Date().setFullYear(maxYear, new Date().getMonth(), new Date().getDate()));

  if(birthdayCheck<=maxDate){

    const username = document.getElementById("username").value;
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const birthday = document.getElementById("birthday").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://bicijuego.online:3001/api/auth/register");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
      "username": username,
      "nombres" : name,
      "apellidos" : lastname,
      "fecha_nacimiento" : birthday,
      "email" : email,
      "password": password
    }));
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        const objects = JSON.parse(this.responseText);
        if (this.status == '200') {
          localStorage.setItem("jwt", objects['token']);
          Swal.fire({
            text: 'Registro Exitoso',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              localStorage.removeItem("jwt");
              window.location.href = './succes_register.html';
            }
          });
          }else{
              Swal.fire({
              text: 'Error',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
      }
    };
    
  }else{
    const mensaje = document.getElementById("form-birthday");
    const mensajeHtml = document.createElement("span");
    mensajeHtml.textContent = "Debes ser mayor de 12 años para registrarte"
    mensaje.appendChild(mensajeHtml);
  }
  return false;
}