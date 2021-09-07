import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './randomQuoteMachine.css';
import * as serviceWorker from '../serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

function App() {
  const [ quotes, setQuotes ] = useState([]);
  const [ quote, setQuote ] = useState();

  function getQuote(quotes) {
    const rand = Math.floor(Math.random() * quotes.length);
    return quotes[rand];
  };

  useEffect(() => {
    const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    const fetchQuotes = async() => {
      const resp = await fetch(url); 
      const data = await resp.json();
      setQuotes(data.quotes);
      setQuote(getQuote(data.quotes));
    };
    fetchQuotes();
  },[]);

  console.log(quotes);
  console.log(quote);

  return <div className="rqm">
    <div id="quote-box">

      <div id="text">
      {"quote.author"}
      </div>
      <div id="author"></div>
      <button id="new-quote">
New Quote
      </button>
      <a href="tweet/" id="tweet-quote">twe</a>
    </div>
  </div>;
}