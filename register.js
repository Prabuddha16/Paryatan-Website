var emailV, nameV, addressV, passwordV;

function readFom() {
  emailV = document.getElementById("email").value;
  nameV = document.getElementById("name").value;
  addressV = document.getElementById("address").value;
  passwordV = document.getElementById("password").value;
  console.log(emailV, nameV, addressV, passwordV);
}

document.getElementById("sign").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("user/" + emailV)
    .set({
      email: emailV,
      name: nameV,
      address: addressV,
      password: passwordV,
    });
  alert("Data Register");
  document.getElementById("email").value = "";
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("password").value = "";
};





