import React from 'react';
import './ProductListPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { NavLink } from 'react-router-dom';

function ProductListPage() {
  

    const products = [
        {
          id: 1,
          name: "Blue Shirt Dress",
          price: 300.0,
          image: "https://m.media-amazon.com/images/I/71+FI7zEzXL._AC_UL320_.jpg"
        },
        {
          id: 2,
          name: "Black Shirt Dress",
          price: 250.0,
          image: "https://m.media-amazon.com/images/I/415gBxXNM4L._AC_UL320_.jpg",
        },
        {
          id: 3,
          name: "Red Shirt Dress",
          price: 280.0,
          image: "https://m.media-amazon.com/images/I/31i1skSH6QS.jpg",
        },
        {
          id: 4,
          name: "Yellow Shirt",
          price: 80.0,
          image: "https://m.media-amazon.com/images/I/61lZ3lqruJL._AC_UL320_.jpg",
        },
        {
          id: 5,
          name: "Pink Shirt",
          price: 120.0,
          image: "https://m.media-amazon.com/images/I/61V-8a-zXkL._AC_UL320_.jpg",
        },
        {
          id: 6,
          name: "Green Shirt",
          price: 150.0,
          image: "https://m.media-amazon.com/images/I/419vxGlTyZL._AC_UL320_.jpg",
        },
        {
          id: 7,
          name: "Grey Shirt",
          price: 200.0,
          image: "https://m.media-amazon.com/images/I/51Js-8owaUL._AC_UL320_.jpg",
        },
        {
          id: 8,
          name: "Fancy Shirt",
          price: 90.0,
          image: "https://m.media-amazon.com/images/I/61SmsCyfZOL._UY741_.jpg",
        },
        {
          id: 9,
          name: "FancyRock Shirt",
          price: 180.0,
          image: "https://m.media-amazon.com/images/I/51VrrXUa8YL._AC_UL320_.jpg",
        },
        {
          id: 10,
          name: "Designer Sweatshirt Highneck Black",
          price: 120.0,
          image: "https://m.media-amazon.com/images/I/71mDDeJQUnL._AC_UL320_.jpg",
        },
        {
            id: 11,
            name: "Designer Sweatshirt HighNeck White",
            price: 120.0,
            image: "https://m.media-amazon.com/images/I/71ppPUBtVdL._AC_UL320_.jpg",
          },
          {
            id: 12,
            name: "Sweatshirt ",
            price: 120.0,
            image: "https://m.media-amazon.com/images/I/61ylf+ovKHL._AC_UL320_.jpg",
          },
          {
            id: 13,
            name: "Hoody Black ",
            price: 120.0,
            image: "https://m.media-amazon.com/images/I/51W0YDiJobL._AC_UL320_.jpg",
          },
      ];
      
      

      const itemsPerPage = 6;
      const [currentPage, setCurrentPage] = useState(1);
    
      const indexOfLastProduct = currentPage * itemsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
      const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    
      const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
      };


	return (
		<div>
			<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
<div class="container bootdey">




    <div class="col-md-3">
        <section class="panel">
            <div class="panel-body">
                <input type="text" placeholder="Keyword Search" class="form-control" />
            </div>
        </section>
        <section class="panel">
            <header class="panel-heading">
                Category
            </header>
            <div class="panel-body">
                <ul class="nav prod-cat">
                    <li>
                        <a href="#/" class="active"><i class="fa fa-angle-right"></i> Dress</a>
                        <ul class="nav">
                            <li class="active"><a href="#/">- Shirt</a></li>
                            <li><a href="#/">- Pant</a></li>
                            <li><a href="#/">- Shoes</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#/"><i class="fa fa-angle-right"></i> Bags &amp; Purses</a>
                    </li>
                    <li>
                        <a href="#/"><i class="fa fa-angle-right"></i> Beauty</a>
                    </li>
                    <li>
                        <a href="#/"><i class="fa fa-angle-right"></i> Coat &amp; Jacket</a>
                    </li>
                    <li>
                        <a href="#/"><i class="fa fa-angle-right"></i> Jeans</a>
                    </li>
                    <li>
                        <a href="#/"><i class="fa fa-angle-right"></i> Jewellery</a>
                    </li>
                    <li>
                        <a href="#/"><i class="fa fa-angle-right"></i> Electronics</a>
                    </li>
                    <li>
                        <a href="#/"><i class="fa fa-angle-right"></i> Sports</a>
                    </li>
                    <li>
                        <a href="#/"><i class="fa fa-angle-right"></i> Technology</a>
                    </li>
                    <li>
                        <a href="#/"><i class="fa fa-angle-right"></i> Watches</a>
                    </li>
                    <li>
                        <a href="#/"><i class="fa fa-angle-right"></i> Accessories</a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="panel">
            <header class="panel-heading">
                Price Range
            </header>
            <div class="panel-body sliders">
                <div id="slider-range" class="slider"></div>
                <div class="slider-info">
                    <span id="slider-range-amount"></span>
                </div>
            </div>
        </section>
        <section class="panel">
            <header class="panel-heading">
                Filter
            </header>
            <div class="panel-body">
                <form role="form product-form">
                    <div class="form-group">
                        <label>Brand</label>
                        <select class="form-control hasCustomSelect" style={{/*-webkit-ProductListPageearance: menulist-button; width: 231px; position: absolute; opacity: 0; height: 34px; font-size: 12px;*/}}>
                            <option>Wallmart</option>
                            <option>Catseye</option>
                            <option>Moonsoon</option>
                            <option>Textmart</option>
                        </select>
                        <span class="customSelect form-control" style={{/*display: inline-block;*/}}><span class="customSelectInner" style={{/*width: 209px; display: inline-block;*/}}>Wallmart</span></span>
                    </div>
                    <div class="form-group">
                        <label>Color</label>
                        <select class="form-control hasCustomSelect" style={{/*-webkit-ProductListPageearance: menulist-button; width: 231px; position: absolute; opacity: 0; height: 34px; font-size: 12px;*/}}>
                            <option>White</option>
                            <option>Black</option>
                            <option>Red</option>
                            <option>Green</option>
                        </select>
                        <span class="customSelect form-control" style={{/*display: inline-block;*/}}><span class="customSelectInner" style={{/*width: 209px; display: inline-block;*/}}>White</span></span>
                    </div>
                    <div class="form-group">
                        <label>Type</label>
                        <select class="form-control hasCustomSelect" style={{/*-webkit-ProductListPageearance: menulist-button; width: 231px; position: absolute; opacity: 0; height: 34px; font-size: 12px;*/}}>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                            <option>Extra Large</option>
                        </select>
                        <span class="customSelect form-control" style={{/*display: inline-block;*/}}><span class="customSelectInner" style={{/*width: 209px; display: inline-block;*/}}>Small</span></span>
                    </div>
                    <button class="btn btn-primary" type="submit">Filter</button>
                </form>
            </div>
        </section>
       
    </div>
       

       

        <div>
            
            <NavLink to="/productviewdetails" >
                      <div class="container bootdey">
        <div class="col-md-3">
          {/* Sidebar section */}
        </div>
        <div class="col-md-9">
          <div class="row product-list">
            {currentProducts.map((product) => (
              <div class="col-md-4" key={product.id}>
                <section class="panel">
                  <div class="pro-img-box">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div class="panel-body text-center">
                    <h4>
                      <a href="#/" class="pro-title">
                        {product.name}
                      </a>
                    </h4>
                    <p class="price">INR. {product.price.toFixed(2)}</p>
                  </div>
                </section>
              </div>
            ))}
          </div>
          <div class="pull-right">
            <ul class="pagination pagination-sm pro-page-list">
              {Array(Math.ceil(products.length / itemsPerPage))
                .fill()
                .map((_, index) => (
                  <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                    <a href="#/" onClick={() => paginate(index + 1)} className="page-link">
                      {index + 1}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      </NavLink>


    </div>


    </div>


    <section class="panel">
    <header class="panel-heading">
        Best Seller
    </header>
    <div class="panel-body">
        <div class="best-seller">
            <div class="media-row">
                <article class="media">
                    <a class="pull-left thumb p-thumb">
                        <img src="https://m.media-amazon.com/images/I/71ppPUBtVdL._AC_UL320_.jpg" />                 

                    </a>
                    <div class="media-body">
                        <a href="#/" class="p-head">Hot SweatShirt Black</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </article>
                

                <article class="media">
    <a class="pull-left thumb p-thumb">
        <img src="https://m.media-amazon.com/images/I/51W0YDiJobL._AC_UL320_.jpg" />
    </a>
    <div class="media-body">
        <span class="label label-success">Best Seller</span> 
        <a href="#/" class="p-head">Hoody Dark</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
</article>



                <article class="media">
                    <a class="pull-left thumb p-thumb">
                        <img src="https://m.media-amazon.com/images/I/71mDDeJQUnL._AC_UL320_.jpg" />
                    </a>
                    <div class="media-body">
                        <a href="#/" class="p-head">Hot SweatShirt White</a>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </article>
            </div>
        </div>
    </div>
</section>
</div>

	
	);
}
export default ProductListPage;



