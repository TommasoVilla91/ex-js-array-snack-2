const books = [
    { 
        title: "React Billionaire", 
        pages: 250, 
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    { 
        title: "Advanced JS", 
        pages: 500, 
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    { 
        title: "CSS Secrets", 
        pages: 320, 
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    { 
        title: "HTML Mastery", 
        pages: 200, 
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

////// SNACK 1
const longBooks = books.filter(book => book.pages >= 300);
const longBooksTitles = longBooks.forEach(book => console.log(book.title));

////// SNACK 2
const availableBooks = books.filter(book => book.available === true);
const discountedBooks = availableBooks.map(book => parseInt(book.price) * 0.2);
const fullPricedBook = (Math.round(discountedBooks[0] * 2) / 2)
console.log(fullPricedBook);

////// SNACK 3
const authors = books.map(book => book.author);
const areAuthorsAdults = authors.every(author => author.age >= 18);
authors.sort((a, b) => {
    return areAuthorsAdults ? a.age - b.age : b.age - a.age;
});
console.log(authors);

////// SNACK 4
const { author } = books;
const ages = authors.map(author => author.age);
const agesSum = ages.reduce((acc, a) => {
    return acc + a;
}, 0);
console.log('Avg-age:', (agesSum / ages.length));

