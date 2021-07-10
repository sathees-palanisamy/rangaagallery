import React from "react";
import { connect } from "react-redux";

function OrderSummaryCom(props) {

    let OrderSummary;
    

    if (!props.appointment) {
        
        if (props.basketState) {
          OrderSummary = (
            <div>
              <div className="row">
                <h2>
                  <u>Order Summary</u>
                </h2>
                <br></br>
              </div>
    
              <div className="button-align">
                <h3>
                  Purchase Order Number:<span className="orderColor"> {props.OrderID}</span>{" "}
                </h3>
                <br></br>
              </div>
    
              <div className="iconDisplay">
                <div className="css-final-det">
                  <div className="css-final-det-title css-flex-space">
                    <h3>Initial payment to start work:</h3>
                  </div>
    
                  <div className="css-final-det-address-wrap">
                    <div className="css-final-det-address">
                      Could you please you pay ₹{" "}
                      <span className="orderColor">
                        <b>
                        {props.priceFormating(props.amountTotal / 2)}
                        </b>
                      </span>{" "}
                      of the actual painting cost in below bank Details.
                      <div>
                        <br></br>
                        <p>Account Name: Shri Rangaa</p>
                        <p>IFSC Code : IFSC0001 </p>
                        <p>Account No : 463846346364638 </p>
                        <p>Bank Name : Chennai </p>
                      </div>
                    </div>
                  </div>
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
    
                <div className="css-final-det">
                  <div className="css-final-det-title css-flex-space">
                    <h3>Shipping Address</h3>
                  </div>
                  <div className="css-final-det-address-wrap">
                    <div className="css-final-det-address">
                      <p>{props.customerName}</p>
                      <p>{props.emailAddress}</p>
                      <p>{props.mobileNo}</p>
                      <p>
                        {props.house},{props.addline1} {props.addline2}
                      </p>
                      <p>{props.postcode}</p>
                      <p>{props.city}</p>
                      <p>{props.state}</p>
                      <p>Customer Message: {props.message}</p>
                    </div>
                  </div>
                </div>
    
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
              </div>
            </div>
          );
        } 
      } else {
        if (props.basketState) {
          OrderSummary = (
            <div>
              <div className="row">
                <h2>
                  <u>Order Summary</u>
                </h2>
                <br></br>
              </div>
    
              <div className="button-align">
                <h3>
                Purchase Order Number:<span className="orderColor"> {props.OrderID}</span>{" "}
                </h3>
                <br></br>
              </div>
    
              <div className="iconDisplay">
                <div className="css-final-det">
                  <div className="css-final-det-title css-flex-space">
                    <h3>Initial payment to start work:</h3>
                  </div>
    
                  <div className="css-final-det-address-wrap">
                    <div className="css-final-det-address">
                      Could you please you pay ₹{" "}
                      <span className="orderColor">
                        <b>
                        {props.priceFormating(props.amountTotal / 2)}
                        </b>
                      </span>{" "}
                      of the actual painting cost in below bank Details.
                      <div>
                        <br></br>
                        <p>Account Name: Shri Rangaa</p>
                        <p>IFSC Code : IFSC0001 </p>
                        <p>Account No : 463846346364638 </p>
                        <p>Bank Name : Chennai </p>
                      </div>
                    </div>
                  </div>
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
    
                <div className="css-final-det">
                  <div className="css-final-det-title css-flex-space">
                    <h3>Collection Address</h3>
                  </div>
    
                  <div className="css-final-det-address-wrap">
                    <div className="css-final-det-address">
                      <p>No.183,</p>
                      <p>OMR, </p>
                      <p>Chennai,</p>
                      <p>TamilNadu, India - 600028</p>
                    </div>
                  </div>
                  <br></br>
                </div>
    
                <div className="css-final-det">
                  <div className="css-final-det-title css-flex-space">
                    <h3>Customer Details</h3>
                  </div>
    
                  <div className="css-final-det-address-wrap">
                    <div className="css-final-det-address">
                      <span>
                        <p>{props.customerName}</p>
                        <p>{props.emailAddress}</p>
                        <p>{props.mobileNo}</p>
                        <p>Customer Message: {props.message}</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        } 
      }

return (

    <div>
        {OrderSummary}
  </div>

    );

}

const mapStateToProps = (state) => {
    return {
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
      basketState: state.pageTag.basketState
    };
  };

  export default connect(mapStateToProps)(OrderSummaryCom);
