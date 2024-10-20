//Adding this to make my code clear and prevent using undeclared variables
"use strict";

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

//function to clear all input values once user clicks on cancel or close button
//function to loop through the array and display each book on the page
function displayBooks() {
  //accesing each object(book) from the array myLibrary
  myLibrary.forEach((item) => {
    console.log(item);
    //creating a container which will store all details about the book
    let itemBox = document.createElement("div");

    //dividing this box into further 4 rows each row will contain info about book like author title ect
    //div that will serve as first row of container
    let titleinfo = document.createElement("div");
    titleinfo.textContent = `Title : ${item.title}`;

    //div that will serve as first row of container
    let authorinfo = document.createElement("div");

    //div that will serve as second row of container
    authorinfo.textContent = `Author : ${item.author}`;

    //div that will serve as third row of container
    let pagesinfo = document.createElement("div");
    pagesinfo.textContent = `Pages : ${item.noOfPages}`;

    //div that will serve as fourth row of container
    let statusinfo = document.createElement("div");
    statusinfo.textContent = `Status : ${item.readingStatus}`;

    //Adding class "item-box" to container element which contains details about book
    itemBox.classList.add("item-box");

    //Adding all it's children
    itemBox.appendChild(titleinfo);
    itemBox.appendChild(authorinfo);
    itemBox.appendChild(pagesinfo);
    itemBox.appendChild(statusinfo);

    //adding container inside main
    MAIN.appendChild(itemBox);
  });
}

displayBooks();

//adding event listener to add button so that form appears when user clicks on it
ADDBUTTON.addEventListener("click", () => {
  DIALOG.showModal();
});

//adding event listener to add button so that form appears when user clicks on it
document.getElementById("submit-button").addEventListener("click", () => {

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
  addBookToLibrary(title, author, noOfPages, readingStatus);
  displayBooks();
  title = "";
  author = "";
  noOfPages = "";
  readingStatus = "";

  DIALOG.close();
});

//adding addEventListener to CANCELBUTTON so that form is closed on clicking cancel
CANCELBUTTON.addEventListener("click", () => {
  DIALOG.close();
});
