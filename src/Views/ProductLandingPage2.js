function ProductListingPage2() {
    return (
      <div classNameName="ProductListingPage2">
       <header className="section-header">
  
          <section className="header-main border-bottom">
              <div className="container">
          <div className="row align-items-center">
              <div className="col-lg-2 col-4">
                  <a href="#" className="brand-wrap">
                    Company Name
                  </a> 
              </div>
              <div className="col-lg-6 col-sm-12">
                  <form action="#" className="search">
                      <div className="input-group w-100">
                          <input type="text" className="form-control" placeholder="Search" />
                          <div className="input-group-ProductListingPage2end">
                            <button className="btn btn-primary" type="submit">
                              <i className="fa fa-search"></i>
                            </button>
                          </div>
                      </div>
                  </form> 
              </div> 
              <div className="col-lg-4 col-sm-6 col-12">
                  <div className="widgets-wrap float-md-right">
                      <div className="widget-header  mr-3">
                          <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-shopping-cart"></i></a>
                          <span className="badge badge-pill badge-danger notify">0</span>
                      </div>
                      <div className="widget-header icontext">
                          <a href="#" className="icon icon-sm rounded-circle border"><i className="fa fa-user"></i></a>
                          <div className="text">
                              <span className="text-muted">Welcome!</span>
                              <div> 
                                  <a href="#">Sign in</a> |  
                                  <a href="#"> Register</a>
                              </div>
                          </div>
                      </div>
  
                  </div> 
              </div> 
          </div> 
              </div> 
          </section>
          </header> 
  
  
  
         
          <section className="section-pagetop bg">
          <div className="container">
              <h2 className="title-page">Category products</h2>
              <nav>
              <ol className="breadcrumb text-white">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Best category</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Great articles</li>
              </ol>  
              </nav>
          </div> 
          </section>
        
          <section className="section-content padding-y">
          <div className="container">
  
          <div className="row">
              <aside className="col-md-3">
                  
          <div className="card">
              <article className="filter-group">
                  <header className="card-header">
                      <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" className="">
                          <i className="icon-control fa fa-chevron-down"></i>
                          <h6 className="title">Product type</h6>
                      </a>
                  </header>
                  <div className="filter-content collapse show" id="collapse_1">
                      <div className="card-body">
                          <form className="pb-3">
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            <div className="input-group-ProductListingPage2end">
                              <button className="btn btn-light" type="button"><i className="fa fa-search"></i></button>
                            </div>
                          </div>
                          </form>
                          
                          <ul className="list-menu">
                          <li><a href="#">People  </a></li>
                          <li><a href="#">Watches </a></li>
                          <li><a href="#">Cinema  </a></li>
                          <li><a href="#">Clothes  </a></li>
                          <li><a href="#">Home items </a></li>
                          <li><a href="#">Animals</a></li>
                          <li><a href="#">People </a></li>
                          </ul>
  
                      </div> 
                  </div>
              </article>
              <article className="filter-group">
                  <header className="card-header">
                      <a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" className="">
                          <i className="icon-control fa fa-chevron-down"></i>
                          <h6 className="title">Brands </h6>
                      </a>
                  </header>
                  <div className="filter-content collapse show" id="collapse_2">
                      <div className="card-body">
                          <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <div className="custom-control-label">Mercedes  
                                <b className="badge badge-pill badge-light float-right">120</b>  </div>
                          </label>
                          <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <div className="custom-control-label">Toyota 
                                <b className="badge badge-pill badge-light float-right">15</b>  </div>
                          </label>
                          <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <div className="custom-control-label">Mitsubishi 
                                <b className="badge badge-pill badge-light float-right">35</b> </div>
                          </label>
                          <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <div className="custom-control-label">Nissan 
                                <b className="badge badge-pill badge-light float-right">89</b> </div>
                          </label>
                          <label className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" />
                            <div className="custom-control-label">Honda 
                                <b className="badge badge-pill badge-light float-right">30</b>  </div>
                          </label>
              </div> 
                  </div>
              </article> 
              <article className="filter-group">
                  <header className="card-header">
                      <a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" className="">
                          <i className="icon-control fa fa-chevron-down"></i>
                          <h6 className="title">Price range </h6>
                      </a>
                  </header>
                  <div className="filter-content collapse show" id="collapse_3">
                      <div className="card-body">
                          <input type="range" className="custom-range" min="0" max="100" name="" />
                          <div className="form-row">
                          <div className="form-group col-md-6">
                            <label>Min</label>
                            <input className="form-control" placeholder="$0" type="number" />
                          </div>
                          <div className="form-group text-right col-md-6">
                            <label>Max</label>
                            <input className="form-control" placeholder="$1,0000" type="number" />
                          </div>
                          </div> 
                          <button className="btn btn-block btn-primary">ProductListingPage2ly</button>
                      </div>
                  </div>
              </article> 
              <article className="filter-group">
                  <header className="card-header">
                      <a href="#" data-toggle="collapse" data-target="#collapse_4" aria-expanded="true" className="">
                          <i className="icon-control fa fa-chevron-down"></i>
                          <h6 className="title">Sizes </h6>
                      </a>
                  </header>
                  <div className="filter-content collapse show" id="collapse_4">
                      <div className="card-body">
                        <label className="checkbox-btn">
                          <input type="checkbox" />
                          <span className="btn btn-light"> XS </span>
                        </label>
  
                        <label className="checkbox-btn">
                          <input type="checkbox" />
                          <span className="btn btn-light"> SM </span>
                        </label>
  
                        <label className="checkbox-btn">
                          <input type="checkbox" />
                          <span className="btn btn-light"> LG </span>
                        </label>
  
                        <label className="checkbox-btn">
                          <input type="checkbox" />
                          <span className="btn btn-light"> XXL </span>
                        </label>
                  </div>
                  </div>
              </article> 
              <article className="filter-group">
                  <header className="card-header">
                      <a href="#" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false" className="">
                          <i className="icon-control fa fa-chevron-down"></i>
                          <h6 className="title">More filter </h6>
                      </a>
                  </header>
                  <div className="filter-content collapse in" id="collapse_5">
                      <div className="card-body">
                          <label className="custom-control custom-radio">
                            <input type="radio" name="myfilter_radio" checked="" className="custom-control-input" />
                            <div className="custom-control-label">Any condition</div>
                          </label>
  
                          <label className="custom-control custom-radio">
                            <input type="radio" name="myfilter_radio" className="custom-control-input" />
                            <div className="custom-control-label">Brand new </div>
                          </label>
  
                          <label className="custom-control custom-radio">
                            <input type="radio" name="myfilter_radio" className="custom-control-input" />
                            <div className="custom-control-label">Used items</div>
                          </label>
  
                          <label className="custom-control custom-radio">
                            <input type="radio" name="myfilter_radio" className="custom-control-input" />
                            <div className="custom-control-label">Very old</div>
                          </label>
                      </div>
                  </div>
              </article> 
          </div> 
  
              </aside> 
              <main className="col-md-9">
  
          <header className="border-bottom mb-4 pb-3">
                  <div className="form-inline">
                      <span className="mr-md-auto">32 Items found </span>
                      <select className="mr-2 form-control">
                          <option>Latest items</option>
                          <option>Trending</option>
                          <option>Most Popular</option>
                          <option>Cheapest</option>
                      </select>
                      <div className="btn-group">
                          <a href="#" className="btn btn-outline-secondary" data-toggle="tooltip" title="List view"> 
                              <i className="fa fa-bars"></i></a>
                          <a href="#" className="btn  btn-outline-secondary active" data-toggle="tooltip" title="Grid view"> 
                              <i className="fa fa-th"></i></a>
                      </div>
                  </div>
          </header>
        
                <div className="row">
                    <div className="col-md-4">
                        <figure className="card card-product-grid">
                            <div className="img-wrap"> 
                                <span className="badge badge-danger"> NEW </span>
                                <img src="assets/images/items/1.jpg" />
                                <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Quick view</a>
                            </div> 
                            <figcaption className="info-wrap">
                                <div className="fix-height">
                                    <a href="#" className="title">Great item name goes here</a>
                                    <div className="price-wrap mt-2">
                                        <span className="price">$1280</span>
                                        <del className="price-old">$1980</del>
                                    </div>
                                </div>
                                <a href="#" className="btn btn-block btn-primary">Add to cart </a>
                            </figcaption>
                        </figure>
                    </div> 
        
           
          </div> 
  
  
          <nav className="mt-4" aria-label="Page navigation sample">
            <ul className="pagination">
              <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
              <li className="page-item active"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
          </nav>
  
              </main>
  
          </div>
  
          </div> 
          </section>
          
          <footer className="section-footer border-top padding-y">
              <div className="container">
                  <p className="float-md-right"> 
                      &copy; Copyright 2021 All rights reserved
                  </p>
                  <p>
                      <a href="#">Terms and conditions</a>
                  </p>
              </div>
          </footer>
         
       
      </div>
    );
  }
  
  export default ProductListingPage2;