import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation,Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Store/actions";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";

function Lakshmi(props) {
  const { pathname } = useLocation();
  const history = useHistory();

  const [categories, setCategories] = useState("Lakshmi");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const priceFormating = (inputPrice) => {
    var x = inputPrice;
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers !== "") lastThree = "," + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

    return res;
  };

  const handleDetailClick = (imageLink, imageHeading, imagePrice,imageTag,startingSize,endingSize,disPer,srtaCat) => {
    props.updateData(imageLink, imageHeading, imagePrice,imageTag,startingSize,endingSize,disPer,srtaCat);
    history.push("/detail");
  };


  const handleCategoryClick = (event) => {
    setCategories(event.target.value);
    if (event.target.value === "All Products") {
      history.push("/all");
    }
    if (event.target.value === "Balaji") {
      history.push("/balaji");
    }
    if (event.target.value === "Ganesha") {
      history.push("/ganesha");
    }
    if (event.target.value === "Lakshmi") {
      history.push("/lakshmi");
    }
    if (event.target.value === "Semi Embossed") {
      history.push("/embossed");
    }

    if (event.target.value === "Gifts") {
      history.push("/Gifts");
    }

    if (event.target.value === "Amman") {
      history.push("/Amman");
    }

  if (event.target.value === "Annapoorani") {
      history.push("/Annapoorani");
    }


  if (event.target.value === "Krishna") {
      history.push("/Krishna");
    }

  
  if (event.target.value === "Muck Boards") {
      history.push("/Mukk");
    }
  
  
  if (event.target.value === "Plain Boards") {
      history.push("/plain");
    }

  if (event.target.value === "Saibaba") {
      history.push("/Saibaba");
    }

  if (event.target.value === "Saraswathi") {
      history.push("/Saraswathi");
    }
    if (event.target.value === "Sivan Parvathi") {
      history.push("/Sivan");
    }

    if (event.target.value === "Murugar") {
      history.push("/Murugar");
    }

    if (event.target.value === "Wall Plate") {
      history.push("/WallPlate");
    }

  };

  const findImagePrice = (cate,startingSize) => {

    if (cate === 'F') { 
      return props.flatBoardRateExt[startingSize - 1].amount;
    }

    if (cate === 'P') {
      return props.plainBoardRateExt[startingSize - 1].amount;
   }

   if (cate === 'M') {
    return props.mukkBoardRateExt[startingSize - 1].amount;
   }

   if (cate === 'S') {
    return props.semiEmbossedRateExt[startingSize - 1].amount;
   }

  } 

  const productList = props.products.map((indiProduct,d1) => {

    let indiImagePrice = findImagePrice(indiProduct.srtaCat,indiProduct.startingSize);

   return  <div className="css-photo-border " key={d1}>
      <figure className="css-photo-img">
        <img src={indiProduct.headerImageLink} alt="Fashion" />
      </figure>

      <h3>{indiProduct.imageHeading}</h3>
      <div>From ₹{priceFormating(indiImagePrice)}</div>

      <div
        className="css-photo-cart-cover css-flex-space"
        onClick={(e) =>
          handleDetailClick(
            indiProduct.imageLink,
            indiProduct.imageHeading,
            indiImagePrice,
            indiProduct.imageTag,
            indiProduct.startingSize,
            indiProduct.endingSize,
            indiProduct.disPer,
            indiProduct.srtaCat
          )
        }
      >
        <div className="css-photo-star"></div>

        <div className="css-photo-plus-cart-button css-colour-2-backg css-flex-space ">
          <p>Details</p>
          <div className="css-photo-plus-cart-plus css-colour-2-backg-light css-flex-space">
            <i className="css-icon-border-line">
              {" "}
              <ion-icon name="enter-sharp"></ion-icon>
            </i>
          </div>
        </div>
      </div>
    </div>
  });


  return (
    <div>
      <div className="str-body">
        <div className="">
          <div className="str-body" id="productDetail">
            <div className="css-photos-wrap-products css-extract-cover-cof">
              <div className="container css-flex-space">
                <div className="css-cof-scroll-cover css-desktop-only">
                  <div className="">
                    <div className="css-temp1-products-head css-flex-space">
                      <h2>Sub Menu</h2>
                    </div>
                    <div className="">
                      <div className="css-cof-but-in ">
                  <h6>Products</h6>
                        <div className="css-cof-main-mov">
                          <div className="css-cof-disp-1 ">
                            <div
                              className="  collapse"
                              
                            >
                              {" "}
                              <Link to="/all" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                  All Products
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="css-cof-disp-1 ">
                            <div
                              className="  collapse show"
                            
                            >
                              {" "}
                              <Link to="/balaji" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                  Balaji
                                </div>{" "}
                              </Link>
                            </div>
                          </div>
                          <div className="css-cof-disp-1 ">
                            <div
                              className=" collapse "
                             
                            >
                              {" "}
                              <Link to="/ganesha" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                  Ganesha
                                </div>{" "}
                              </Link>
                            </div>
                          </div>
                          <div className="css-cof-disp-1 ">
                            <Link to="/lakshmi" className="css-bk-black">
                              <div className="css-cof-dissub css-first-color-backg-a1 ">
                                Lakshmi
                              </div>
                            </Link>
                          </div>
                          <div className="css-cof-disp-1 ">
                            <Link to="/embossed" className="css-bk-black">
                              <div className="css-cof-dissub css-colol1-bg--active  ">
                                Semi Embossed
                              </div>
                            </Link>
                          </div>
                          <div className="css-cof-disp-1 ">
                            <div
                              className=" collapse "
                              
                            >
                              {" "}
                              <Link to="/Gifts" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                  Gifts
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="css-cof-disp-1 ">
                            <div
                              className=" collapse"
                              
                            >
                              {" "}
                              <Link to="/Amman" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active ">
                                  Amman
                                </div>
                              </Link>
                            </div>
                          </div>
                          
                          <div className="css-cof-disp-1 ">
                            <div
                              className=" collapse "
                              
                            >
                              {" "}
                              <Link to="/Annapoorani" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active ">
                                Annapoorani
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="css-cof-disp-1 ">
                            <div
                              className=" collapse "
                              
                            >
                              {" "}
                              <Link to="/Krishna" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                Krishna
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="css-cof-disp-1 ">
                            <div
                              className=" collapse  "
                              
                            >
                              {" "}
                              <Link to="/mukk" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                Muck Boards
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="css-cof-disp-1 ">
                            <div
                              className=" collapse "
                              
                            >
                              {" "}
                              <Link to="/plain" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                Plain Boards
                                </div>
                              </Link>
                            </div>
                          </div>




                          <div className="css-cof-disp-1 ">
                            <div
                              className=" collapse  "
                              
                            >
                              {" "}
                              <Link to="/Saibaba" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                Saibaba
                                </div>
                              </Link>
                            </div>
                          </div>



                          <div className="css-cof-disp-1 ">
                            <div
                              className=" collapse  "
                              
                            >
                              {" "}
                              <Link to="/Saraswathi" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                Saraswathi
                                </div>
                              </Link>
                            </div>
                          </div>

                          
                          <div className="css-cof-disp-1 ">
                            <div
                              className=" collapse  "
                              
                            >
                              {" "}
                              <Link to="/Sivan" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                Sivan Parvathi
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="css-cof-disp-1 ">
                            <div
                              className=" collapse  "
                              
                            >
                              {" "}
                              <Link to="/Murugar" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                Murugar
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="css-cof-disp-1 ">
                            <div
                              className=" collapse  "
                              
                            >
                              {" "}
                              <Link to="/WallPlate" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                Wall Plate
                                </div>
                              </Link>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="css-cof-final-cover">
                  <div className="css-CategoriesSelect">
                    <div className="">
                      <div className="css-cof-but-in ">
                  <h6>Products</h6>

                        <div className=" css-scroll-below css-border-cover css-data-intial css-spot-det">
                          <div className="">
                            <select
                              className="css-select-input"
                              value={categories}
                              onChange={handleCategoryClick}
                            >
                              <option value="All Products">All Products</option>
                              <option value="Balaji">Balaji</option>
                              <option value="Ganesha">Ganesha</option>
                              <option value="Lakshmi">Lakshmi</option>
                              <option value="Semi Embossed">
                                Semi Embossed
                              </option>
                              <option value="Gifts">Gifts</option>
                              <option value="Amman">Amman</option>
                              <option value="Annapoorani">Annapoorani</option>
                              <option value="Krishna">Krishna</option>
                              <option value="Muck Boards">Muck Boards</option>
                              <option value="Plain Boards">Plain Boards</option>
                              <option value="Saibaba">Saibaba</option>
                              <option value="Saraswathi">Saraswathi</option>
                              <option value="Sivan Parvathi">Sivan Parvathi</option> 
                              <option value="Murugar">Murugar</option> 
                              <option value="Wall Plate">Wall Plate</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

              
                  <div className="css-cof-finals-deep css-iphone-onebyone">
                    <div className="css-temp1-products-head css-temp1-products-head-comp css-flex-space ">
                      <h2 className="">
                      Lakshmi <small></small>
                      </h2>
                    </div>

                    <div className="css-cof-exams-sticker css-flex-space "></div>

                    <div className="css-photos-cover css-flex-space ">
                      {productList}
                    </div>

                    <div infinitescroll=""></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-bottombar-wrap CSS-desktop-hide">
          <div className="navbar-bottombar-menu css-nav-flex ng-star-inserted">
            <div className="navbar-bottombar-menu-link primary-color-bg--active--after primary-color-txt--active primary-color-fill ">
              <Link
                className="css-ship-touch"
                queryparamshandling="merge"
                to="/"
              >
                <ion-icon name="home-outline"></ion-icon>
    
              <p>Home</p>
              </Link>
            </div>
            <div className="navbar-bottombar-menu-link primary-color-bg--active--after primary-color-txt--active primary-color-fill active">
            <Link className="css-ship-touch" to="/all">
        <ion-icon name="brush-outline"></ion-icon>

    
              <p>Shop</p>
              </Link>
            </div>
            <div className="navbar-bottombar-menu-link primary-color-bg--active--after primary-color-txt--active primary-color-fill">
            <Link
        className="css-ship-touch"
        queryparamshandling="merge"
        to="/basket"
        
      >
        <ion-icon name="cart-outline"></ion-icon>
    
      
              <p>Basket</p>
              </Link>
            </div>
            <div className="navbar-bottombar-menu-link primary-color-bg--active--after primary-color-txt--active primary-color-fill">
            <Link
        className="css-ship-touch"
        queryparamshandling="merge"
        to="/orders"
        
      >
        <ion-icon name="cash-outline"></ion-icon>
    
              <p>Order Status</p>
              </Link>
            </div>
 
          </div>
        </div>
     
  

     
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    renderUiPage: state.pageTag.uiPage,
    renderUiShop: state.pageTag.uiShop,
    products: state.lakExt,
    flatBoardRateExt: state.flatBoardRateExt,
    mukkBoardRateExt: state.mukkBoardRateExt,
    plainBoardRateExt: state.plainBoardRateExt,
    semiEmbossedRateExt: state.semiEmbossedRateExt,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateData: (imageLink, imageHeading, imagePrice,imageTag,startingSize,endingSize,disPer,srtaCat) =>
      dispatch(actions.updateData(imageLink, imageHeading, imagePrice,imageTag,startingSize,endingSize,disPer,srtaCat))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Lakshmi)
);
