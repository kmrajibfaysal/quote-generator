let apiQuotes = [];

// Get Quotes From Api
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        // eslint-disable-next-line no-undef
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes);
    } catch (err) {
        // Catch Error Here
    }
}

// On Load
getQuotes();
