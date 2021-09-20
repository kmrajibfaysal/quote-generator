let apiQuotes = [];

// Show new quote from local file
// const newQuote = () => {
//     // Pick a random quote apiQuotes array
//     // eslint-disable-next-line no-undef
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//     console.log(quote);
// };
// show new quote from apiQuotes
const newQuote = () => {
    // Pick a random quote apiQuotes array
    // eslint-disable-next-line no-undef
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
};

// Get Quotes From Api
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        // eslint-disable-next-line no-undef
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (err) {
        // Catch Error Here
    }
}

// On Load
getQuotes();
// from local
// newQuote();
