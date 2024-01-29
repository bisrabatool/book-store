 
  // script.js

// Initialize Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference to the Firebase Realtime Database
  const db = firebase.database();
  
  // Function to toggle the display of the authentication form
  function toggleAuthForm() {
      var authContainer = document.getElementById("authContainer");
      authContainer.style.display = (authContainer.style.display === "none") ? "block" : "none";
  }
  
  // Function to authenticate the user using Firebase
  function authenticateUser() {
      var email = document.getElementById("email").value;
      var password = document.getElementById("password").value;
  
      firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
              // Authentication successful
              var user = userCredential.user;
              console.log("Authentication successful for user:", user);
              // You can add your logic here, e.g., redirect to a different page
          })
          .catch((error) => {
              // Handle authentication errors
              var errorCode = error.code;
              var errorMessage = error.message;
              console.error("Authentication error:", errorCode, errorMessage);
              alert("Authentication failed. Please check your credentials.");
          });
  }
  
  // Function to add a book (dummy function, replace with your book addition logic)
  function addBook() {
      // Your book addition logic here
      console.log("Adding a book...");
  }
  
  // Function to toggle the display of the add book form
  function toggleAddBookForm() {
      var addBookFormContainer = document.getElementById("addBookFormContainer");
      addBookFormContainer.style.display = (addBookFormContainer.style.display === "none") ? "block" : "none";
  }
  
  // Add an event listener to the login button
  document.getElementById("loginButton").addEventListener("click", authenticateUser);
  