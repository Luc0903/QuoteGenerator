import QuoteAuthorBtn from './QuoteAuthorBtn';
import QuoteBlock from './QuoteBlock';
import RdmQuoteBtn from './RdmQuoteBtn';
const MainInterface = () => {
  return (
    <div className=' mt-9'>
      <RdmQuoteBtn />
      <QuoteBlock />
      <QuoteAuthorBtn />
    </div>
  );
};

export default MainInterface;
