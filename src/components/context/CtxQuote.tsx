import { createContext, useState } from 'react';
import { QuoteResponseFromAPI, QuoteResponseInfo, StateInitial } from '../../types';

interface Props {
  children: React.ReactNode;
}

const initialState = {
  quoteAuthor: 'Author',
  quoteGenre: 'No genre yet',
  quoteText: 'Your quote will appear here',
  __v: 9,
  _id: 'vmfjkdv445',
  handleClick: (): void => {},
};

const QuoteContext = createContext<StateInitial>(initialState);

function RandomQuoteProvider({ children }: Props) {
  const [apiResponse, setApiResponse] = useState<QuoteResponseInfo>(initialState);

  const fetchQuotes = async (): Promise<QuoteResponseFromAPI> => {
    return await fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random').then((res) => res.json());
  };

  function handleClick() {
    fetchQuotes().then((res) => {
      setApiResponse(res.data[0]);
    });
  }

  const data = {
    ...apiResponse,
    handleClick,
  };

  return <QuoteContext.Provider value={data}>{children}</QuoteContext.Provider>;
}

export { RandomQuoteProvider };
export default QuoteContext;
