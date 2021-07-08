  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  
  var firebaseConfig = {
    apiKey: "AIzaSyDljAom0tOknpek18t0XTfzQ4QkLEGbRYM",
    authDomain: "led-project-eb2d5.firebaseapp.com",
    projectId: "led-project-eb2d5",
    storageBucket: "led-project-eb2d5.appspot.com",
    messagingSenderId: "732803747020",
    appId: "1:732803747020:web:540e5747e6eb5095bd0669",
    measurementId: "G-7DNQ7QNCKQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


//   function writedata(){
//       firebase.database().ref("currentColor").set({current: document.getElementById("current").value});
//   }

//  var color = document.getElementById("current");


 var blueC = "Blue";
 var greenC = "Green";
 var redC = "Red";
 var yellowC = "Yellow";
 var purpleC = "Purple";
 var cyanC = "Cyan";
 var whiteC = "White";
 var offC = "Off";

//gets the current color from firebase
function currentColor(){

  // var currents;
  // currents = firebase.database().ref("currentColor").get("current");
  // console.log(currents);

    // once() method
    firebase.database().ref('currentColor').child("current").on('value',(snap)=>{
      console.log(snap.val());
      document.getElementById("current").value = snap.val();
    });

}

//set the current color to blue
function blue(){
    document.getElementById("current").value = blueC;
    firebase.database().ref("currentColor").set({current: blueC});
    console.log(blueC);
}
//set the current color to red
function red(){
    document.getElementById("current").value = redC;
    firebase.database().ref("currentColor").set({current: redC});
    console.log(redC);
}
//set the current color to green
function green(){
    document.getElementById("current").value = greenC;
    firebase.database().ref("currentColor").set({current: greenC});
    console.log(greenC);
}
//set the current color to purple
function purple(){
  document.getElementById("current").value = purpleC;
  firebase.database().ref("currentColor").set({current: purpleC});
  console.log(purpleC);
}
//set the current color to cyan
function cyan(){
  document.getElementById("current").value = cyanC;
  firebase.database().ref("currentColor").set({current: cyanC});
  console.log(cyanC);
}
//set the current color to yellow
function yellow(){
  document.getElementById("current").value = yellowC;
  firebase.database().ref("currentColor").set({current: yellowC});
  console.log(yellowC);
}
//set the current color to white
function white(){
  document.getElementById("current").value = whiteC;
  firebase.database().ref("currentColor").set({current: whiteC});
  console.log(whiteC);
}
//set the current color to off
function off(){
    document.getElementById("current").value = offC;
    firebase.database().ref("currentColor").set({current: offC});
    console.log(offC);
}
