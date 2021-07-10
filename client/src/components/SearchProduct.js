import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import * as actions from "./../Store/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";

const SearchProduct = (props) => {


    const [searchDet, setsearchDet] = useState("");
    const [navSwitch,setNavSwitch] = useState(false)
    const history = useHistory();



  let mobilenav;

  const switchOffNav = () => {
    setNavSwitch(false);
  };

  const switchOnNav = () => {
    setNavSwitch(true);
  };

  const handleSearch = () => {

    let searchOrdersLocal = [];

    for(let i=0; i < props.products.length; i++) {
      let lowSearchtxt = searchDet.toLowerCase();
        if (props.products[i].imageHeading.toLowerCase().search(lowSearchtxt) > -1) {  
            searchOrdersLocal.push(props.products[i])
        } 
       }

    props.updateSearch([...searchOrdersLocal]);
    history.push("/search");
  };


  if (navSwitch) {

  mobilenav = <div className="css-ship-bar-collapse " >
  <div className="css-ship-bar-eye2-wrap css-flex-space">
    <div className="css-ship-bar-eye2-logo css-flex-space">
      <Link to="/" onClick={switchOffNav}>
        <img
          alt="Logo"
          className="css-image-dis-cor"
          src="assets/logo/logo.png"
        />
      </Link>
      <p>Shri Rangaa Art Gallery</p>
    </div>
    <div className="css-ship-bar-eye2-body footer-line ">

      <Link className="css-ship-touch" queryparamshandling="merge" to="/" onClick={switchOffNav}>
        <ion-icon name="home"></ion-icon>
        <span> Home</span>
      </Link>
      
      <Link className="css-ship-touch" to="/all" onClick={switchOffNav}>
        <ion-icon name="brush"></ion-icon>
        <span> Shop</span>
      </Link>
      <Link
        className="css-ship-touch"
        queryparamshandling="merge"
        to="/basket"
        onClick={switchOffNav}
      >
        <ion-icon name="cart"></ion-icon>
        <span> Basket</span>
      </Link>

      <Link
        className="css-ship-touch"
        queryparamshandling="merge"
        to="/orders"
        onClick={switchOffNav}
      >
        <ion-icon name="cash"></ion-icon>
        <span> Order Status</span>
      </Link>

      <Link
        className="css-ship-touch"
        queryparamshandling="merge"
        to="/contact"
        onClick={switchOffNav}
      >
        <ion-icon name="call"></ion-icon>
        <span> Contact Us</span>
      </Link>

      <Link
        className="css-ship-touch"
        queryparamshandling="merge"
        to="/about"
        onClick={switchOffNav}
      >
        <ion-icon name="happy"></ion-icon>
        <span> About Us</span>
      </Link>


      <div onClick={switchOffNav} className="button-align">
        <div>
            <span className="btn btn2-color">Close</span>
        </div>
    </div>
    </div>
 
   
 
  </div>
</div>
  } else {
    mobilenav = null;
  }



  return (
    <div>
      <div>
        <div
          className="css-ship-peoples-mega-dropdown css-ship-peoples-mega-dropdown-fullscreen CSS-desktop-hide css-cator-btn-det"
        >
          <div className="css-flex-space">
            <div className="css-ship-peoples-mega-dropdown-title">
              <h4>Categories</h4>
            </div>
            <div className="css-flex-space css-ship-peoples-mega-dropdown-contents">
              <div className="css-ship-peoples-mega-drop-ops">
                <div
                  aria-orientation="vertical"
                  className="nav flex-column css-nav-fillers"
                  id="v-pills-tab"
                  role="tablist"
                ></div>
              </div>
            </div>
            <div className="css-ship-peoples-mega-dropdown-footer css-flex-space">
              <button> Close </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="css-ship-bottom css-walk-high">
          <div className="css-head-master">
            <div className="container css-flex-space">
              <nav className="css-ship-bar-or1 css-ship-bar-or1-expand-xl CSS-desktop-hide">
                <i className="css-icon-border-line" aria-expanded="false" onClick={switchOnNav}>
                  <img
                    alt="menu"
                    className="css-image-dis-cor image-size menu-position"
                    src="assets/menu.svg"
                  />
                </i>
                {mobilenav}
              </nav>

              <div className="css-head-master-logo">
                <Link to="/">
                  <img
                    alt="Logo"
                    className="css-image-dis-cor"
                    src="assets/logo/logo.png"
                  />
                </Link>
              </div>
          
              <div className="css-head-master-search ">
                <div className="css-icon-font-det1 css-flex-space">
                  <i
                    className="css-icon-border-line"
                    aria-expanded="false"
                    onClick={handleSearch}
                  >
                    <ion-icon name="search-outline"></ion-icon>
                  </i>
                  <div >
                    <span className="css-border-cover">
                      <input
                  
                        aria-haspopup="true"
                   
                        className=" css-colol1-bg-black ng-tns-c4-39 ui-inputtext css-border-cover css-data-intial css-spot-detui-autocomplete-input "
                        type="text"
                        aria-activedescendant="p-highlighted-option"
                        placeholder="Search our products"
                        onChange={(e) => setsearchDet(e.target.value)}
                        value={searchDet}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="css-head-master-action css-flex-space">
                <div className="css-head-master-cart">
                  <Link className="css-flex-space" to="/basket">
                    <i className="css-icon-border-line" aria-expanded="false">
                      <ion-icon name="cart-outline"></ion-icon>
    
                      {props.noOfOder.length?<span className='badge badge-warning' id='lblCartCount'> {props.noOfOder.length} </span>:<span></span>}
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="css-ship-peoples css-desktop-only ">
              <div className="container css-flex-space">
                <div className="css-ship-peoples-left css-flex-space">
                  <div className="css-ship-peoples-mega-drop">
                    <div className="css-ship-peoples-link css-colol1-bg--after primary-color-txt--active primary-color-txt--hover css-colol1-bg--active--after css-flex-space">
                      <span>All Categories</span>
                      <i className="css-icon-border-line" aria-expanded="false">
                        <ion-icon name="chevron-down-outline"></ion-icon>
                      </i>
                    </div>
                    <div className="css-ship-peoples-mega-dropdown">
                      <div className="css-flex-space">
                        <div className="css-ship-peoples-mega-drop-ops">
                          <div
                            aria-orientation="vertical"
                            className="nav flex-column css-nav-fillers "
                            id="v-pills-tab"
                            role="tablist"
                          >
                            <Link
                              aria-selected="true"
                              className="css-ship-touch nav-space"
                              data-toggle="pill"
                              to="/all"
                              id="catTab71-t"
                              role="tab"
                            >
                              All Products
                            </Link>
                            <Link
                              aria-controls="catTab71"
                              aria-selected="true"
                              className="css-ship-touch nav-space"
                              data-toggle="pill"
                              to="/balaji"
                              id="catTab71-t"
                              role="tab"
                            >
                              Balaji
                            </Link>
                            <Link
                              aria-controls="catTab71"
                              aria-selected="true"
                              className="css-ship-touch nav-space"
                              data-toggle="pill"
                              to="/ganesha"
                              id="catTab71-t"
                              role="tab"
                            >
                              Ganesha
                            </Link>
                            <Link
                              aria-controls="catTab71"
                              aria-selected="true"
                              className="css-ship-touch nav-space"
                              data-toggle="pill"
                              to="/lakshmi"
                              id="catTab71-t"
                              role="tab"
                            >
                              Lakshmi
                            </Link>
                            <Link
                              aria-controls="catTab71"
                              aria-selected="true"
                              className="css-ship-touch nav-space"
                              data-toggle="pill"
                              to="/embossed"
                              id="catTab71-t"
                              role="tab"
                            >
                              Semi Embossed
                            </Link>

                            <Link
                              aria-controls="catTab71"
                              aria-selected="true"
                              className="css-ship-touch nav-space"
                              data-toggle="pill"
                              to="/Gifts"
                              id="catTab71-t"
                              role="tab"
                            >
                              Gifts
                            </Link>

                            <Link
                              aria-controls="catTab71"
                              aria-selected="true"
                              className="css-ship-touch nav-space"
                              data-toggle="pill"
                              to="/Amman"
                              id="catTab71-t"
                              role="tab"
                            >
                              Amman
                            </Link>

                            <Link
                              aria-controls="catTab71"
                              aria-selected="true"
                              className="css-ship-touch nav-space"
                              data-toggle="pill"
                              to="/Annapoorani"
                              id="catTab71-t"
                              role="tab"
                            >
                              Annapoorani
                            </Link>


                            <Link
                              aria-controls="catTab71"
                              aria-selected="true"
                              className="css-ship-touch nav-space"
                              data-toggle="pill"
                              to="/Krishna"
                              id="catTab71-t"
                              role="tab"
                            >
                              Krishna
                            </Link>


                            <Link
                              aria-controls="catTab71"
                              aria-selected="true"
                              className="css-ship-touch nav-space"
                              data-toggle="pill"
                              to="/mukk"
                              id="catTab71-t"
                              role="tab"
                            >
                              Muck Boards
                            </Link>

                            <Link
                              aria-controls="catTab71"
                              aria-selected="true"
                              className="css-ship-touch nav-space"
                              data-toggle="pill"
                              to="/Saibaba"
                              id="catTab71-t"
                              role="tab"
                            >
                              Saibaba
                            </Link>


                            <Link
                              aria-controls="catTab71"
                              aria-selected="true"
                              className="css-ship-touch nav-space"
                              data-toggle="pill"
                              to="/Saraswathi"
                              id="catTab71-t"
                              role="tab"
                            >
                              Saraswathi
                            </Link>


                            <Link
                              aria-controls="catTab71"
                              aria-selected="true"
                              className="css-ship-touch nav-space"
                              data-toggle="pill"
                              to="/Sivan"
                              id="catTab71-t"
                              role="tab"
                            >
                              Sivan Parvathi
                            </Link>

                            <Link
                              aria-controls="catTab71"
                              aria-selected="true"
                              className="css-ship-touch nav-space"
                              data-toggle="pill"
                              to="/Murugar"
                              id="catTab71-t"
                              role="tab"
                            >
                            Murugar
                            </Link>

                            <Link
                              aria-controls="catTab71"
                              aria-selected="true"
                              className="css-ship-touch nav-space"
                              data-toggle="pill"
                              to="/WallPlate"
                              id="catTab71-t"
                              role="tab"
                            >
                            Wall Plate
                            </Link>



                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    className="css-ship-peoples-link css-colol1-bg--after primary-color-txt--active primary-color-txt--hover css-colol1-bg--active--after"
                    to="/"
                  >
                    Home
                  </Link>
                  <Link
                    className="css-ship-peoples-link css-colol1-bg--after primary-color-txt--active primary-color-txt--hover css-colol1-bg--active--after"
                    to="/all"
                  >
                    Shop
                  </Link>
                  <Link
                    className="css-ship-peoples-link css-colol1-bg--after primary-color-txt--active primary-color-txt--hover css-colol1-bg--active--after"
                    to="/basket"
                    queryparamshandling="merge"
                  >
                    Basket
                  </Link>

                  <Link
                    className="css-ship-peoples-link css-colol1-bg--after primary-color-txt--active primary-color-txt--hover css-colol1-bg--active--after"
                    to="/orders"
                    queryparamshandling="merge"
                  >
                    Order Status
                  </Link>

                  <Link
                    className="css-ship-peoples-link css-colol1-bg--after primary-color-txt--active primary-color-txt--hover css-colol1-bg--active--after"
                    to="/contact"
                    queryparamshandling="merge"
                  >
                    Contact Us
                  </Link>

                  <Link
                    className="css-ship-peoples-link css-colol1-bg--after primary-color-txt--active primary-color-txt--hover css-colol1-bg--active--after"
                    to="/about"
                    queryparamshandling="merge"
                  >
                    About Us
                  </Link>
 
 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    renderUiPage: state.pageTag.uiPage,
    noOfOder: state.pageTag.order,
    products: state.dataExt,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSearch: (searchText) => dispatch(actions.updateSearch(searchText)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchProduct));
