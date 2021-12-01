var nameV, emailV, phoneV, messageV;
function readFom() {
    nameV = document.getElementById("name").value;
    emailV = document.getElementById("email").value;
    phoneV = document.getElementById("phone").value;
    messageV = document.getElementById("message").value;
    console.log(emailV, nameV, phoneV,messageV);
  }
  
  document.getElementById("submit").onclick = function (){
    readFom();
    
    firebase
      .database()
      .ref("contact/" + nameV)
      .set({
        name: nameV,
        email: emailV ,
        phone:phoneV,
        message:messageV,
      });
    alert("Your message has been sent.");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
  
  };

  function isNumber(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
 
         return true;
      }