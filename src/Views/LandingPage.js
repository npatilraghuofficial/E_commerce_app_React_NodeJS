import React from 'react'
import NavBar from '../Components/NavBar'


import ProductListPage from './ProductaListPage'
// import { StyledEngineProvider } from '@mui/material/styles';
// import FeaturedProductUtil from './ReviewSection';

import Footer from './Footer'
const LandingPage = () => {
  return (
<>
<div class="container">
  <NavBar/>
  {/* <Sidebar></Sidebar> */}
  <br></br>
  {/* <Carousal></Carousal> */}
  {/* <ProductListingPage2></ProductListingPage2> */}
  <ProductListPage/>

  {/* <StyledEngineProvider injectFirst>
          <FeaturedProductUtil />
    </StyledEngineProvider> */}
    <Footer/>
</div>

</>  )
}

export default LandingPage