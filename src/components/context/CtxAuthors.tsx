import { createContext, useState } from 'react';
import { QuoteResponseFromAPI, AuthorsQuotesArray, QuotesInitial } from '../../types';

interface Props {
  children: React.ReactNode;
}

const miArray: AuthorsQuotesArray = [
  {
    quoteAuthor: 'Nobody',
    quoteGenre: 'No genre yet',
    quoteText: 'your quote will appear here',
    __v: 9,
    _id: 'vmfjkdv445',
  },
];
const initialState = {
  handleAuthorsClick: (author: string): void => {},
  initialArrayQuotes: miArray,
};

const ArrayQuotes = createContext<QuotesInitial>(initialState);

function MulitpleQuotesProvider({ children }: Props) {
  const [quotes, setQuotes] = useState<QuotesInitial>(initialState);

  const fetchQuotesByAuthor = async (Author: string): Promise<QuoteResponseFromAPI> => {
    return await fetch(`https://quote-garden.herokuapp.com/api/v3/quotes/?author=${Author}`).then((res) => res.json());
  };

  function handleAuthorsClick(author: string) {
    fetchQuotesByAuthor(author).then((res) => {
      setQuotes({ ...quotes, initialArrayQuotes: res.data });
    });
  }

  const data = {
    ...quotes,
    handleAuthorsClick,
  };

  return <ArrayQuotes.Provider value={data}>{children}</ArrayQuotes.Provider>;
}

export { MulitpleQuotesProvider };
export default ArrayQuotes;
