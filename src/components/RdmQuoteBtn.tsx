import { useContext } from 'react';
import { BiRefresh } from 'react-icons/bi';
import QuoteContext from './context/CtxQuote';
import { Link } from 'react-router-dom';

const RdmQuoteBtn = () => {
  const { handleClick } = useContext(QuoteContext);
  return (
    <div>
      <button
        className=' font-raleway font-medium text-lg text-gray__medium flex items-center gap-1 ml-auto mr-8'
        onClick={handleClick}
      >
        <Link to='/' className=' flex items-center'>
          random <BiRefresh />
        </Link>
      </button>
    </div>
  );
};

export default RdmQuoteBtn;
