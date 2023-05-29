import React from 'react';
import { Route, Routes , BrowserRouter} from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<NewsPage />} />
      <Route path="/:category" element={<NewsPage />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
