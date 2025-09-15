window.onload = function() {
    const myLibrary = [
    ];
    const books = document.querySelector(".books-container");
    const addBook = document.querySelector(".add-book");
    const originalForm = document.querySelector(".form-container");
    const originalBook = document.querySelector(".book-container");

    function Book(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
    };

    function displayBook(book) {
        const newBook = originalBook.cloneNode(true);
        const title = newBook.querySelector(".title");
        const author = newBook.querySelector(".author");
        const pages = newBook.querySelector(".pages");
        const read = newBook.querySelector(".read");
        const id = newBook.querySelector(".id");
        const readButton = newBook.querySelector(".read-button");
        const removeButton = newBook.querySelector(".remove-button");
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        read.textContent = book.read ? "Yes" : "No";
        id.textContent = book.id;
        newBook.dataset.indexNumber = book.id;
        newBook.style.display = "block";

        readButton.addEventListener("click", () => {
            book.read = !book.read;
            read.textContent = book.read ? "Yes" : "No";
        });

        removeButton.addEventListener("click", () => {
            newBook.remove();
            const index = myLibrary.indexOf(book);
            if(index > -1) myLibrary.splice(index, 1);
            displayBooks();
        });

        books.appendChild(newBook);
    };

    function displayBooks() {
        books.innerHTML = "";
        myLibrary.forEach(displayBook);
    };


   

    addBook.addEventListener("click", () => {
        if(!document.querySelector(".new-form")){
            const newFormContainer = originalForm.cloneNode(true);
            const newForm = newFormContainer.querySelector("form");
            newForm.classList.add("new-form")
            newForm.addEventListener("submit", function(event) {
                event.preventDefault();
                const formData = new FormData(this);
                const book = new Book(
                formData.get("title"),
                formData.get("author"),
                formData.get("pages"),
                formData.get("read")
                );
                myLibrary.push(book);
                newFormContainer.remove();
                displayBooks();
            });
            newFormContainer.style.display = "block";
            books.appendChild(newForm);
        }
        console.log("the button")
    });

    displayBooks();
};

// id can be made with crypto.randomUUID()
// every book must have: author, title, number of pages, whether it's been read or not
// Book() => constructor of book object
// createBook() => take form inputs and use Book() constructor to create an object and then push it to the myLibrary array
// displayBook() => create element and append it to the list of divs