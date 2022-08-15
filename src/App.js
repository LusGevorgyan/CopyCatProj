import React from 'react'
import { Route, Routes } from 'react-router-dom';
// import Layout from './layout/Layout';
import Main from './main/Main';
import PricingPages from './pages/pricingPages/PricingPages';
import ProductPages from './pages/productPages/ProductPages';
import ReleasesPages from './pages/releasesPages/ReleasesPages';
import RequestPages from './pages/requestInvitePages/RequestPages';
import RequestAccessPages from './pages/requestAccess/RequestAccessPages';
import PageNotFound from './pages/PageNotFound';
import RequestAccessForm from './pages/requestInvitePages/RequestAccessForm';

function App() {
  return (
    <div className="">
      <Routes>
        {/* <Route path='/' element={<Layout />}>
        </Route> */}
        <Route path="/" element={<Main />} />
        <Route path="/pricing" element={<PricingPages />} />
        <Route path="/product" element={<ProductPages />} />
        <Route path="/releases" element={<ReleasesPages />} />
        <Route path="request" element={<RequestPages />} />
        <Route path="requestAccess" element={<RequestAccessPages />} />
        <Route path="/old-home" element={<PageNotFound />} />
        <Route path="/request-access-form" element={ <RequestAccessForm/> } />
      </Routes>
    </div>
  );
}
export default App;
