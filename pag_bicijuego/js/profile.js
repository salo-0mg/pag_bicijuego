var jwt = localStorage.getItem("jwt");
if (jwt == null) {
  window.location.href = './login.html'
}

function loadUser() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://bicijuego.online:3001/api/user");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.setRequestHeader("x-access-token", jwt);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);

        const user = document.getElementById("username");
        const name = document.getElementById("nombres");
        const birthday = document.getElementById("fecha_nacimiento");
        const email = document.getElementById("email");
        const guias = document.getElementById("guias_completadas");
        const high_score = document.getElementById("high_score");

        user.textContent = "Username: " + objects["username"];
        name.textContent = "Nombre: " + objects["nombres"] + " " + objects["apellidos"];
        email.textContent = "Correo: " + objects["email"];
        birthday.textContent = "Fecha de nacimiento: " + objects["fecha_nacimiento"].split("T")[0];
        guias.textContent = objects["guias_completadas"].length;
        high_score.textContent = objects["high_score"];

      }
    }
  };

loadUser();

function logout() {
  localStorage.removeItem("jwt");
  window.location.href = './login.html'
}