import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Views/LoginPage';
import RegisterPage from './Views/RegisterPage';
import LandingPage from './Views/LandingPage';
import ProductViewDetails from './Views/ProductViewDetails';
import ViewAllCartItems from './Views/ViewAllCartItems';
import MyOrders from './Views/MyOrders';
import MyOrderStatus from './Views/MyOrderStatus';
import ViewMyProfile from './Views/ViewMyProfile';
// import { StyledEngineProvider } from '@mui/material/styles';

const App = () => {
  return (
    <Router>
      <Routes>


        <Route path="/login" element={<LoginPage />} />

        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/landingpage" element={<LandingPage/>} />
        <Route path="/productviewdetails" element={<ProductViewDetails/>} />
        <Route path="/Viewallcartitems" element={<ViewAllCartItems />} />
        <Route path="/viewmyorders" element ={<MyOrders/>}/>
        
        <Route path="/myorderstatus" element ={<MyOrderStatus/>}/>
        <Route path ="/viewmyprofile" element={<ViewMyProfile/>}/>

        
      </Routes>
    </Router>
  );
};

export default App;
