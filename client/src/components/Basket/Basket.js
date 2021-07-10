import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";
import EmptyBasket from "./EmptyBasket";
import OrderHeader from "./OrderHeader";
import OrderTrailer from "./OrderTrailer";
import OrderImageRender from "./OrderImageRender";
import OrderSummaryCom from "./OrderSummaryCom";
import ShippingPage from "./ShippingPage";
import { Link } from "react-router-dom";

function Basket(props) {

  const [categories, setCategories] = useState("Select");
  
  const history = useHistory();

  const priceFormating = (inputPrice) => {
    var x = inputPrice;
    x = x.toString();
    var lastThree = x.substring(x.length - 3);
    var otherNumbers = x.substring(0, x.length - 3);
    if (otherNumbers !== "") lastThree = "," + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

    return res;
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
  };


  let orderRender;
  let orderTrailer;
  let orderHeaderdet;
  let uiRender;
  let formDet;
  let OrderSummary;

  let amountTotal = 0;


  if (props.renderOrders.length > 0) {

    orderRender = <OrderImageRender priceFormating={priceFormating}  />

    for (let i = 0; i < props.renderOrders.length; i++) {
      amountTotal =
        amountTotal +
        parseInt(props.renderOrders[i].imagePrice, 10) *
          parseInt(props.renderOrders[i].quantity, 10);
    }

    orderHeaderdet = <OrderHeader />  
    orderTrailer = <OrderTrailer amountTotal={amountTotal}  priceFormating={priceFormating}/>

  } else {
    orderRender = <EmptyBasket />
  
  }
 


  OrderSummary = <OrderSummaryCom 
                  priceFormating={priceFormating}
                  amountTotal={amountTotal}
                    />
           

  formDet = <ShippingPage 
             amountTotal={amountTotal} 
              />

  uiRender = (
    <div>
      <div className="css-ship-bottom css-walk-high">
        <div className="css-head-master"></div>
      </div>

      <div className="str-body">
        <div>
          <div className="css-CategoriesSelect">
            <br></br>
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
                              <option value="Sivan Parvathi">Sivan Parvathi</option> 
                              <option value="Murugar">Murugar</option> 
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div>
              <br></br>

              <div className="css-temp1-products-head css-temp1-products-head-comp css-flex-space ">
                <h2 className="">
                  Order Details<small></small>
                </h2>
              </div>
            </div>
            <div className="css-lay-cart-cover">
              <br></br>
              {orderHeaderdet}
              <br></br>
              {orderRender}
          
            </div>
            <br></br>
            <br></br>
            {orderTrailer}
          </div>
          
          <br></br>
          <br></br>
         
           {OrderSummary}
          {formDet}
        </div>

        <div infinitescroll=""></div>

      
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
            <div className="navbar-bottombar-menu-link primary-color-bg--active--after primary-color-txt--active primary-color-fill">
            <Link className="css-ship-touch" to="/all">
        <ion-icon name="brush-outline"></ion-icon>

    
              <p>Shop</p>
              </Link>
            </div>
            <div className="navbar-bottombar-menu-link primary-color-bg--active--after primary-color-txt--active primary-color-fill active">
            <Link
        className="css-ship-touch"
        queryparamshandling="merge"
        to="/basket"
        
      >
        <ion-icon name="cart-outline"></ion-icon>
    
      
              <p>Basket</p>
              </Link>
            </div>
            <div className="navbar-bottombar-menu-link primary-color-bg--active--after primary-color-txt--active primary-color-fill ">
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

  return <div> {uiRender}


  </div>;
}

const mapStateToProps = (state) => {
  return {
    renderOrders: state.pageTag.order,
    OrderID: state.pageTag.OrderID,
  };
};


export default withRouter(connect(mapStateToProps)(Basket));
