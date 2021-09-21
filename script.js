/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
let apiQuotes = [];

const newQuote = () => {
    // Pick a random quote apiQuotes array
    // eslint-disable-next-line no-undef
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if Author field is blank and replace it with 'unknown'
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // Check Quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }

    quoteText.textContent = quote.text;
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

// Tweet Quote
const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
};

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();
// https://twitter.com/intent/tweet
