//Adding this to make my code clear and prevent using undeclared variables
"use strict";

//Global Variables
//This will select the main tag of html inside of body
let main = document.querySelector("main");

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

//Calling the addBookToLibrary function with desired arguments to create books for now
addBookToLibrary(1, 1, 1, 1);
addBookToLibrary(2, 2, 2, 2);
addBookToLibrary(3, 3, 3, 3);
addBookToLibrary(4, 4, 4, 4);

//function to loop through the array and display each book on the page
function displayBooks() {
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
    main.appendChild(itemBox);
  });
}
displayBooks();
