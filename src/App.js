import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TopBar from './layout/TopBar';
import Default404 from './pages/Default404';
import Home from './pages/Home';
import LoadMoney from './pages/LoadMoney';
import Shop from './pages/Shop';
import SingInPage from './pages/SingInPage';
import LogInPage from './pages/LogInPage';
import RequireAuth from './containers/RequireAuth';
import { RecoilRoot } from 'recoil';
import SendMoney from './pages/SendMoney';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/">
            <Route path="singin" element={<SingInPage />} />
            <Route path="login" element={<LogInPage />} />
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="shop"
              element={
                <RequireAuth>
                  <Shop />
                </RequireAuth>
              }
            />
            <Route
              path="load"
              element={
                <RequireAuth>
                  <LoadMoney />
                </RequireAuth>
              }
            />
            <Route
              path="send"
              element={
                <RequireAuth>
                  <SendMoney />
                </RequireAuth>
              }
            />
            <Route path="*" element={<Default404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
