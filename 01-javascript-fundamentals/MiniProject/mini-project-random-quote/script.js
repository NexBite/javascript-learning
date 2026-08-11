const quotes = [
    "Success is the sum of small efforts.",
    "Believe you can and you're halfway there.",
    "Great things take time.",
    "Never stop learning.",
    "Every expert was once a beginner."
];




const quote = document.getElementById("quote");

const quoteBtn = document.getElementById("quoteBtn");


function generateQuote() {

    const randomIndex = Math.floor(Math.random() * quotes.length);

    const randomQuote = quotes[randomIndex];

    quote.innerText = randomQuote;
}


// quoteBtn.addEventListener("click" , () => {



//   // function call
//   generateQuote();

// });

quoteBtn.addEventListener("click", generateQuote);


generateQuote();







