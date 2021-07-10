import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../../Store/actions';
import { Link } from "react-router-dom";

function Contact(props) {
 
let uiRender;
let orderTrailer;



orderTrailer =              uiRender = <div className="section-form">
  <br></br>
<div className="row">
    <h3>We're happy to hear from you</h3>
</div>
<br></br>
<div className="row">
<div className="col span-1-of-2 box">
     <span className="contact-detail">
          <p><b>Address:</b></p>
          <p>No. 5/286 B,Vivekanda street</p>
          <p>Lakshmi Avenue</p>
          <p>Okkiyam Pettai</p>
          <p>OMR,Chennai</p>
          <p>TamilNadu, India - 600097</p>
      </span>
</div>
<div className="col span-1-of-2">
<span className="contact-detail">
<a href="https://wa.me/917200200733" className="whatsupplink">WhatsApp Chat</a>
</span>
<span className="contact-detail">
<i className="ion-md-call icon-small contact-detail2"></i>
         <span>&nbsp;&nbsp;&nbsp;+91 7200200733</span>
</span>
<span className="contact-detail">
  <p>
<i className="ion-ios-mail icon-small contact-detail2"></i>
&nbsp;&nbsp;&nbsp;&nbsp;shrirangaagallery@gmail.com
</p>
</span>
</div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>

<br></br>
<br></br>

<br></br>
<br></br>

<br></br>
<br></br>

<br></br>
<br></br>



</div>




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


  <h2 className="">Contact Details<small></small></h2>


</div>
</div>
        </div>
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




return (
    uiRender
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Contact));

