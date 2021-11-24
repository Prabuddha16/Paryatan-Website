var emailV, passwordV,nameV,emailV,numberV,subjectV,;

function readFom() {
  emailV = document.getElementsByClassName("box").value;
  passwordV = document.getElementsByClassName("box").value;
  console.log(emailV, passwordV);
}

document.getElementsByClassName("btn").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("users/" + emailV)
    .set({
      email: emailV,
      password: passwordV,
    });
  alert("Data login");
  document.getElementsByClassName("box").value = "";
  document.getElementsByClassName("box").value = "";
};

