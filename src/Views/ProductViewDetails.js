import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import ReviewPage from './ReviewSection';
import { Nav } from 'react-bootstrap';
import Footer from './Footer';

const ProductViewDetails = () => {
  const products = [
    {
      id: 1,
      title: "Hot HighNeck Shirt",
      price: 29.99,
      description: "This is a great product with amazing features.",
      image: "https://m.media-amazon.com/images/I/71mDDeJQUnL._AC_UL320_.jpg",
      rating: 4.5,
      reviews: 25,
      sku: "SKU12345",
      isInStock: true,
      features: [
        "Feature 1: Lorem ipsum dolor sit amet.",
        "Feature 2: Consectetur adipiscing elit.",
        "Feature 3: Sed do eiusmod tempor incididunt ut labore.",
      ],
      variants: ["Small", "Medium", "Large"],
    }
    // Add more products as needed
  ];

  return (
    <>
    <br></br>
    <h4 className="text-center">Product Details</h4>
    <hr></hr>
    <br></br>
    <div className="container">
      {products.map((product) => (
        <div className="row" key={product.id}>
          <div className="col-md-6 d-flex justify-content-center">
            <img src={product.image} alt={product.title} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-center">
              <div>
                <br></br>

                <h4 className="text-left">Specifications:</h4>
                <br>
                </br>
                <h2>{product.title}</h2>
                <p className="lead">Price: <span className="badge bg-primary">${product.price}</span></p>
                <p>{product.description}</p>

                <hr></hr>

                <p>Rating: <span className="badge bg-success">{product.rating}</span> ({product.reviews} reviews)</p>
                <p>SKU/ID: <span className="badge bg-info">{product.sku}</span></p>
                <p>
                  Availability:{" "}
                  {product.isInStock ? (
                    <span className="badge bg-success">In Stock</span>
                  ) : (
                    <span className="badge bg-danger">Out of Stock</span>
                  )}
                </p>
                <h5>Features/Specifications:</h5>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity:</label>
                  <input type="number" min="1" className="form-control" id="quantity" value="1" />
                </div>
                <div className="form-group">
                  <label htmlFor="variant">Select Variant:</label>
                  <select className="form-select" id="variant">
                    <option value="default">Select Variant</option>
                    {product.variants.map((variant, index) => (
                      <option key={index} value={variant}>
                        {variant}
                      </option>
                    ))}
                  </select>
                </div>
                <Nav.Link href="/viewallcartitems">
                <button className="btn btn-primary">Add to Cart</button>
                </Nav.Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <StyledEngineProvider injectFirst>
          <ReviewPage />
    </StyledEngineProvider>
    <Footer/>
  </>
  
  );
};

export default ProductViewDetails;
