//Adding this to make my code clear and prevent using undeclared variables
"use strict";

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
function addBookToLibrary() {
  let mybook1 = new Book("Beauty and Beast", "Barbie", "88", "Not yet");
  myLibrary.push(mybook1);
  let mybook2 = new Book("Beauty ", "Curly", "28", "done");
  myLibrary.push(mybook2);
  let mybook3 = new Book("and Beast", "Charlie", "88", "Not yet");
  myLibrary.push(mybook3);
  let mybook4 = new Book("GooseBumps", "R L Sine", "48", "Reading");
  myLibrary.push(mybook4);
}

//Calling the addBookToLibrary function
addBookToLibrary();

//checking the value of myLibrary
console.log(myLibrary);

//function to loop through the array and display each book on the page
function display() {}
