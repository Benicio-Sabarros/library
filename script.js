window.onload(() => {
    const myLibrary = [];
    const addBook = document.querySelector(".add-book");
    const originalForm = document.querySelector(".form-container");
    const originalBook = document.querySelector(".book");

    function Book(author, title, pages, read) {
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
    };

    function addBookToLibrary() {
        const book = new Book();
        const newBook = document.cloneNode(originalBook);
        
    };

   

    addBook.addEventListener("click", () => {

    });
});

// id can be made with crypto.randomUUID()
// every book must have: author, title, number of pages, whether it's been read or not