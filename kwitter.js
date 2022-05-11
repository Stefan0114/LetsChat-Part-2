var firebaseConfig = {
   apiKey: "AIzaSyBEnW51d0oAOd9_G8LIEI8Xq5JYzoD4nzc",
   authDomain: "conversion-calculator-bot-fqxs.firebaseapp.com",
   databaseURL: "https://conversion-calculator-bot-fqxs-default-rtdb.firebaseio.com",
   projectId: "conversion-calculator-bot-fqxs",
   storageBucket: "conversion-calculator-bot-fqxs.appspot.com",
   messagingSenderId: "493440296399",
   appId: "1:493440296399:web:2f5bae19799bd9a3731eba"
 };
 
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function addUser()
{
   user_name = document.getElementById("user_name").value;
   localStorage.setItem("user_name", user_name);
   window.location = "kwitter_room.html";
}