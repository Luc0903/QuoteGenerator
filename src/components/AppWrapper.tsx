import MainInterface from './MainInterface';
import MultipleQuotes from './MultipleQuotes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppWrapper = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainInterface />} />
          <Route path='/quotes' element={<MultipleQuotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppWrapper;
