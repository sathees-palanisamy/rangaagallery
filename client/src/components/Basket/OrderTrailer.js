import React from "react";

function OrderTrailer(props) {

return (

    <div className="detail-flex">
    <h3>&nbsp;</h3>

    <h3>Total Amount</h3>

    <h3 className="col-fex price-color">₹ {props.priceFormating(props.amountTotal)}</h3>
  </div>

    );

}

export default OrderTrailer;