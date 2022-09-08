import { useContext } from 'react';
import QuoteContext from './context/CtxQuote';
const QuoteBlock = () => {
  const { quoteText } = useContext(QuoteContext);
  return (
    <div className=' flex justify-center font-medium text-2xl text-black max-w-sm mx-auto mt-16'>
      <div className=' border-l-8 border-main__beige pl-5'>{quoteText}</div>
    </div>
  );
};

export default QuoteBlock;
