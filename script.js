//Adding this to make my code clear and prevent using undeclared variables
"use strict";

//Global Variables
let buttonIndex = 0;

//This will select the main tag of html inside of body
const MAIN = document.querySelector("main");
const ADDBUTTON = document.getElementById("add-button");
const DIALOG = document.getElementById("dialog");
const CANCELBUTTON = document.getElementById("cancel-button");

//array where i'll be storing each book. Here each book will be an object , perhaps myLibrary is an array of objects.
const myLibrary = [];

//This function will be storing inputs taken from user to book object
function Book(title, author, noOfPages, readingStatus) {
  this.title = title;
  this.author = author;
  this.noOfPages = noOfPages;
  this.readingStatus = readingStatus;
}

//This function will create objects using above defined object constructors and store them in myLibrary array
function addBookToLibrary(title, author, noOfPages, readingStatus) {
  let book = new Book(title, author, noOfPages, readingStatus);
  myLibrary.push(book);
}
function removeIfExists() {
  //selects all bookobjects which are already being displayedf
  let x = document.querySelectorAll(".item-box");
  x.forEach((e) => {
    //removes them
    e.remove();
  });
}
//function to loop through the array and display each book on the page
function displayBooks() {
  removeIfExists();

  //data-attribute for index belongs to whole number
  buttonIndex = 0;

  //accesing each object(book) from the array myLibrary
  myLibrary.forEach((item) => {
    //creating a container which will store all details about the book
    let itemBox = document.createElement("div");

    //dividing this box into further 4 rows each row will contain info about book like author title ect
    //div that will serve as first row of container
    let titleinfo = document.createElement("div");
    titleinfo.textContent = `Title : ${item.title}`;

    //div that will serve as first row of container
    let authorinfo = document.createElement("div");
    authorinfo.textContent = `Author : ${item.author}`;

    //div that will serve as third row of container
    let pagesinfo = document.createElement("div");
    pagesinfo.textContent = `Pages : ${item.noOfPages}`;

    //div that will serve as fourth row of container
    let statusinfo = document.createElement("div");
    statusinfo.textContent = `Status : ${item.readingStatus}`;

    //button which will remove that particular book
    let removeButton = document.createElement("button");
    removeButton.classList.add("removeParticularBook");
    removeButton.textContent = "REMOVE";
    removeButton.dataset.index = buttonIndex;

    removeButton.addEventListener("click", function (e) {
      let buttonId = e.target.dataset.index;
      myLibrary.splice(buttonId, 1);
      displayBooks();
    });
    buttonIndex++;

    //Adding class "item-box" to container element which contains details about book
    itemBox.classList.add("item-box");

    //Adding all it's children
    itemBox.appendChild(titleinfo);
    itemBox.appendChild(authorinfo);
    itemBox.appendChild(pagesinfo);
    itemBox.appendChild(statusinfo);
    itemBox.appendChild(removeButton);

    //adding container inside main
    MAIN.appendChild(itemBox);
  });
}

//adding event listener to add button so that form appears when user clicks on it
ADDBUTTON.addEventListener("click", () => {
  DIALOG.showModal();
});

//adding event listener to add button so that form appears when user clicks on it
document.getElementById("create").addEventListener("click", () => {
  //Storing input values from user about books
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let noOfPages = document.getElementById("pages").value;
  let readingStatus = document.getElementById("status").value;

  //checking if all parameters are present or not and stopping if it isn't
  if (!title || !author || !noOfPages || !readingStatus) {
    console.log("Some fields are empty");
    return; // Stop if any field is empty
  }

  //Adding book created to the library
  addBookToLibrary(title, author, noOfPages, readingStatus);

  //display the book on main section of page
  displayBooks();

  //clearing all input value once it's book is created and stored there
document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.getElementById("status").value = "";
  DIALOG.close();
});

//adding addEventListener to CANCELBUTTON so that form is closed on clicking cancel
CANCELBUTTON.addEventListener("click", () => {
  DIALOG.close();
});
