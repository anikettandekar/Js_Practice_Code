function filterUserBooks() {
    const books = [
        { title: "Book One", genre: "Sci-Fi", author: "Author One", publish: 2001 },
        { title: "Book Two", genre: "Science", author: "Author Two", publish: 2004 },
        { title: "Book Three", genre: "History", author: "Author Three", publish: 1995 },
        { title: "Book Four", genre: "Drama", author: "Author Four", publish: 1987 },
        { title: "Book Five", genre: "Novel", author: "Author Five", publish: 2018 },
        { title: "Book Six", genre: "Thriller", author: "Author Six", publish: 2023 },
        { title: "Book Seven", genre: "Sci-Fi", author: "Author Seven", publish: 2003 },
        { title: "Book Eight", genre: "Science", author: "Author Eight", publish: 2093 },
        { title: "Book Nine", genre: "History", author: "Author Nine", publish: 1997 },
        { title: "Book Ten", genre: "Drama", author: "Author Ten", publish: 1997 },
        { title: "Book Eleven", genre: "Novel", author: "Author Eleven", publish: 2015 },
        { title: "Book Twelve", genre: "Thriller", author: "Author Twelve", publish: 2024 },
    ];

    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter Keyword: ', (input) => {
        console.log(`Your Keyword is: ${input}`);

        const filterBooks = books.filter((book) => {
            return book.genre.toLowerCase() === input.toLowerCase();
        });

        console.log(filterBooks);
        rl.close();
    });
}

filterUserBooks()