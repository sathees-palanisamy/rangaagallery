import React, { useState,useEffect } from "react";
import { connect } from 'react-redux';
import { useLocation } from "react-router-dom";
import { withRouter } from 'react-router';
import * as actions from '../../Store/actions';
import { Link } from "react-router-dom";


function Orders(props) {

  const { pathname } = useLocation();

  const [mobileNo, setmobileNo] = useState(props.renderInputMobileNo);
  const [OrderID, setOrderID] = useState(props.renderInputOrderNo);
  const [formError, setformError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


 
let uiRender;
let formDet;
let orderRender;
let orderTrailer;
let orderStatusBar;


const handleSubmit = () => {

  let tempformValidSuc = true;


  if (mobileNo ===  '') {
    tempformValidSuc = false
    setformError('Mobile number is Mandatory');
  } 

  if (OrderID ===  '') {
    tempformValidSuc = false
    setformError('Order ID is Mandatory');
  } 

  if (tempformValidSuc) {
    setformError('');
  props.checkOrders(OrderID,mobileNo);
  }

}

if (props.renderSearchOrder.status === "Board Preparation" ) {
  orderStatusBar =           <ul className="progressbar">
  <li className="active">Board Preparation</li>
  <li>sketch in progress</li>
  <li>Stone Work</li>
  <li>Mukk work</li>
  <li>Gold Foil</li>
  <li>Coloring Work</li>
  <li>Framing</li>
  <li>Shipping</li>
  <li>Delivered</li>
</ul>
}

if (props.renderSearchOrder.status === "sketch in progress" ) {
  orderStatusBar =           <ul className="progressbar">
  <li className="active">Board Preparation</li>
  <li className="active"> sketch in progress</li>
  <li>Stone Work</li>
  <li>Mukk work</li>
  <li>Gold Foil</li>
  <li>Coloring Work</li>
  <li>Framing</li>
  <li>Shipping</li>
  <li>Delivered</li>
</ul>
}

if (props.renderSearchOrder.status === "Stone Work" ) {
  orderStatusBar =           <ul className="progressbar">
  <li className="active">Board Preparation</li>
  <li className="active"> sketch in progress</li>
  <li className="active">Stone Work</li>
  <li>Mukk work</li>
  <li>Gold Foil</li>
  <li>Coloring Work</li>
  <li>Framing</li>
  <li>Shipping</li>
  <li>Delivered</li>
</ul>
}

if (props.renderSearchOrder.status === "Mukk work" ) {
  orderStatusBar =           <ul className="progressbar">
  <li className="active">Board Preparation</li>
  <li className="active"> sketch in progress</li>
  <li className="active">Stone Work</li>
  <li className="active">Mukk work</li>
  <li>Gold Foil</li>
  <li>Coloring Work</li>
  <li>Framing</li>
  <li>Shipping</li>
  <li>Delivered</li>
</ul>
}

if (props.renderSearchOrder.status === "Gold Foil" ) {
  orderStatusBar =           <ul className="progressbar">
  <li className="active">Board Preparation</li>
  <li className="active"> sketch in progress</li>
  <li className="active">Stone Work</li>
  <li className="active">Mukk work</li>
  <li className="active">Gold Foil</li>
  <li>Coloring Work</li>
  <li>Framing</li>
  <li>Shipping</li>
  <li>Delivered</li>
</ul>
}

if (props.renderSearchOrder.status === 'Coloring Work' ) {
  orderStatusBar =           <ul className="progressbar">
  <li className="active">Board Preparation</li>
  <li className="active"> sketch in progress</li>
  <li className="active">Stone Work</li>
  <li className="active">Mukk work</li>
  <li className="active">Gold Foil</li>
  <li className="active">Coloring Work</li>
  <li>Framing</li>
  <li>Shipping</li>
  <li>Delivered</li>
</ul>
}

if (props.renderSearchOrder.status === "Framing" ) {
  orderStatusBar =           <ul className="progressbar">
  <li className="active">Board Preparation</li>
  <li className="active"> sketch in progress</li>
  <li className="active">Stone Work</li>
  <li className="active">Mukk work</li>
  <li className="active">Gold Foil</li>
  <li className="active">Coloring Work</li>
  <li className="active">Framing</li>
  <li>Shipping</li>
  <li>Delivered</li>
</ul>
}

if (props.renderSearchOrder.status === "Shipping" ) {
  orderStatusBar =           <ul className="progressbar">
  <li className="active">Board Preparation</li>
  <li className="active"> sketch in progress</li>
  <li className="active">Stone Work</li>
  <li className="active">Mukk work</li>
  <li className="active">Gold Foil</li>
  <li className="active">Coloring Work</li>
  <li className="active">Framing</li>
  <li className="active">Shipping</li>
  <li>Delivered</li>
</ul>
}

if (props.renderSearchOrder.status === "Delivered" ) {
  orderStatusBar =           <ul className="progressbar">
  <li className="active">Board Preparation</li>
  <li className="active"> sketch in progress</li>
  <li className="active">Stone Work</li>
  <li className="active">Mukk work</li>
  <li className="active">Gold Foil</li>
  <li className="active">Coloring Work</li>
  <li className="active">Framing</li>
  <li className="active">Shipping</li>
  <li className="active">Delivered</li>
</ul>
}


orderTrailer =    <div className="iconDisplay">




<div className="css-final-det">
              <div className="css-final-det-title css-flex-space">
                <h3>Shipping Time</h3>
              </div>

              <div className="css-final-det-address-wrap">
                <div className="css-final-det-address">
                  <p>Within Chennai => 2 days</p>
                  <p>Within Tamil Nadu => 3 days</p>
                  <p>Metro to Metro => 3 to 4 days</p>
                  <p>Rest of India => 4 to 5 days</p>
                  <p>North east & Jammu => 6 to 7 days</p>
                </div>
              </div>
              <br></br>
            </div>

            <div className="css-final-det">
              <div className="css-final-det-title css-flex-space">
                <h3>Processing Time:</h3>
              </div>

              <div className="css-final-det-address-wrap">
                <div className="css-final-det-address">
                  <p>
                  All the Paintings are made to order, depending upon the size delivery time will vary . We will ensure that the products are delivered in excellent condition and in the fastest time possible. Minimum processing time will be 30 days.
                  </p>
                </div>
              </div>
            </div>

            <div className="css-final-det">
              <div className="css-final-det-title css-flex-space">
                <h3>Contact us</h3>
              </div>

              <div className="css-final-det-address-wrap">
                <div className="css-final-det-address">
                  <a href="https://wa.me/917200200733" className="whatsupplink">
                    WhatsApp Chat
                  </a>

                  <span>
                    <i className="ion-md-call icon-small"></i>
                    <span>+91 7200200733</span>
                  </span>
                </div>
              </div>
            </div>

</div>

if (props.renderSearchError ===  '1') {

  if (mobileNo ===  props.renderSearchOrder.Mobileno) {
orderRender = <div className="section-plans" key={props.renderSearchOrder.orderid}>

<div className="row row1" >

    <div className="col col1 col-width-1">





    </div>
    <div className="col col1 col-width-2">
        <div className="plan-box">
            <div>
                <div className="iconDisplay">
                    <span className="plan-price ">Order Id:<span className="orderColor"><b>{props.renderSearchOrder.orderid}</b> </span></span><span className="plan-price">Name:<span className="orderColor"><b>{props.renderSearchOrder.name}</b>   </span> </span>
                </div>

                <div className="historyDet">
                    <ul className="iconDisplay">
                        <li>Email  : {props.renderSearchOrder.Mail} ,</li>
                        <li>Mobile :{props.renderSearchOrder.Mobileno} ,</li>
                        <li>Status :{props.renderSearchOrder.status} ,</li>
                        <li>Paid   :{props.renderSearchOrder.paid} ,</li>
                        <li>Total  :{props.renderSearchOrder.totalamt} ,</li>
                        <li>Unpaid :{props.renderSearchOrder.pendingamt},</li>
                        <li>Order Date :{props.renderSearchOrder.orderDate},</li>
                        <li>Customer collection :{props.renderSearchOrder.collection === 'true' ? 'Yes' : 'No'}</li>
                    </ul>
                </div>

             
                </div>
            </div>

         
        </div>

    
      
    </div>

 <div className="row row1" > 
 <div>
     {orderStatusBar}
</div>

 </div>
    </div>
  } else {

    orderRender = <div className="row row1" >
    <div className="emailAdd">
    <p>Order not found</p>
    </div>
</div>

  }

    } 

  if (props.renderSearchError === '2') {

        orderRender = <div className="row row1" >
            <div className="emailAdd">
            <p>Internal Server Error</p>
            </div>
        </div>

      } 

  if (props.renderSearchError === '3') {


    if ((OrderID) && (mobileNo) ){

        orderRender = <div className="row row1" >
            <div className="emailAdd">
            <p>Order not found</p>
            </div>
        </div>
    }

      } 



formDet = (
  <div>

    <div className="contact-form">
      <div className="row">
        <div className="col span-1-of-3">
          <label>Order Number</label>
        </div>
        <div className="col span-2-of-3">
          <input
            type="text"
            name="OrderID"
            id="OrderID"
            placeholder="Order Number"
            required
            onChange={(e) => setOrderID(e.target.value)}
            value={OrderID}
            className="inputtextform"
          />
        </div>
      </div>

      <div className="row">
        <div className="col span-1-of-3">
          <label>Mobile Number</label>
        </div>
        <div className="col span-2-of-3">
          <input
            type="text"
            name="mobileNo"
            id="mobileNo"
            placeholder="Mobile number"
            required
            onChange={(e) => setmobileNo(e.target.value)}
            value={mobileNo}
            className="inputtextform"
          />
        </div>
      </div>

      <div className="row">
        <div className="col span-1-of-3">
          <label>&nbsp;</label>
        </div>
        <div className="col span-2-of-3">
          <span className="btn btn1-color">
            <div onClick={handleSubmit}>
              Check Status
            </div>
          </span>
        </div>
      </div>

      <div className="row row1">
                  <div className="emailAdd">
                    <p>{formError}</p>
                  </div>
                </div>
    
    </div>
  </div>
);



    uiRender =   <div>
    <div className="css-ship-bottom css-walk-high">
      <div className="css-head-master">
      </div>
    </div>

    <div className="str-body">
    
    
    <div >
        <div className="row">
            
        <div >

        <br></br>

<div className="css-temp1-products-head css-temp1-products-head-comp css-flex-space ">


  <h2 className="">Order Status<small></small></h2>


</div>
</div>
            {formDet}
        </div>
        <br></br>
        <br></br>
        {orderRender}

        <br></br>
        <br></br>
        {orderTrailer}


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
            <div className="navbar-bottombar-menu-link primary-color-bg--active--after primary-color-txt--active primary-color-fill active">
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




return (
    <div>
      {uiRender}

<div className="navbar-bottombar-wrap CSS-desktop-hide">
          <div className="navbar-bottombar-menu css-nav-flex ng-star-inserted">
            <div className="navbar-bottombar-menu-link primary-color-bg--active--after primary-color-txt--active primary-color-fill">
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
            <div className="navbar-bottombar-menu-link primary-color-bg--active--after primary-color-txt--active primary-color-fill active">
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
      renderOrders: state.pageTag.order,
      renderSearchOrder: state.pageTag.searchOrder1,
      renderSearchError: state.pageTag.searchError,
      renderInputOrderNo: state.pageTag.searchInputOrderId,
      renderInputMobileNo: state.pageTag.searchInputMobileNO,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      checkOrders: (OrderSearch,mobileNoSearch) => dispatch(actions.checkOrders(OrderSearch,mobileNoSearch)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Orders));

