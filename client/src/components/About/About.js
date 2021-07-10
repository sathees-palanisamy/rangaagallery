import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../../Store/actions';
import { Link } from "react-router-dom";


function Contact(props) {
 
let uiRender;
let orderTrailer;



orderTrailer =              uiRender = <div className="section-form">

<div className="section-steps">

<div className="row">

 <div className="col span-2-of-5 steps-box">

    <img src="assets/Photos/about.jpg" alt="" className="app-screen1"/>

 </div>

 <div className="col span-3-of-5 steps-box">
    <br></br>
    <br></br>
    <div className="works-step clearfix">
       <h4>Who are we:</h4>
       <p>
       We are skilled artisans with 17 years of experience. Our Tanjore paintings are made by skilled artisans with lot of dedication which will last for many generations. 
        </p>
        <br></br>
        <p>
        www.rangaa.in is an online business of Shri Rangaa Tanjore Art Gallery  a upcoming manufacturer of Tanjore Paintings and wall plates fusion with Tanjore paintings. It is an initiative to reach the customers directly without any middlemen or agents. 
        </p>
        <br></br>
        <p>
        After serving our customers for years through our traditional offerings, we now bring the same assurance of quality and service to our Online Channel.
        </p>
    </div>

    <p>&nbsp;</p>

    <div className="works-step clearfix">
       <h4>What:</h4>
       <p>
       Tanjore painting is a classical south Indian painting style, which was inaugurated from the town of Thanjavur in the period of Nayakas in 16th century.The beauty and uniqueness of Tanjore paintings lies in the use of 22 carat gold foil and natural colors applied for colouring purpose along with semi previous stones.
       </p>
    </div>

    <p>&nbsp;</p>

    <div className="works-step clearfix">
       <h4>Where:</h4>
       <p>
       We can deliver to all over India.
        </p>
    </div>

    <p>&nbsp;</p>

    <div className="works-step clearfix">
       <h4>Privacy Policy :</h4>
       <p>
       We are making sure to follow the privacy policy of India and ensure to protect the customer data.
       </p>
    </div>

 </div>
</div>
</div>

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


  <h2 className="">About Us<small></small></h2>


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

