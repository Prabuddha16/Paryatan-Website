$(document).ready(function(){

    $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('load scroll',function(){
  
      $('.fa-bars').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 30){
        $('header').addClass('header-active');
      }else{
        $('header').removeClass('header-active');
      }
  
      $('section').each(function(){
        var id = $(this).attr('id');
        var height = $(this).height();
        var offset = $(this).offset().top - 200;
        var top = $(window).scrollTop();
        if(top >= offset && top < offset + height){
          $('.navbar ul li a').removeClass('active');
          $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
        }
      });
  
    });
  
  
  });
  var nameV,locationV,peopleV,arrivalV,leaveV,phoneV;
  function readFom() {
    nameV = document.getElementById("name").value;
    locationV = document.getElementById("place").value;
    peopleV = document.getElementById("people").value;
    arrivalV = document.getElementById("arrival").value;
    leaveV = document.getElementById("leave").value;
    leaveV = document.getElementById("phone").value;
    phoneV = document.getElementById("phone").value;
    console.log( nameV,locationV,peopleV,arrivalV,leaveV,phoneV);
  }
  
  function insert(){
    readFom();
    
    firebase
      .database()
      .ref("Book/" + nameV)
      .set({
        name: nameV,
        location:locationV,
        people:peopleV,
        arrival:arrivalV,
        leave:leaveV,
        phone:phoneV,
      });
    
    document.getElementById("name").value = "";
    document.getElementById("place").value = "";
    document.getElementById("people").value = "";
    document.getElementById("arrival").value = "";
    document.getElementById("leave").value = "";
    document.getElementById("phone").value = "";
    alert("You have succesfully Booked your journey.Booking Details will be sent on contact number provided");
};


function isNumber(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;
 
         return true;
      }