import './App.css';
import AppWrapper from './components/AppWrapper';
import { MulitpleQuotesProvider } from './components/context/CtxAuthors';
import { RandomQuoteProvider } from './components/context/CtxQuote';

function App() {
  return (
    <div className=''>
      <RandomQuoteProvider>
        <MulitpleQuotesProvider>
          <AppWrapper />
        </MulitpleQuotesProvider>
      </RandomQuoteProvider>
    </div>
  );
}

export default App;
