document.addEventListener("DOMContentLoaded", function () {
  

  // Auto slider script
  // Same source:
  // Coding snow on youtube:
  // https://www.youtube.com/watch?v=0wvrlOyGlq0 
  var counter = 1;
  setInterval(function(){
    document.getElementById('radio' + counter).checked = true
    counter++;
    if(counter > 4){
      counter = 1;
    }
  }, 7000);
      
  });
  

function validate(){
  var zipCode = $("#zipcode").val();

  // Further validation for if zip is number 
  // since we're allowing text inputs (for styling purposes)
  if (isNaN(zipCode)){
    alert("Zip code must be a number");
    return false;
  }

  if (zipCode.toString().length != 5){
      alert("Wrong length zip code");
      return false;
  }
  return true;
}


  



  



// function showDescription(description){
//     $("#description").html("Description: " + description);
// }

// function hideDescription(){
//     $("#description").html("")
// }

// function validate(){
//     var textDob = $("#txtDate").val();
//     var dob = new Date(textDob);
//     if (dob >= new Date()){
//         alert("Date of birth is not valid. Date has to be before today.");
//         return false;
//     }

//     var phoneNum = $("#phone").val();
//     if (phoneNum.length != 10 || !(isNaN(phone))){
//         alert("Phone number is invalid");
//         return false;
//     }
// }