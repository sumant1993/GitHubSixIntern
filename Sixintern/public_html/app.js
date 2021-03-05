$( document ).ready(function() {
console.log( "ready!" );
// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBSf-Z6LR-NuH2f4SxcUiL8gM1CIyOrlgE",
    authDomain: "firstproject-4ed6f.firebaseapp.com",
    projectId: "firstproject-4ed6f",
    storageBucket: "firstproject-4ed6f.appspot.com",
    messagingSenderId: "334748004817",
    appId: "1:334748004817:web:9e5ba1583bcf684036f0f0"
};
firebase.initializeApp(firebaseConfig);
$('#GoogleSignIn').click(function () {
console.log("hello world");
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var credential = result.credential;
    console.log(credential);
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;

  }).catch((error) => {
 
    var errorCode = error.code;
    var errorMessage = error.message;
 
    var email = error.email;
    console.log(email);
    var credential = error.credential;
    // ...
  });
        
 });
      

$('#myForm').submit(printObj);
function printObj(e) {
   e.preventDefault();
   var email = $('#email').val();
   var password=$('#password').val();
   var confirmPassword=$('#password_confirm').val();
  var obj = {
    email:email ,
    password: password,
    confirmPassword:confirmPassword
};
  
firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
  .then(() => {
     console.log("in then"); 
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });  
  
  
  
}


 

});