// question 1
const input = "Hello World"

function oneMoreHello() {
    const str = input.split('').reverse().join('')
    console.log(str);
}

const delay = 2000

setTimeout(oneMoreHello, delay)


// question 2

function countdownToThree() {
    let currentNumber = 3;

    const interval = setInterval(function() {
        if (currentNumber === 0) {
            clearInterval(interval);
        }else{
            console.log(`Random number generated in :${currentNumber}`);
        }

        currentNumber--;
    }, 1000);

    
}

countdownToThree();


function randomNum() {
    const randomNumber = ''
    console.log("Random number generated", Math.floor(Math.random(randomNumber) * 10) + 1);
}
setTimeout(randomNum, 4000)

// question 3
const listItems = [
    {
        item: "soap",
        price: 5
    },
    {
        item: "Apple",
        price: 20
    },
    {
        item: "Cookies",
        price: 30
    },
    
]

const exchangeRate = 80
const converter = listItems.map( (e) => e.price * exchangeRate)

const sumOfItems = converter.reduce((acc, currVal) => {
    return acc+currVal
})

console.log(sumOfItems);


// question 4
const books = [
    {title: "book1", author: "Henry Fielding ", publication: 1813},
    {title: "book2", author: "Jane Austen", publication: 2010},
    {title: "book3", author: "Stendhal", publication: 2023},
    {title: "book4", author: " Charles Dickens", publication: 2016},
    {title: "book5", author: "Gustave Flaubert", publication: 1999}
]

const findBook = books.filter( (e) => e.publication < 2010)
console.log(findBook);

const findBook2 = books.filter( (e) => e.publication >= 2010).map(book => ({
    author: book.author.toUpperCase()
}))
console.log(findBook2);


// question 5
let urlRegex = /^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/gi

let url = "https://m.vegamovies.photos/"

let urlValidation = url.match(urlRegex)

if (urlValidation) {
    console.log(`Your url is valid`);
} else {
    console.log(`Your url is not valid`);
}

// question 6
const linkedinRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}\/?$/gi

const linkedinUrl = "https://www.linkedin.com/in/abhay-verma-821699274/"

const linkedinUrlValidator = linkedinUrl.match(linkedinRegex)
if (linkedinUrlValidator){
    console.log("Valid Linkedin Url");
}else{
    console.log('Invalid LinkediN Url');
}





// node script.js