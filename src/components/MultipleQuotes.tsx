import { useContext } from 'react';
import ArrayQuotes from './context/CtxAuthors';
import RdmQuoteBtn from './RdmQuoteBtn';
import QuoteContext from './context/CtxQuote';

const MultipleQuotes = () => {
  const { initialArrayQuotes, handleAuthorsClick } = useContext(ArrayQuotes);
  const { quoteAuthor } = useContext(QuoteContext);

  return (
    <div>
      <RdmQuoteBtn />
      <p className=' font-bold text-4xl mt-11 mb-10 text-center' onClick={() => handleAuthorsClick(quoteAuthor)}>
        {initialArrayQuotes[0].quoteAuthor}
      </p>
      {initialArrayQuotes.map((quote) => {
        return (
          <div key={quote._id}>
            <div className=' flex justify-center font-medium text-2xl text-black max-w-sm mx-auto my-4'>
              <div className=' border-l-8 border-main__beige pl-5'>{quote.quoteText}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MultipleQuotes;
