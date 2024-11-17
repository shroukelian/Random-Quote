var quotes =[
        {quote : "So many books, so little time.", author :"Frank Zappa"},
        {quote : "You only live once, but if you do it right, once is enough.", author :"Mae West"},
        {quote : "The best revenge is massive success.", author :"Frank Sinatra"},
        {quote : "We accept the love we think we deserve.", author :"Stephen Chbosky"},
        {quote : "Life is what happens when you're busy making other plans.", author :"John Lennon"},
        {quote : "Do not take life too seriously. You will never get out of it alive.", author :"Elbert Hubbard"},
        {quote : "In the middle of every difficulty lies opportunity.", author :"Albert Einstein"},
];

var quoteElement = document.getElementById("quote");
var authorElement = document.getElementById("author"); 



function changeQuotes(){

    var randomIndex = Math.floor(Math.random() * quotes.length);
    var randomQuote = quotes[randomIndex];
    document.getElementById("quote").innerHTML = `"${randomQuote.quote}"`;
    document.getElementById("author").innerHTML = `--${randomQuote.author}`;


};