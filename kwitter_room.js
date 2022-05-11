
var firebaseConfig = {
      apiKey: "AIzaSyA3cczsGf0E0fl17GsnhuwufVlU7isxdMY",
      authDomain: "social-website-kwitter-b784b.firebaseapp.com",
      databaseURL: "https://social-website-kwitter-b784b-default-rtdb.firebaseio.com",
      projectId: "social-website-kwitter-b784b",
      storageBucket: "social-website-kwitter-b784b.appspot.com",
      messagingSenderId: "181973957011",
      appId: "1:181973957011:web:712a0c06715b508b565066"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
