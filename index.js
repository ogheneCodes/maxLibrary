const promp = require("prompt-sync")({sigint: true});

class Library {
  constructor(books) {
    this.books = books;
  }

  // Donate book functionality
  donateBook(book) {
    this.books.push(book);
    return "You have successfuly donated a book!"
  }

  // Borrow book functionality
  borrowBook(genre) {
    const bookIndex = this.books.findIndex((book) => book.genre.toLowerCase() === genre);
    if (bookIndex >= 0) {
      const book = this.books.splice(bookIndex, 1);
      return `You have successfuly borrowed a book`;
    } else {
      return "There is no book for your genre";
    }
  }

  // Return book functionality
  returnBook(book) {
    this.books.push(book);
    return "Book successfuly returned to the libry";
  }

  // Gets the whole books
  viewBook() {
    return this.books;
  }
}

class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
  }
}

const book1 = new Book("Modern Biology", "Jakes kay", "Biology");
const book2 = new Book("Accounting in a nutshell", "Mkay Blaid", "Art");
const book3 = new Book("Advanced Chemistry", "Max Ebobo", "Chemistry");

const library = new Library([book1, book2, book3]);

const runLibry = () => {
  console.log("Welcome to UNN Library\n");
  console.log("Do you want to borrow, return, or donate book?");

  let persist = true
  while(persist) {
    let answer = input()

    if (answer.toLowerCase() === "donate") {
      const title = prompt("enter title of the book");
      const author = prompt("enter author of the book");
      const genre = prompt("enter genre of the book");
      const newbook = {
        title,
        author,
        genre,
      };
      console.log(library.donateBook(newbook));
    } else if (answer.toLowerCase() === "borrow") {
      const genre = prompt("Enter the genre of book you want to borrow");
      console.log(library.borrowBook(genre.toLowerCase()));
    } else if (answer.toLowerCase() === "return") {
      //to return library book
      const title = prompt("enter title of the book");
      const author = prompt("enter author of the book");
      const genre = prompt("enter genre of the book");
      const newbook = {
        title,
        author,
        genre,
      };
      //for viewing library books
      console.log(library.returnBook(newbook));
    } else if (answer.toLowerCase() === "view") {
      console.log(library.viewBook());
    } else if(answer.toLowerCase() === "exit") {
      console.log("Exiting from libry...");
      console.log("Exited from libry!");
      persist = false;
    } else {
      console.log("Please enter a valid response");
    }
  }
  
};

function input() {
  return prompt(
    "If you want to borrow book - Type 'borrow'\nIf you want to return book - Type 'return'\nIf you want to donate book - Type 'donate'\nIf you want to view books - Type 'view'\nIf you want to exit library - Enter 'exit'"
  );
}

runLibry();