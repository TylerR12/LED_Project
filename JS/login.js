var fireUser;
var firePassword;

function load(){

    var user = document.getElementById("username");
    var pass = document.getElementById("password");
    user.disabled = true;
    pass.disabled = true;



      // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfigs = {
    apiKey: "AIzaSyDljAom0tOknpek18t0XTfzQ4QkLEGbRYM",
    authDomain: "led-project-eb2d5.firebaseapp.com",
    projectId: "led-project-eb2d5",
    storageBucket: "led-project-eb2d5.appspot.com",
    messagingSenderId: "732803747020",
    appId: "1:732803747020:web:540e5747e6eb5095bd0669",
    measurementId: "G-7DNQ7QNCKQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfigs);
  firebase.analytics();


  firebase.database().ref('Account').child("Username").on('value',(snap)=>{
    //console.log(snap.val());
    fireUser = snap.val();
  });

  firebase.database().ref('Account').child("Password").on('value',(snap)=>{
    //console.log(snap.val());
    firePassword = snap.val();
  });
}

function visable(){
    var login = document.getElementById("container");
    var BTN = document.getElementById("welcome");
    var BTNC = document.getElementById("create");


    var user = document.getElementById("username");
    var pass = document.getElementById("password");
    user.disabled = false;
    pass.disabled = false;

    /*buttons are disabled*/
    BTN.disabled = true;
    BTNC.disabled = true;

    /* buttons are hidden and create a account comes out */
    login.style.opacity = "100%";
    BTN.style.opacity = "0%";
    BTNC.style.opacity = "0%";

}

function visableCreate(){
    var create = document.getElementById("createcon");
    var BTN = document.getElementById("create");
    var BTNW = document.getElementById("welcome");

    var user = document.getElementById("usernameCr");
    var pass = document.getElementById("passwordCr");
    user.disabled = false;
    pass.disabled = false;

    /*buttons are disabled*/
    BTN.disabled = true;
    BTNW.disabled = true;

    /* buttons are hidden and create a account comes out */
    create.style.opacity = "100%";
    BTN.style.opacity = "0%";
    BTNW.style.opacity = "0%";
    create.style.zIndex = "1000";

}

//for submitting login
function submits(){

    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var submitsBTN = document.getElementById("submitsBTN");
    var username_check = false;
    var password_check = false;

    if (username.value == fireUser) {
        console.log("valid username");
        var username_check = true;
    } else {
        console.log("invalid username");
    }
    
    
    if (password.value == firePassword) {
        console.log("valid password");
        var password_check = true;
    } else {
        console.log("invalid password");
    }
    
    if (username_check == true && password_check == true) {
        console.log("success");
        console.log("---------");
        window.open("index.html");
        window.location.reload();
    } else {
        console.log("failure");
        console.log("---------");
        alert("Invalid username and/or password");
        window.location.reload();
        return false;
    }
}






// // for submitting a new account
// function submitsC(){
// /*
//     var usernameCr = document.getElementsByClassName("usernameCr");
//     var passwordCr = document.getElementsByClassName("passwordCr");*/
//     var usernameCr = document.getElementById("usernameCr");
//     var passwordCr = document.getElementById("passwordCr");
//     var submitsBTN = document.getElementById("submitsBTN");
//     var usernameCR_check = true;
//     var passwordCR_check = true;

//     if (usernameCr.value.length < 6) {
//         console.log("invalid username");
//         var usernameCR_check = false;
//     } else {
//         console.log("valid username");
//     }
    
    
//     if (passwordCr.value.length < 6) {
//         console.log("invalid password");
//         var passwordCR_check = false;
//     } else {
//         console.log("valid password");
//     }
    
//     if (usernameCR_check == true && passwordCR_check == true) {
//         console.log("success");
//         console.log("---------");
//         window.open("login_success.html");
//         window.location.reload();
//     } else {
//         console.log("failure");
//         console.log("---------");
//         alert("Username and password min 6 characters");
//         window.location.reload();
//         return false;
//     }
// }

