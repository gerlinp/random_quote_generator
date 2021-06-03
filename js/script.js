/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let refresh = [];
let pop;
let quote;
let quotes = [
  { 
    quote: 'It’s not a bug. It’s an undocumented feature!',
    author:'Anonymous'
  },
  { 
    quote: 'A website without visitors is like a ship lost in the horizon',
    author:'Dr. Christopher Dayagdag'
  },
  { 
    quote: 'A website without visitors is like a ship lost in the horizon',
    author:'Dr. Christopher Dayagdag'
  },
  { 
    quote: 'If debugging is the process of removing software bugs, then programming must be the process of putting them in',
    author:'Edsger Dijkstra'
  },
  { 
    quote: 'If you think math is hard, try web design.',
    author:'Trish Parr'
  },
  { 
    quote: '“A user interface is like a joke. If you have to explain it, it’s not that good.”',
    author:'Unknown'
  },
  
  { 
    quote: '“The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.”',
    author:'Paul Rand'
  },
  { 
    quote: '“The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.”',
    author:'Paul Rand'
  },
  
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let random = Math.floor(Math.random() * quotes.length);
  return quotes[random]
}


/***
 * `printQuote` function
***/

let quoteBox = document.querySelector('#quote-box');
function printQuote() {
  quote = getRandomQuote();
  let randomQuote = `<p class="quote">${quote.quote}</p>
  <p class="source">${quote.author}`;
  if (quote.hasOwnProperty('citation')) {
    randomQuote += `<span class="citation">${quote.citation}</span>`;
  }
  if (quote.hasOwnProperty('year')) {
    randomQuote +=`<span class="year">2016</span>`;
  }
  randomQuote += `</p>`
  quoteBox.innerHTML = randomQuote;
}

printQuote();



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);