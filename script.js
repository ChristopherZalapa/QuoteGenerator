const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');


let apiQuotes = [];

// Show New Quote
function newQuote() {
    // Pick A Random Quote From apiQuotes Array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check If Author Field Is Black And Replace It With Unkown
    if (!quote.author) {
        authorText.textContent = "Unkown Author"
    } else {
        authorText.textContent = quote.author;
    }
    // Check Quote Length To Determine Styling
    if (quote.text.length > 10) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text;
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

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuotes();