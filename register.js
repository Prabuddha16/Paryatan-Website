var nameV, emailV, phoneV, messageV;
function readFom() {
    nameV = document.getElementById("name").value;
    addressV = document.getElementById("address").value;
    console.log( nameV, addressV);
  }
  
  function insert(){
    readFom();
    
    firebase
      .database()
      .ref("user/" + nameV)
      .set({
        name: nameV,
        address:addressV,
      });
      alert("Your message has been sent.");
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
  
  };
function signup(){
  alert("Successfully Registered");
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  console.log(email,password)
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
    window.location.href = "login.html"
  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage);
  });
}
