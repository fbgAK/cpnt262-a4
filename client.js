// Challenge 1: set of cards by rendering an array of objects
const cardData = [
    { title: 'Ace', description: 'Spade' },
    { title: 'Jack', description: 'Heart' },
    { title: 'Queen', description: 'Diamond' }
];

// Element tagged
const cardsContainer = document.getElementById('cards');

//for statement
for (let i = 0; i < cardData.length; i++) {
    // Before object
    const data = cardData[i];

    // adding 'card' class
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');

    // Created a h2 & p
    const titleElement = document.createElement('h2');
    titleElement.textContent = data.title;

    // attaching text content into element
    const contentElement = document.createElement('p');
    contentElement.textContent = data.description;

    // attaching title and content elements to the card element
    cardElement.appendChild(titleElement);
    cardElement.appendChild(contentElement);

    // attached card element 
    cardsContainer.appendChild(cardElement);
}

// Challenge 2: Reverse a String

function reverseString(str) {
    let reversedStr = '';
    // Looping characters in the string reversed
    // Using for. statement
    for (let i = str.length - 1; i >= 0; i--) {
        // Appending each character to the reversed string
        reversedStr += str[i];
    }
    return reversedStr; // Returning the reversed string
}

// Original string => result: ?drac ruoy siht sI
const originalString = "Is this your card?";
// Reversing the original string
const reversedString = reverseString(originalString);

// Displaying the final results and created ID to the reversed string
const resultElement = document.getElementById('reversed-string');
resultElement.textContent = reversedString;