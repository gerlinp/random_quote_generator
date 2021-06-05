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
    author:'Anonymous',
    year:'1970s "allegedly"'
  },
  { 
    quote: 'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.',
    author:'Rick Cook',
    year:'1989',
    buy:'https://www.amazon.com/Wizardry-Compiled-Rick-Cook/dp/0671698567'
  },
  { 
    quote: 'A website without visitors is like a ship lost in the horizon',
    author:'Dr. Christopher Dayagdag',
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
    quote: 'A user interface is like a joke. If you have to explain it, it’s not that good.',
    author:'Unknown',
    citation:'random forum'
  },
  
  { 
    quote: 'The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.',
    author:'Paul Rand'
  },
  { 
    quote: 'Measuring programming progress by lines of code is like measuring aircraft building progress by weight',
    author:'Bill Gates'
  },
  { 
    quote: 'A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.',
    author:'Antoine de Saint-Exupéry'
  },
  { 
    quote: 'Digital design is like painting, except the paint never dries.',
    author:'Neville Brody'
  },
  { 
    quote: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
    author:'John F. Woods',
    citation: 'comp.lang.c++ newsgroup',
    year: '1991'
  },
  { 
    quote: 'Talk is cheap. Show me the code.',
    author:'Linus Torvalds'
  },

  { 
    quote: 'Writing the first 90 percent of a computer program takes 90 percent of the time. The remaining ten percent also takes 90 percent of the time and the final touches also take 90 percent of the time.',
    author:'N.J. Rubenking'
  },

  { 
    quote: 'Any code of your own that you haven’t looked at for six or more months might as well have been written by someone else.',
    author:'Eagleson’s Law'
  },
  { 
    quote: 'Websites promote you 24/7: No employee will do that.',
    author:'Paul Cookson'
  },
  { 
    quote: 'If you want a great site, you’ve got to test. After you’ve worked on a site for even a few weeks, you can’t see it freshly anymore. You know too much. The only way to find out if it really works is to test it.',
    author:'Steve Krug'
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
 * `randomColor` function
***/


function randomColor() {
  return  `#${Math.floor(Math.random()*16777215).toString(16)}`
};


function changeBodyBg(){
  document.body.style.background =  `linear-gradient(270deg,${randomColor()}, ${randomColor()})`;
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
    randomQuote +=`<span class="year">${quote.year}</span>`;
  }
  if (quote.hasOwnProperty('buy')) {
    randomQuote +=`<span class="year"><a href="${quote.buy}">BUY THE BOOK</a></span>`;
  }
  randomQuote += `</p>`
  quoteBox.innerHTML = randomQuote;
  changeBodyBg()
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);




setInterval(printQuote,10000);