import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/actions";


function OrderImageRender(props) {

  const [updateOrders, setupdateOrders] = useState([...props.renderOrders]);
    let orderRender;
    
    const removeItem = (index) => {
      let newArray = [];

      for (let i = 0; i < updateOrders.length; i++) {
        if (i !== index) {
          newArray.push(updateOrders[i]);
        }
      }
  
      setupdateOrders([...newArray]);
  
      props.updateBasket([...newArray]);
    };


    if (props.basketState) {
        orderRender = updateOrders.map((indiOrder, index) => (
          <div className="css-lay-cart-photo" key={index}>
            <div className="detail-flex">
              <div className="order-photo">
                {" "}
                <img src={indiOrder.imageLink}  alt=""/>{" "}
              </div>
              <div className="col-fex">
                <span>{indiOrder.imageHeading}</span>
                <span>{indiOrder.frameSize}</span>
                <span>Quantity:{indiOrder.quantity}</span>
              </div>
              <div className="col-fex price-color">
                ₹ {props.priceFormating(indiOrder.imagePrice * indiOrder.quantity)}
              </div>
            </div>
            <br></br>
          </div>
        ));
      } else {
        orderRender = updateOrders.map((indiOrder, index) => (
          <div className="css-lay-cart-photo" key={index}>
            <div className="detail-flex">
              <div className="order-photo">
                {" "}
                <img src={indiOrder.imageLink} alt=""/>{" "}
              </div>
              <div className="col-fex">
                <span>{indiOrder.imageHeading}</span>
                <span>{indiOrder.frameSize}</span>
                <span>Quantity:{indiOrder.quantity}</span>
                <button onClick={(e) => removeItem(index)}>Remove</button>
              </div>
              <div className="col-fex price-color">
                ₹ {props.priceFormating(indiOrder.imagePrice * indiOrder.quantity)}
              </div>
            </div>
            <br></br>
          </div>
        ));
      }

return (<div>
        {orderRender}
    </div>


    );

}

const mapStateToProps = (state) => {
  return {
    renderOrders: state.pageTag.order,
    customerName: state.pageTag.customerName,
    emailAddress: state.pageTag.emailAddress,
    message: state.pageTag.message,
    mobileNo: state.pageTag.mobileNo,
    appointment: state.pageTag.appointment,
    house: state.pageTag.house,
    addline1: state.pageTag.addline1,
    addline2: state.pageTag.addline2,
    postcode: state.pageTag.postcode,
    city: state.pageTag.city,
    state: state.pageTag.state,
    OrderID: state.pageTag.OrderID,
    basketState: state.pageTag.basketState,
    FetchError: state.pageTag.FetchError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateBasket: (newOrders) => dispatch(actions.updateBasket(newOrders)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderImageRender);