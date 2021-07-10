import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../Store/actions";
import { withRouter } from "react-router";
import { useHistory, Link } from "react-router-dom";
import InnerImageZoom from "react-inner-image-zoom";

function Details(props) {
  const { pathname } = useLocation();
  const history = useHistory();

  window.onload = function () {
    history.goBack();
  };

  const priceFormating = (inputPrice) => {
    var x = inputPrice;
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers !== "") lastThree = "," + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

    return res;
  };

  const [price, setPrice] = useState(priceFormating(props.imagePrice));
  const [disPrice, setDisPrice] = useState(priceFormating(0));
  const [priceCat, setPriceCat] = useState();
  const [frameSize, setFrameSize] = useState();
  const [nonFormatPrice, setNonFormatPrice] = useState(props.imagePrice);
  const [quantity, setQuantity] = useState(1);
  const [categories, setCategories] = useState("Select");
  const [message, setmessage] = useState("");
  const [checkedFlag, setCheckedFlag] = useState(false);
  const [rateList, setRatelist] = useState([]);

  const optionList = rateList.map((indiProduct, d1) => {
    if (indiProduct.sizeIndicator >= props.startingSize) {
      if (indiProduct.sizeIndicator <= props.endingSize) {
        return (
          <option value={indiProduct.sizeIndicator} key={d1}>
            {indiProduct.size}
          </option>
        );
      }
    }
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    let newRateList = [];
    if (props.srtaCat === "F") {
      newRateList = [...props.flatBoardRateExt];
      setRatelist([...props.flatBoardRateExt]);
    }

    if (props.srtaCat === "P") {
      newRateList = [...props.plainBoardRateExt];
      setRatelist([...props.plainBoardRateExt]);
    }

    if (props.srtaCat === "M") {
      newRateList = [...props.mukkBoardRateExt];
      setRatelist([...props.mukkBoardRateExt]);
    }

    if (props.srtaCat === "S") {
      newRateList = [...props.semiEmbossedRateExt];
      setRatelist([...props.semiEmbossedRateExt]);
    }

    if (props.srtaCat === "Y") {
      newRateList = [...props.PichwaiWallRateExt];
      setRatelist([...props.PichwaiWallRateExt]);
    }

    if (props.srtaCat === "W") {
      newRateList = [...props.MuralWallRateExt];
      setRatelist([...props.MuralWallRateExt]);
    }

    if (props.srtaCat === "A") {
      newRateList = [...props.squareMukkRateExt];
      setRatelist([...props.squareMukkRateExt]);
    }

    let newPrice = newRateList[props.startingSize - 1].amount;
    let newDisPrice = newRateList[props.startingSize - 1].disAmount;
    let newFrameSize = newRateList[props.startingSize - 1].size;

    setFrameSize(newFrameSize);
    setPrice(priceFormating(newPrice));
    setDisPrice(priceFormating(newDisPrice));
    setNonFormatPrice(newPrice);
    


  }, [pathname]);

  const handleBackClick = (event) => {
    history.goBack();
  };

  const priceChange = (event) => {
    setPriceCat(event.target.value);

    let newPrice = rateList[event.target.value - 1].amount;
    let newDisPrice = rateList[event.target.value - 1].disAmount;
    let newFrameSize = rateList[event.target.value - 1].size;

    setFrameSize(newFrameSize);
    setPrice(priceFormating(newPrice));
    setDisPrice(priceFormating(newDisPrice));
    setNonFormatPrice(newPrice);
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

  const handleBasketClick = (e) => {
    props.addBasket(
      props.imageLink,
      props.imageHeading + ",ID:" + props.imageTag,
      nonFormatPrice,
      frameSize,
      quantity,
      message
    );
  };

  let customTextBox;

  if (checkedFlag) {
    customTextBox = (
      <div className="col span-2-of-3">
        <textarea
          placeholder="Your Requirement"
          onChange={(e) => setmessage(e.target.value)}
          value={message}
          className="inputtextform"
        ></textarea>
      </div>
    );
  }

  var productDes;

  if (props.srtaCat === "Y" || props.srtaCat === "W") {
    productDes = (
      <div>
        <br></br>
        <div className="works-step clearfix">
          <h3>About:</h3>
          <p>
          Beautiful hand painted pichwai and kerala mural plate paintings add more beauty to the walls. It can be hanged on wall as well as can be kept on table or showcase. It is the best gifting option to your loved ones on special occassion. Could be wiped with dry cotton cloth.
          </p>
        </div>

        <p>&nbsp;</p>

        <div className="works-step clearfix">
          <h3>Materials:</h3>
          <p>
          Melamine plate,Colors and Acrylic 
          </p>
        </div>

      </div>
    );
  } else {
    productDes = (
      <div>
        <br></br>
        <div className="works-step clearfix">
          <h3>About:</h3>
          <p>
            This Painting is 100% handmade with original 22 carat gold leaves
            and authentic Jaipur gems by skilled artisans in Thanjavur.
            Beautiful gift for any auspicious occasion.
          </p>
        </div>

        <p>&nbsp;</p>

        <div className="works-step clearfix">
          <h3>Materials:</h3>
          <p>
            22 Carat Original Gold Foils, Water Resistant Plywood, Cloth,
            paints, authentic Jaipur gem stones, Arabic gum and chalk powder.
          </p>
        </div>

        <p>&nbsp;</p>

        <div className="works-step clearfix">
          <h3>Frame:</h3>
          <p>
            Traditional Chettinad Teak Wood frame and Unbreakable fiberglass.
            Color: Multicolor.
          </p>
        </div>

        <br></br>
        <div className="works-step clearfix">
          <h3>Ideal for:</h3>
          <p>Pooja rooms</p>
          <p>Home Main Entrance</p>
          <p>Pooja Doors</p>
          <p>Waiting Halls</p>
          <p>Office reception</p>
          <p>Staircase wall</p>
          <p>Study room</p>
          <p>Sit-out area</p>
          <p>Lobby Area</p>
        </div>
        <br></br>

        <div className="works-step clearfix">
          <h3>Gifting Ideas:</h3>
          <p>Wedding function</p>
          <p>House Warming</p>
          <p>Success Greeting</p>
          <p>New year gift</p>
          <p>Diwali gift</p>
          <p>Bon-voyage greetings</p>
          <p>Retirement Gifts</p>
          <p>Pongal Celebration Gifts</p>
          <p>Retirement Gifts</p>
        </div>
        <br></br>

        <div>
          <img
            className="message-photo"
            src="assets/Photos/message.jpg"
            alt="Fashion"
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div>
          <div>
            <div className="css-photos-wrap-products css-extract-cover-cof">
              <div className="container css-flex-space">
                <div className="css-cof-scroll-cover css-desktop-only">
                  <div>
                    <div className="css-temp1-products-head css-flex-space">
                      <h2>Sub Menu</h2>
                    </div>
                    <div>
                      <div className="css-cof-but-in ">
                        <h6>Products</h6>
                        <div className="css-cof-main-mov">
                          <div className="css-cof-disp-1 ">
                            <div className="  collapse">
                              {" "}
                              <Link to="/all" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active ">
                                  All Products
                                </div>
                              </Link>
                            </div>
                          </div>
                          <div className="css-cof-disp-1 ">
                            <div className="  collapse show">
                              {" "}
                              <Link to="/balaji" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                  Balaji
                                </div>{" "}
                              </Link>
                            </div>
                          </div>
                          <div className="css-cof-disp-1 ">
                            <div className=" collapse ">
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
                              <div className="css-cof-dissub css-colol1-bg--active  ">
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
                            <div className=" collapse ">
                              {" "}
                              <Link to="/Gifts" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                  Gifts
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="css-cof-disp-1 ">
                            <div className=" collapse">
                              {" "}
                              <Link to="/Amman" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active ">
                                  Amman
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="css-cof-disp-1 ">
                            <div className=" collapse ">
                              {" "}
                              <Link to="/Annapoorani" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active ">
                                  Annapoorani
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="css-cof-disp-1 ">
                            <div className=" collapse ">
                              {" "}
                              <Link to="/Krishna" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                  Krishna
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="css-cof-disp-1 ">
                            <div className=" collapse  ">
                              {" "}
                              <Link to="/mukk" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                  Muck Boards
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="css-cof-disp-1 ">
                            <div className=" collapse ">
                              {" "}
                              <Link to="/plain" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                  Plain Boards
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="css-cof-disp-1 ">
                            <div className=" collapse  ">
                              {" "}
                              <Link to="/Saibaba" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                  Saibaba
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="css-cof-disp-1 ">
                            <div className=" collapse  ">
                              {" "}
                              <Link to="/Saraswathi" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                  Saraswathi
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="css-cof-disp-1 ">
                            <div className=" collapse  ">
                              {" "}
                              <Link to="/Sivan" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                  Sivan Parvathi
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="css-cof-disp-1 ">
                            <div className=" collapse  ">
                              {" "}
                              <Link to="/Murugar" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active  ">
                                  Murugar
                                </div>
                              </Link>
                            </div>
                          </div>

                          <div className="css-cof-disp-1 ">
                            <div className=" collapse  ">
                              {" "}
                              <Link to="/WallPlate" className="css-bk-black">
                                <div className="css-cof-dissub css-colol1-bg--active   ">
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
                    <div>
                      <div className="css-cof-but-in ">
                        <h6>Products</h6>

                        <div className=" css-scroll-below css-border-cover css-data-intial css-spot-det">
                          <div>
                            <select
                              className="css-select-input"
                              value={categories}
                              onChange={handleCategoryClick}
                            >
                              <option value="Select">Select</option>
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
                              <option value="Sivan Parvathi">
                                Sivan Parvathi
                              </option>
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
                      <h2>
                        {props.imageHeading} <small></small>
                      </h2>
                    </div>

                    <div className="detail-flex desktop-view-product">
                      <div className="col span-1-of-2 steps-box">
                        <InnerImageZoom src={props.imageLink} />
                      </div>
                      <div className="col span-1-of-2 steps-box">
                        <div className="price clearfix detail-flex">
                          <h3>₹ {price}</h3>
                    
                         {disPrice === '0'? null:<del className="css-del"><h3>₹ {disPrice}</h3></del> }
                        </div>
                        <br></br>

                        <div>
                          <div></div>
                          <div>
                            <span className="selectLabel">Size with frame</span>
                            
                            <select
                              className="css-select-input"
                              value={priceCat}
                              onChange={priceChange}
                            >
                              {optionList}
                            </select>
                          </div>
                          <br></br>
                          <div>
                            <span className="selectLabel">Quantity</span>
                            <select
                              className="css-select-input quantitySize"
                              value={quantity}
                              onChange={(event) =>
                                setQuantity(event.target.value)
                              }
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>
                          <br></br>
                          <div className="row">
                            <div className="col span-1-of-3">
                              <input
                                type="checkbox"
                                checked={checkedFlag}
                                onChange={(e) => setCheckedFlag(!checkedFlag)}
                              />
                              <label>Custom requirement?(optional)</label>
                            </div>
                            {customTextBox}
                          </div>
                        </div>
                        <p>&nbsp;</p>

                        <br></br>
                        <div className="detail-flex">
                          <div onClick={handleBackClick}>
                            <span className="btn btn1-color">
                              Continue Shopping
                            </span>
                          </div>

                          <div onClick={handleBasketClick}>
                            <span className="btn btn2-color">
                              Add To Basket
                            </span>
                          </div>
                        </div>
                        <br></br>
                        {productDes}
                      </div>
                    </div>

                    <div className="mobile-view-product">
                      <div className="row steps-box">
                        <InnerImageZoom src={props.imageLink} />
                      </div>
                      <div className="row steps-box">
                      <div className="price clearfix detail-flex">
                          <h3>₹ {price}</h3>
  
                          {disPrice === '0'? null:<del className="css-del"><h3>₹ {disPrice}</h3></del> }
                        </div>
                        <br></br>

                        <div>
                          <div></div>
                          <div>
                            <span className="selectLabel">Size with frame</span>
                            <select
                              className="css-select-input"
                              value={priceCat}
                              onChange={priceChange}
                            >
                              {optionList}
                            </select>
                          </div>
                          <br></br>
                          <div>
                            <span className="selectLabel">Quantity</span>
                            <select
                              className="css-select-input quantitySize"
                              value={quantity}
                              onChange={(event) =>
                                setQuantity(event.target.value)
                              }
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>
                          <br></br>
                          <div className="row">
                            <div className="col span-1-of-3">
                              <input
                                type="checkbox"
                                checked={checkedFlag}
                                onChange={(e) => setCheckedFlag(!checkedFlag)}
                              />
                              <label>Custom requirement?(optional)</label>
                            </div>
                            {customTextBox}
                          </div>
                        </div>
                        <p>&nbsp;</p>

                        <br></br>
                        <div className="detail-flex">
                          <div onClick={handleBackClick}>
                            <span className="btn btn1-color">
                              Continue Shopping
                            </span>
                          </div>

                          <div onClick={handleBasketClick}>
                            <span className="btn btn2-color">
                              Add To Basket
                            </span>
                          </div>
                        </div>
                        <br></br>
                        {productDes}
                      </div>
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
            <Link className="css-ship-touch" queryparamshandling="merge" to="/">
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
    imageLink: state.pageTag.imageLink,
    imageHeading: state.pageTag.imageHeading,
    imagePrice: state.pageTag.imagePrice,
    imageTag: state.pageTag.imageTag,
    startingSize: state.pageTag.startingSize,
    endingSize: state.pageTag.endingSize,
    disPer: state.pageTag.disPer,
    srtaCat: state.pageTag.srtaCat,
    flatBoardRateExt: state.flatBoardRateExt,
    mukkBoardRateExt: state.mukkBoardRateExt,
    plainBoardRateExt: state.plainBoardRateExt,
    semiEmbossedRateExt: state.semiEmbossedRateExt,
    PichwaiWallRateExt: state.PichwaiWallRateExt,
    MuralWallRateExt: state.MuralWallRateExt,
    squareMukkRateExt: state.squareMukkRateExt
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBasket: (
      imageLink,
      imageHeading,
      imagePrice,
      frameSize,
      quantity,
      message
    ) =>
      dispatch(
        actions.addBasket(
          imageLink,
          imageHeading,
          imagePrice,
          frameSize,
          quantity,
          message
        )
      ),
    switchToShopPage: () => dispatch({ type: "SWITCH_TO_SHOP" }),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Details)
);
