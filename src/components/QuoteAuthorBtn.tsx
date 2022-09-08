import { useContext } from 'react';
import { BiChevronsRight } from 'react-icons/bi';
import ArrayQuotes from './context/CtxAuthors';
import QuoteContext from './context/CtxQuote';
import { Link } from 'react-router-dom';
const QuoteAuthorBtn = () => {
  const { quoteAuthor, quoteGenre } = useContext(QuoteContext);
  const { handleAuthorsClick } = useContext(ArrayQuotes);
  return (
    <div className=' max-w-sm flex justify-between h-20 items-center mx-auto my-2 pl-7 pr-5 hover:bg-dark__gray hover:text-white'>
      <div>
        <p className=' font-bold text-gray__medium text-lg hover:text-white'>{quoteAuthor}</p>
        <p className=' font-medium text-xs text-ligth__gray'>{quoteGenre}</p>
      </div>
      <Link to='quotes'>
        <BiChevronsRight onClick={() => handleAuthorsClick(quoteAuthor)} />
      </Link>
    </div>
  );
};

export default QuoteAuthorBtn;
