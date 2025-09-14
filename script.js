window.onload = function() {
    const myLibrary = [
        {title: "1984",
        author: "George Orwell",
        pages: 254,
        read: true,
        id: crypto.randomUUID()}
    ];
    const books = document.querySelector(".books-container");
    const addBook = document.querySelector(".add-book");
    const originalForm = document.querySelector(".form-container");
    const originalBook = document.querySelector(".book-container");
    const readButton = document.querySelector(".read-button");
    const removeButton = documnet.querySelector(".remove-button");

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
    };

    function createBook(event){
        event.preventDefault();
        const formData = new FormData(this);
        const book = new Book(
            formData.get("title"),
            formData.get("author"),
            formData.get("pages"),
            formData.get("read")
        );
        myLibrary.push(book);
        this.remove();
    }

    function displayBook() {
        const newBook = originalBook.cloneNode(true);
        const title = newBook.querySelector(".title");
        const author = newBook.querySelector(".author");
        const pages = newBook.querySelector(".pages");
        const read = newBook.querySelector(".read");
        const id = newBook.querySelector(".id");
        title.textContent = this.title;
        author.textContent = this.author;
        pages.textContent = this.pages;
        read.textContent = this.read ? "Yes" : "No";
        id.textContent = this.id;
        newBook.dataset.indexNumber = this.id;
        newBook.style.display = "block";

        books.appendChild(newBook);
    };

    function displayBooks() {
        myLibrary.forEach(displayBook);
    };
   

    addBook.addEventListener("click", () => {
        const newForm = originalForm.cloneNode(true);
        newForm.addEventListener("submit", createBook);
        newForm.style.display = "block";
        books.appendChild(newForm);
    });

    displayBooks();
};

// id can be made with crypto.randomUUID()
// every book must have: author, title, number of pages, whether it's been read or not
// Book() => constructor of book object
// createBook() => take form inputs and use Book() constructor to create an object and then push it to the myLibrary array
// displayBook() => create element and append it to the list of divs