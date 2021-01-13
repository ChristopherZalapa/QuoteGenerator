let apiQuotes = [];

// Show New Quote
function newQuote() {
    // Pick A Random Quote From apiQuotes Array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// Get Quote From API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }   catch (error) {
        // Catch Error Here
    }
}

// On Load
getQuotes();