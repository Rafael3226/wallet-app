import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopBar from './layout/TopBar';
import Default404 from './pages/Default404';
import Home from './pages/Home';
import LoadMoney from './pages/LoadMoney';
import Shop from './pages/Shop';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="load" element={<LoadMoney />} />
          <Route path="*" element={<Default404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
