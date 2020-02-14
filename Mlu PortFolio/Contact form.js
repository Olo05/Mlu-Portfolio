 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyBKuPM5Ps0JzgGpY_GVjEC-vsrwRMf7MyE",
    authDomain: "contact-form-d9014.firebaseapp.com",
    databaseURL: "https://contact-form-d9014.firebaseio.com",
    projectId: "contact-form-d9014",
    storageBucket: "contact-form-d9014.appspot.com",
    messagingSenderId: "468556222149",
    appId: "1:468556222149:web:229ad49072bd8aeb00eaac",
    measurementId: "G-8P342YT0RR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contact').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('fname');
  var lname = getInputVal('lname');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(fname, lname, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, lname, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    lname:lname,
    email:email,
    message:message
  });
}