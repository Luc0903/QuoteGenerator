// The response we get from the server
export interface QuoteResponseFromAPI {
  statusCode: number;
  message: string;
  pagination: {};
  totalQuotes: number;
  data: Array<QuoteResponseInfo>;
  prevState: null;
}

// The kind of object we get from the API with the /random endpoint
export interface QuoteResponseInfo {
  quoteAuthor: string;
  quoteGenre: string;
  quoteText: string;
  __v: number;
  _id: string;
}

//Type for the CtxAuthors response
export type AuthorsQuotesArray = Array<QuoteResponseInfo>;

// Interface for the state of the apiResponse variable in CtxQuote
export interface StateInitial {
  quoteAuthor: string;
  quoteGenre: string;
  quoteText: string;
  __v: number;
  _id: string;
  handleClick(): void;
}

export interface QuotesInitial {
  initialArrayQuotes: AuthorsQuotesArray;
  handleAuthorsClick(author: string): void;
}

// What interface is going to render
interface PageRendering {
  rendered1: boolean;
  rendered2: boolean;
  handleRenderedByRandom(): void;
  handleRenderedByAuthors(): void;
}
