



   
 

// firebase.initializeApp(firebaseConfig);

// // Reference to the Firebase Realtime Database
// const db = firebase.database();
// const auth = firebase.auth();

// // Function to create user using Firebase authentication
// function createUser() {
//   var email = document.getElementById("email").value;
//   var password = document.getElementById("password").value;

//   auth.createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//           // User registration successful
//           var user = userCredential.user;
//           console.log("User registration successful:", user);

//           // You can add your logic here, e.g., redirect to a different page
//       })
//       .catch((error) => {
//           // Handle registration errors
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           console.error("User registration error:", errorCode, errorMessage);
//           alert("User registration failed. Please try again.");
//       });
// }

  


function toggleAddBookForm() {
  var addBookFormContainer = document.getElementById('addBookFormContainer');
  addBookFormContainer.style.display = addBookFormContainer.style.display === 'none' ? 'block' : 'none';
}

// //   Refresh books after hiding the form
//   if (addBookFormContainer.style.display === 'none') {
//       refreshBooks();
//   }
// }

// function addBook() {
//   var bookTitle = document.getElementById('bookTitle').value;
//   var authorName = document.getElementById('authorName').value;
//   var imageUrl = document.getElementById('imageUrl').value;

//   // Save the book to Firebase
//   db.collection("books").add({
//       title: bookTitle,
//       author: authorName,
//       imageUrl: imageUrl
//   })
//   .then(function(docRef) {
//       console.log("Book added with ID: ", docRef.id);
//   })
//   .catch(function(error) {
//       console.error("Error adding book: ", error);
//   });

//   // Clear the form (optional)
//   document.getElementById('addBookForm').reset();

//   // Hide the form (optional)
//   document.getElementById('addBookFormContainer').style.display = 'none';
// }

// function refreshBooks() {
//   var bookListContainer = document.querySelector('.book-list');
//   bookListContainer.innerHTML = '';

//   db.collection("books").get().then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//           var bookElement = document.createElement('div');
//           bookElement.classList.add('book');

//           var bookImage = document.createElement('img');
//           bookImage.src = doc.data().imageUrl;
//           bookImage.alt = doc.data().title;

//           var bookTitle = document.createElement('h4');
//           bookTitle.textContent = doc.data().title;

//           var bookAuthor = document.createElement('p');
//           bookAuthor.textContent = 'Author: ' + doc.data().author;

//           bookElement.appendChild(bookImage);
//           bookElement.appendChild(bookTitle);
//           bookElement.appendChild(bookAuthor);

//           bookListContainer.appendChild(bookElement);
//       });
//   });
// }


 function toggleAuthForm() {
    var authContainer = document.getElementById('authContainer');
    authContainer.style.display = (authContainer.style.display === 'none') ? 'block' : 'none';}

// Add this code in your authentication.js file

// Wait for the DOM to be fully loaded

// Rest of your authentication.js code...







  
  
  
  
  