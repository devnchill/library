//Adding this to make my code clear and prevent using undeclared variables
"use strict";

//Global Variables
//This will select the main tag of html inside of body
const MAIN = document.querySelector("main");
//Button which will open the dialog to add books
const ADDBUTTON = document.getElementById("add-button");
//Selects the dialog element from html
const DIALOG = document.getElementById("dialog");
//Will cancel addition of book whilst adding the book
const CANCELBUTTON = document.getElementById("cancel-button");

function clearAllInput() {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("status").value = "Incomplete";
}

function toggleReadingStatus(book, button) {
  book.isRead = !book.isRead;
  book.readingStatus = book.isRead ? "Completed" : "Mark Complete";
  button.textContent = book.isRead ? "Completed" : "Mark Complete";
}

//array where I'll be storing each book. Here each book will be an object, perhaps myLibrary is an array of objects.
const myLibrary = [];

//This function will be storing inputs taken from user to book object
//object constructor
function Book({ title, author, pageCount, readingStatus }) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.readingStatus = readingStatus;
  this.isRead = readingStatus === "Completed";
}

//This function will create objects using above defined object constructors and store them in myLibrary array
function addBookToLibrary({ title, author, pageCount, readingStatus }) {
  let book = new Book({ title, author, pageCount, readingStatus });
  myLibrary.push(book);
}

//this function will remove all books which are being displayed at the moment
function removeIfExists() {
  //selects all book objects which are already being displayed
  let x = document.querySelectorAll(".item-box");
  //e is storing individual books each time
  x.forEach((e) => {
    //removes them
    e.remove();
  });
}

//function to loop through the array and display each book on the page
function displayBooks() {
  //remove all books currently being displayed
  removeIfExists();

  //accessing each object (book) from the array myLibrary
  myLibrary.forEach((item, index) => {
    //creating a container which will store all details about the book
    let itemBox = document.createElement("div");

    //dividing this box into further 4 rows, each row will contain info about the book like author, title, etc.
    //div that will serve as first row of container
    let titleinfo = document.createElement("div");
    titleinfo.textContent = `Title : ${item.title}`;

    //div that will serve as second row of container
    let authorinfo = document.createElement("div");
    authorinfo.textContent = `Author : ${item.author}`;

    //div that will serve as third row of container
    let pagesinfo = document.createElement("div");
    pagesinfo.textContent = `Pages : ${item.pageCount}`;

    //div that will serve as container for buttons
    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    //This button will help to mark whether it's done reading the whole book or not
    let statusButton = document.createElement("button");
    //here item.readingStatus stores the reading status of book (current item) from myLibrary
    statusButton.textContent =
      item.readingStatus === "Completed" ? "Completed" : "Mark Complete";
    //Will toggle between done or not reading complete book
    statusButton.addEventListener("click", () => {
      toggleReadingStatus(item, statusButton);
    });

    //button which will remove that particular book
    let removeButton = document.createElement("button");
    removeButton.classList.add("removeParticularBook");
    removeButton.textContent = "REMOVE";
    removeButton.dataset.index = index; // Store index for removal

    //remove that specific book and call displayBooks function
    removeButton.addEventListener("click", function (e) {
      const indexToRemove = e.target.dataset.index; // Get the index from dataset
      myLibrary.splice(indexToRemove, 1); // Remove the book
      displayBooks(); // Refresh the list
    });

    //Adding class "item-box" to container element which contains details about book
    itemBox.classList.add("item-box");

    //Adding all its children
    itemBox.appendChild(titleinfo);
    itemBox.appendChild(authorinfo);
    itemBox.appendChild(pagesinfo);
    itemBox.appendChild(buttonContainer);
    buttonContainer.appendChild(statusButton);
    buttonContainer.appendChild(removeButton);

    //adding container inside main
    MAIN.appendChild(itemBox);
  });
}

//prepopulating with books
addBookToLibrary({
  title: "Title 1",
  author: "Author 1",
  pageCount: 100,
  readingStatus: "Completed",
});
addBookToLibrary({
  title: "Title 2",
  author: "Author 2",
  pageCount: 200,
  readingStatus: "Completed",
});
addBookToLibrary({
  title: "Title 3",
  author: "Author 3",
  pageCount: 300,
  readingStatus: "Completed",
});
addBookToLibrary({
  title: "Title 4",
  author: "Author 4",
  pageCount: 400,
  readingStatus: "Completed",
});
displayBooks();

//adding event listener to add button so that form appears when user clicks on it
ADDBUTTON.addEventListener("click", () => {
  DIALOG.showModal(); // Show the dialog when the add button is clicked
});

//adding event listener to create button to add a book when the form is submitted
document.getElementById("create").addEventListener("click", (event) => {
  event.preventDefault();
  //Storing input values from user about books
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pageCount = parseInt(document.getElementById("pages").value);
  let readingStatus = document.getElementById("status").value;

  //checking if all parameters are present or not and stopping if it isn't
  if (!title || !author || !pageCount || !readingStatus || pageCount <= 0) {
    console.log("Some fields are empty or invalid input");
    alert("Some fields are empty or invalid input");
    return; // Stop if any field is empty
  }

  //Adding book created to the library
  //addBookToLibrary(title, author, pageCount, readingStatus);
  addBookToLibrary({
    title: title,
    author: author,
    pageCount: pageCount,
    readingStatus: readingStatus,
  });

  //display the book on main section of page
  displayBooks();

  //clearing all input value once a book is created and stored
  clearAllInput();
  DIALOG.close();
});

//adding addEventListener to CANCELBUTTON so that form is closed on clicking cancel
CANCELBUTTON.addEventListener("click", () => {
  //clearing form input if user clicks cancel button
  clearAllInput();
  DIALOG.close();
});
