import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../Store/actions";
import { useHistory } from "react-router-dom";

function ShippingPage(props) {

  const history = useHistory();

  const [customerName, setcustomerName] = useState(props.customerName);
  const [emailAddress, setemailAddress] = useState(props.emailAddress);
  const [message, setmessage] = useState(props.message);
  const [mobileNo, setmobileNo] = useState(props.mobileNo);
  const [appointment, setappointment] = useState(props.appointment);
  const [house, sethouse] = useState(props.house);
  const [addline1, setaddline1] = useState(props.addline1);
  const [addline2, setaddline2] = useState(props.addline2);
  const [postcode, setpostcode] = useState(props.postcode);
  const [city, setcity] = useState(props.city);
  const [state, setstate] = useState(props.state);
  const [formError, setformError] = useState("");

  const appointmentChange = (event) => {
    setappointment((prevState) => ({
      appointment: !prevState.appointment,
    }));
  };

  const handleSubmit = () => {

    let tempformValidSuc = true;
    if (appointment) {
      if (emailAddress === '') {
        tempformValidSuc = false
        setformError('Email ID is Mandatory');
      } 
      if (mobileNo === '') {
        tempformValidSuc = false
        setformError('Mobile number is Mandatory');
      } 
      if (customerName === '') {
        tempformValidSuc = false
        setformError('Customer name is Mandatory');
      } 

    } else {

      if (state === '') {
        tempformValidSuc = false
        setformError('State is Mandatory');
      } 
      if (city === '') {
        tempformValidSuc = false
        setformError('City is Mandatory');
      } 
      if (postcode ===  '') {
        tempformValidSuc = false
        setformError('Postal code is Mandatory');
      } 
      if (addline1 ===  '') {
        tempformValidSuc = false
        setformError('Address Line 1 is Mandatory');
      } 
      if (house ===  '') {
        tempformValidSuc = false
        setformError('House Number is Mandatory');
      } 
      if (emailAddress ===  '') {
        tempformValidSuc = false
        setformError('Email ID is Mandatory');
      } 
      if (mobileNo ===  '') {
        tempformValidSuc = false
        setformError('Mobile number is Mandatory');
      } 
      if (customerName ===  '') {
        tempformValidSuc = false
        setformError('Customer name is Mandatory');
      } 

    }
    
    if (tempformValidSuc) { 
      setformError('');
    // var currentdate = new Date();

    // var OrderID1 =
    //   currentdate.getDate() +
    //   "" +
    //   (currentdate.getMonth() + 1) +
    //   "" +
    //   currentdate.getFullYear() +
    //   "" +
    //   currentdate.getHours() +
    //   "" +
    //   currentdate.getMinutes() +
    //   "" +
    //   currentdate.getSeconds();

    var OrderID1 = 'Loading...';

    props.renderbasketDetails(
      customerName,
      emailAddress,
      message,
      mobileNo,
      appointment,
      house,
      addline1,
      addline2,
      postcode,
      city,
      state,
      OrderID1
    );

    let imageLink1 = "";
    let imageHeading1 = "";
    let imagePrice1 = "";
    let frameSize1 = "";
    let Quantity1 = "";
    let imageLink2 = "";
    let imageHeading2 = "";
    let imagePrice2 = "";
    let frameSize2 = "";
    let Quantity2 = "";
    let imageLink3 = "";
    let imageHeading3 = "";
    let imagePrice3 = "";
    let frameSize3 = "";
    let Quantity3 = "";
    let imageLink4 = "";
    let imageHeading4 = "";
    let imagePrice4 = "";
    let frameSize4 = "";
    let Quantity4 = "";
    let imageLink5 = "";
    let imageHeading5 = "";
    let imagePrice5 = "";
    let frameSize5 = "";
    let Quantity5 = "";
    let imageLink6 = "";
    let imageHeading6 = "";
    let imagePrice6 = "";
    let frameSize6 = "";
    let Quantity6 = "";
    let imageLink7 = "";
    let imageHeading7 = "";
    let imagePrice7 = "";
    let frameSize7 = "";
    let Quantity7 = "";
    let imageLink8 = "";
    let imageHeading8 = "";
    let imagePrice8 = "";
    let frameSize8 = "";
    let Quantity8 = "";
    let imageLink9 = "";
    let imageHeading9 = "";
    let imagePrice9 = "";
    let frameSize9 = "";
    let Quantity9 = "";
    let custm1 = "";
    let custm2 = "";
    let custm3 = "";
    let custm4 = "";
    let custm5 = "";
    let custm6 = "";
    let custm7 = "";
    let custm8 = "";
    let custm9 = "";

  
    
    if (props.renderOrders.length > 0) {
      imageLink1 = props.renderOrders[0].imageLink;
      imageHeading1 = props.renderOrders[0].imageHeading;
      imagePrice1 = props.renderOrders[0].imagePrice;
      frameSize1 = props.renderOrders[0].frameSize;
      Quantity1 = props.renderOrders[0].quantity;
      custm1 = props.renderOrders[0].message;
    }

    if (props.renderOrders.length > 1) {
      imageLink2 = props.renderOrders[1].imageLink;
      imageHeading2 = props.renderOrders[1].imageHeading;
      imagePrice2 = props.renderOrders[1].imagePrice;
      frameSize2 = props.renderOrders[1].frameSize;
      Quantity2 = props.renderOrders[1].quantity;
      custm2 = props.renderOrders[1].message;
    }
    if (props.renderOrders.length > 2) {
      imageLink3 = props.renderOrders[2].imageLink;
      imageHeading3 = props.renderOrders[2].imageHeading;
      imagePrice3 = props.renderOrders[2].imagePrice;
      frameSize3 = props.renderOrders[2].frameSize;
      Quantity3 = props.renderOrders[2].quantity;
      custm3 = props.renderOrders[2].message;
    }
    if (props.renderOrders.length > 3) {
      imageLink4 = props.renderOrders[3].imageLink;
      imageHeading4 = props.renderOrders[3].imageHeading;
      imagePrice4 = props.renderOrders[3].imagePrice;
      frameSize4 = props.renderOrders[3].frameSize;
      Quantity4 = props.renderOrders[3].quantity;
      custm4 = props.renderOrders[3].message;
    }
    if (props.renderOrders.length > 4) {
      imageLink5 = props.renderOrders[4].imageLink;
      imageHeading5 = props.renderOrders[4].imageHeading;
      imagePrice5 = props.renderOrders[4].imagePrice;
      frameSize5 = props.renderOrders[4].frameSize;
      Quantity5 = props.renderOrders[4].quantity;
      custm5 = props.renderOrders[4].message;
    }
    if (props.renderOrders.length > 5) {
      imageLink6 = props.renderOrders[5].imageLink;
      imageHeading6 = props.renderOrders[5].imageHeading;
      imagePrice6 = props.renderOrders[5].imagePrice;
      frameSize6 = props.renderOrders[5].frameSize;
      Quantity6 = props.renderOrders[5].quantity;
      custm6 = props.renderOrders[5].message;
    }
    if (props.renderOrders.length > 6) {
      imageLink7 = props.renderOrders[6].imageLink;
      imageHeading7 = props.renderOrders[6].imageHeading;
      imagePrice7 = props.renderOrders[6].imagePrice;
      frameSize7 = props.renderOrders[6].frameSize;
      Quantity7 = props.renderOrders[6].quantity;
      custm7 = props.renderOrders[6].message;
    }
    if (props.renderOrders.length > 7) {
      imageLink8 = props.renderOrders[7].imageLink;
      imageHeading8 = props.renderOrders[7].imageHeading;
      imagePrice8 = props.renderOrders[7].imagePrice;
      frameSize8 = props.renderOrders[7].frameSize;
      Quantity8 = props.renderOrders[7].quantity;
      custm8 = props.renderOrders[7].message;
    }
    if (props.renderOrders.length > 8) {
      imageLink9 = props.renderOrders[8].imageLink;
      imageHeading9 = props.renderOrders[8].imageHeading;
      imagePrice9 = props.renderOrders[8].imagePrice;
      frameSize9 = props.renderOrders[8].frameSize;
      Quantity9 = props.renderOrders[8].quantity;
      custm9 = props.renderOrders[8].message;
    }

    if (props.renderOrders.length > 0) {

      let collectionDet = false;

      if (appointment) {
        collectionDet = true;
      }

      props.requestFetchDecisions(
        OrderID1,
        customerName,
        emailAddress,
        mobileNo,
        house,
        addline1,
        addline2,
        postcode,
        city,
        state,
        message,
        "Board Preparation",
        "0",
        props.amountTotal,
        props.amountTotal,
        imageLink1,
        imageHeading1,
        imagePrice1,
        frameSize1,
        Quantity1,
        imageLink2,
        imageHeading2,
        imagePrice2,
        frameSize2,
        Quantity2,
        imageLink3,
        imageHeading3,
        imagePrice3,
        frameSize3,
        Quantity3,
        imageLink4,
        imageHeading4,
        imagePrice4,
        frameSize4,
        Quantity4,
        imageLink5,
        imageHeading5,
        imagePrice5,
        frameSize5,
        Quantity5,
        imageLink6,
        imageHeading6,
        imagePrice6,
        frameSize6,
        Quantity6,
        imageLink7,
        imageHeading7,
        imagePrice7,
        frameSize7,
        Quantity7,
        imageLink8,
        imageHeading8,
        imagePrice8,
        frameSize8,
        Quantity8,
        imageLink9,
        imageHeading9,
        imagePrice9,
        frameSize9,
        Quantity9,
        collectionDet,
        custm1,
        custm2,
        custm3,
        custm4,
        custm5,
        custm6,
        custm7,
        custm8,
        custm9,
      );
    } 

  }

  history.push("/basket");

  };

  let formDet;

  if (!appointment) {
    if (!props.basketState) {
      if (props.renderOrders.length > 0) {
        formDet = (
          <div>
            <div className="row">
              <h2>Shipping/Pickup</h2>
              <br></br>
            </div>

            <div className="row row1">
                  <div className="emailAdd">
                    <p>{props.FetchError}</p>
                    <p>{formError}</p>
                  </div>
                </div>

            <div>
              <div className="contact-form">
                <div className="row">
                  <div className="col span-1-of-3 ">
                    <label className="formlabel">Pickup on your Own?</label>
                  </div>
                  <div className="col span-2-of-3 " onClick={(appointment) => setappointment(!appointment)}>
                  &emsp;
                    <input
                      type="checkbox"
                      name="news"
                      id="news"
                      checked={appointment}
                      onChange={appointmentChange}
                    />{" "}
                    Yes
                  </div>
                </div>

                <div className="row">
                  <div className="col span-1-of-3">
                    <label className="formlabel">Name</label>
                  </div>
                  <div className="col span-1-of-3">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your name"
                      
                      onChange={(e) => setcustomerName(e.target.value)}
                      value={customerName}
                      className="inputtextform"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col span-1-of-3">
                    <label className="formlabel">Mobile Number</label>
                  </div>
                  <div className="col span-2-of-3">
                    <input
                      type="text"
                      name="mobileNo"
                      id="mobileNo"
                      placeholder="Mobile number"
                      
                      onChange={(e) => setmobileNo(e.target.value)}
                      value={mobileNo}
                      className="inputtextform"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col span-1-of-3">
                    <label className="formlabel">Email</label>
                  </div>
                  <div className="col span-2-of-3">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your email"
                      
                      onChange={(e) => setemailAddress(e.target.value)}
                      value={emailAddress}
                      className="inputtextform"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col span-1-of-3">
                    <label className="formlabel">House No</label>
                  </div>
                  <div className="col span-2-of-3">
                    <input
                      type="text"
                      name="house"
                      id="house"
                      placeholder="House Number "
                      onChange={(e) => sethouse(e.target.value)}
                      value={house}
                      className="inputtextform"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col span-1-of-3">
                    <label className="formlabel">Address line 1</label>
                  </div>
                  <div className="col span-2-of-3">
                    <input
                      type="text"
                      name="addline1"
                      id="addline1"
                      placeholder="Address line 1"
                      
                      onChange={(e) => setaddline1(e.target.value)}
                      value={addline1}
                      className="inputtextform"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col span-1-of-3">
                    <label className="formlabel">Address line 2</label>
                  </div>
                  <div className="col span-2-of-3">
                    <input
                      type="text"
                      name="addline2"
                      id="addline2"
                      placeholder="Address line 2"
                      onChange={(e) => setaddline2(e.target.value)}
                      value={addline2}
                      className="inputtextform"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col span-1-of-3">
                    <label className="formlabel">Postal Code</label>
                  </div>
                  <div className="col span-2-of-3">
                    <input
                      type="text"
                      name="postcode"
                      id="postcode"
                      placeholder="Postal code"
                      
                      onChange={(e) => setpostcode(e.target.value)}
                      value={postcode}
                      className="inputtextform"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col span-1-of-3">
                    <label className="formlabel">City</label>
                  </div>
                  <div className="col span-2-of-3">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="City"
                      
                      onChange={(e) => setcity(e.target.value)}
                      value={city}
                      className="inputtextform"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col span-1-of-3">
                    <label className="formlabel">State</label>
                  </div>
                  <div className="col span-2-of-3">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="state"
                      
                      onChange={(e) => setstate(e.target.value)}
                      value={state}
                      className="inputtextform"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col span-1-of-3">
                    <label className="formlabel">Message To Seller?</label>
                  </div>
                  <div className="col span-2-of-3">
                    <textarea
                      placeholder="Your message"
                      onChange={(e) => setmessage(e.target.value)}
                      value={message}
                      className="inputtextform"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col span-1-of-3">
                    <label>&nbsp;</label>
                  </div>
                  <div className="col span-2-of-3">
                    <span className="btn btn1-color">
                      <div onClick={(e) => handleSubmit(props.amountTotal)}>
                        Submit Order
                      </div>
                    </span>
                  </div>
                </div>
           
              </div>
            </div>
          </div>
        );
      }
    }
  } else {
    if (!props.basketState) {
      formDet = (
        <div>
          <div className="row">
            <h2>Shipping/Pickup</h2>
            <br></br>
          </div>

          <div className="row row1">
              <div className="emailAdd">
                <p>{props.FetchError}</p>
                <p>{formError}</p>
              </div>
            </div>

          <div className="contact-form">
            <div className="row">
              <div className="col span-1-of-3">
                <label>Pickup on your Own?</label>
              </div>
              <div className="col span-2-of-3" onClick={(appointment) => setappointment(!appointment)}>
             &emsp;
                <input
                  type="checkbox"
                  name="news"
                  id="news"
                  checked={appointment}
                  onChange={(appointment) => setappointment(!appointment)}
                />{" "}
                Yes
              </div>
            </div>
          </div>

          <div className="contact-form">
            <div className="row">
              <div className="col span-1-of-3">
                <label>Name</label>
              </div>
              <div className="col span-2-of-3">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  
                  onChange={(e) => setcustomerName(e.target.value)}
                  value={customerName}
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
                  
                  onChange={(e) => setmobileNo(e.target.value)}
                  value={mobileNo}
                  className="inputtextform"
                />
              </div>
            </div>
            <div className="row">
              <div className="col span-1-of-3">
                <label>Email</label>
              </div>
              <div className="col span-2-of-3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  
                  onChange={(e) => setemailAddress(e.target.value)}
                  value={emailAddress}
                  className="inputtextform"
                />
              </div>
            </div>
            <div className="row">
              <div className="col span-1-of-3">
                <label>Message To Seller?</label>
              </div>
              <div className="col span-2-of-3">
                <textarea
                  placeholder="Your message"
                  onChange={(e) => setmessage(e.target.value)}
                  value={message}
                  className="inputtextform"
                ></textarea>
              </div>
            </div>

            <div className="row">
              <div className="col span-1-of-3">
                <label>&nbsp;</label>
              </div>
              <div className="col span-2-of-3">
                <span className="btn btn1-color">
                  <div onClick={(e) => handleSubmit(props.amountTotal)}>
                    Submit Order
                  </div>
                </span>
              </div>
            </div>
      
          </div>
        </div>
      );
    }
  }


return (
    <div>{formDet}</div>

);

}

const mapStateToProps = (state) => {
  return {
    renderUiPage: state.pageTag.uiPage,
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
    renderbasketDetails: (
      name,
      Mail,
      Comments,
      Mobileno,
      collection,
      Doorno,
      Addressline1,
      Addressline2,
      Pincode,
      City,
      State,
      orderid
    ) =>
      dispatch(
        actions.basketDetails(
          name,
          Mail,
          Comments,
          Mobileno,
          collection,
          Doorno,
          Addressline1,
          Addressline2,
          Pincode,
          City,
          State,
          orderid
        )
      ),
      requestFetchDecisions: (
        orderid,
        name,
        Mail,
        Mobileno,
        Doorno,
        Addressline1,
        Addressline2,
        Pincode,
        City,
        State,
        Comments,
        status,
        paid,
        totalamt,
        pendingamt,
        imageLink1,
        imageHeading1,
        imagePrice1,
        frameSize1,
        Quantity1,
        imageLink2,
        imageHeading2,
        imagePrice2,
        frameSize2,
        Quantity2,
        imageLink3,
        imageHeading3,
        imagePrice3,
        frameSize3,
        Quantity3,
        imageLink4,
        imageHeading4,
        imagePrice4,
        frameSize4,
        Quantity4,
        imageLink5,
        imageHeading5,
        imagePrice5,
        frameSize5,
        Quantity5,
        imageLink6,
        imageHeading6,
        imagePrice6,
        frameSize6,
        Quantity6,
        imageLink7,
        imageHeading7,
        imagePrice7,
        frameSize7,
        Quantity7,
        imageLink8,
        imageHeading8,
        imagePrice8,
        frameSize8,
        Quantity8,
        imageLink9,
        imageHeading9,
        imagePrice9,
        frameSize9,
        Quantity9,
        collection,
        custm1,
        custm2,
        custm3,
        custm4,
        custm5,
        custm6,
        custm7,
        custm8,
        custm9
      ) =>
        dispatch(
          actions.fetchDecisions(
            orderid,
            name,
            Mail,
            Mobileno,
            Doorno,
            Addressline1,
            Addressline2,
            Pincode,
            City,
            State,
            Comments,
            status,
            paid,
            totalamt,
            pendingamt,
            imageLink1,
            imageHeading1,
            imagePrice1,
            frameSize1,
            Quantity1,
            imageLink2,
            imageHeading2,
            imagePrice2,
            frameSize2,
            Quantity2,
            imageLink3,
            imageHeading3,
            imagePrice3,
            frameSize3,
            Quantity3,
            imageLink4,
            imageHeading4,
            imagePrice4,
            frameSize4,
            Quantity4,
            imageLink5,
            imageHeading5,
            imagePrice5,
            frameSize5,
            Quantity5,
            imageLink6,
            imageHeading6,
            imagePrice6,
            frameSize6,
            Quantity6,
            imageLink7,
            imageHeading7,
            imagePrice7,
            frameSize7,
            Quantity7,
            imageLink8,
            imageHeading8,
            imagePrice8,
            frameSize8,
            Quantity8,
            imageLink9,
            imageHeading9,
            imagePrice9,
            frameSize9,
            Quantity9,
            collection,
            custm1,
            custm2,
            custm3,
            custm4,
            custm5,
            custm6,
            custm7,
            custm8,
            custm9
          )
        ),
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShippingPage);
