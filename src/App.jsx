import { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const generateQuotes = () => {
    fetch("https://api.api-ninjas.com/v1/quotes", {
      method: 'GET',
      headers: {
        "X-Api-Key": "UaM8EwPGQc6dNWqtF6W+DA==elNtKrfOaSXJ9BUK"
      }
    })
    .then((response) => response.json())
    .then((data) => {
      if (data && data.length > 0) {
        setQuote(data[0].quote); // Assuming the API returns an array of quotes
        setAuthor(data[0].author); // Assuming the API returns the author
      }
    })
    .catch((error) => console.error('Error fetching quote:', error));
  };

  useEffect(() => {
    generateQuotes();
  }, []);

  return (
    <>
      
      <div className='container'>
        <div className='quote'>
          {quote}
        </div>
        <div className='author'>
          - {author}
        </div>
        <div className='line'></div>
        <p>
          <div>
            <button className='bt' onClick={generateQuotes}>Get Quote</button>
          </div>
        </p>
      </div>
    </>
  );
}

export default App;