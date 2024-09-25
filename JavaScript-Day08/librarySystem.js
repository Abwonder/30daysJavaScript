const library = {
    books: [],
    
    addBook: function(title, author, year) {
        const book = {
            title: title,
            author: author,
            year: year
        };
        this.books.push(book);
        console.log(`Book added: ${title}`);
    },
    
    listBooks: function() {
        console.log("Library Books:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} by ${book.author} (${book.year})`);
        });
    },
    
    findBookByTitle: function(title) {
        const book = this.books.find(book => book.title === title);
        if (book) {
            console.log(`Found: ${book.title} by ${book.author} (${book.year})`);
        } else {
            console.log("Book not found.");
        }
    }
};

// Example Usage
library.addBook("The Great Gatsby", "F. Scott Fitzgerald", 1925);
library.addBook("1984", "George Orwell", 1949);
library.listBooks();
library.findBookByTitle("1984");


