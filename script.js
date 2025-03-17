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
const longBooksTitles = longBooks.map(book => book.title);
longBooksTitles.forEach(title => console.log(title));

////// SNACK 2 (corretto il calcolo prezzo nel map)
const availableBooks = books.filter(book => book.available);
const discountedBooks = availableBooks.map(book => {
    const price = parseFloat(book.price.replace('€', ''));
    const discountedPrice = (price * 0.8).toFixed(2);
    return {
        ...book,
        price: `${discountedPrice}€`
    }
});
const fullPricedBook = discountedBooks.find(book => {
    const price = parseFloat(book.price.replace('€', ''));
    return price % 1 === 0;
})
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

////// SNACK 5
// async function fetchJson(url) {
//     const response = await fetch(url);
//     const obj = await response.json();
//     return obj; 
// }

// async function getBooks(ids) {
//     try {
//         const fetches = ids.map(id => fetchJson(`https://boolean-spec-frontend.vercel.app/freetestapi/books/${id}`));        
//         const books = await Promise.all(fetches);    
//         return books;

//     } catch(error) {
//         throw new Error(`Non riesco a recuperare i libri! ${error.message}`)
//     };
// };

// (async() => {
//     try {
//         const books = await getBooks([2, 13, 7, 21, 19]);
//         console.log(books);
//     } catch(error) {
//         console.error(error);
//     };   
// })();

////// SNACK 6 (finale svolto guardando correzione)
const areThereAvailableBooks = books.some(book => book.available);
const booksByPrice = [...books].sort((a, b) => {
    const price1 = parseFloat(a.price.replace('€', ''));
    const price2 = parseFloat(b.price.replace('€', ''));
    return price1 - price2;
});
booksByPrice.sort((a, b) => a.available ? -1 : 1);
console.log(booksByPrice);

////// SNACK 7 (svolto guardando correzione)
const tagCounts = books.reduce((acc, b) => {
    b.tags.forEach(tag => {
        if(acc[tag]) {
            acc[tag] ++;
        } else {
            acc[tag] = 1;
        };
    });
    return acc;
}, {});
console.log(tagCounts);
