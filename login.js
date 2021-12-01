function login()
{   
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email,password)
    firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        window.location.href = "gallery.html";
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
    });
}