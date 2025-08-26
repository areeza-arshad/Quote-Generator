import React, { useState } from 'react';
import './Quote.css';
import reload_icon from './Assets/reload.png';
import twt_icon from './Assets/twt.png';
const apiUrl = "https://corsproxy.io/?https://api.adviceslip.com/advice";

const Quote = () => {
    const [quote, setQuote] = useState('dont judge a book by its cover');
    const quoteGenerator = async () => {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setQuote(data.slip.advice)
    }
  return (
    <div>
      <div className="container">
        <div className="quote">{quote}</div>
        <div className="line"></div>
        <div className="content">
          <div className="author">~unknown</div>
          <div className="img-container">
            <img src={reload_icon} alt="reload" onClick={quoteGenerator}/>
            <img src={twt_icon} alt="tweet" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
