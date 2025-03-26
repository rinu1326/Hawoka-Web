import React from 'react';

const QuoteGrid = ({ quotes, className }) => {
  // Default quotes if none provided
  const defaultQuotes = [
    "Human beings are intuitive and emotional",
    "Authenticity is the strongest magnet",
    "Honesty always wins",
    "Creativity is not bound by age, gender or race",
    "Integrity cannot be bought"
  ];

  const displayQuotes = quotes || defaultQuotes;

  return (
    <div className={`quote-container ${className || ''}`}>
      <div className="quote-grid">
        {displayQuotes.map((quote, index) => (
          <div key={index} className="quote-box">
            {quote}
          </div>
        ))}
      </div>

      <style jsx>{`
        .quote-container {
          width: 100%;
          background-color: black;
          color: white;
          padding: 40px 20px;
          font-family: Arial, sans-serif;
          
          
        }

        .quote-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
          max-width: 1400px;
          margin: 0 auto;
          
        }

        .quote-box {
          border: 1px solid rgba(255, 255, 255, 0.3);
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 30px 20px;
          min-height: 180px;
          font-size: 20px;
          line-height: 1.4;
          flex: 1;
          min-width: 220px;
          max-width: 300px;
          
        }

        @media (max-width: 1200px) {
          .quote-box {
            min-width: 200px;
          }
        }

        @media (max-width: 768px) {
          .quote-container {
            padding: 30px 15px;
          }
          
          .quote-grid {
            gap: 15px;
          }
          
          .quote-box {
            min-width: 160px;
            min-height: 150px;
            font-size: 18px;
            padding: 20px 15px;
          }
        }

        @media (max-width: 480px) {
          .quote-grid {
            flex-direction: column;
            align-items: center;
          }
          
          .quote-box {
            min-width: 100%;
            min-height: 100px;
          }
        }
      `}</style>
    </div>
  );
};

export default QuoteGrid;