var emailV, passwordV;

function readFom() {
  emailV = document.getElementById("email").value;
  passwordV = document.getElementById("password").value;
  console.log(emailV, passwordV);
}

document.getElementById("login").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("user/" + emailV)
    .set({
      email: emailV,
      password: passwordV,
    });
  alert("Data Login");
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
};





