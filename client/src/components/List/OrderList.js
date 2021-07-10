import React, { useState } from "react";
import axios from 'axios';
import { connect } from "react-redux";
import * as actions from '../../Store/actions';
import { withRouter } from 'react-router';
import { Link } from "react-router-dom";

function OrderList(props) {
  const [dataList, setdataList] = useState([]);
  const [amount, setamount] = useState(0);
  const [status, setstatus] = useState("Select");
  const [uploadStatus, setuploadStatus] = useState("");
  const [login1, setlogin1] = useState("");
  const [password1, setpassword1] = useState("");
  const [OrderID, setOrderID] = useState(props.renderInputOrderNo);
  const [formError, setformError] = useState("");
  const [indiReq,setIndiReq] = useState(false);

  let uiHeader;
  let renderList;

  let suggestionListPage;
  let formDet;


const handleSubmit = (event) => {

    const data = {
        user : login1,
        password : password1
    };

    axios.post('/login', data)
    .then(response => {

      if (response.data.status === 'success') {
      //      setuiStatus(true);
            props.LoginStatus(true)
            displaylist();

        } else {
            setuploadStatus('Invalid login details');
        }


    })
    .catch((error) => {
        setuploadStatus('Internal Server Error');
    });





    event.preventDefault();

}

const handleform = () => {

    setIndiReq(true);

    let tempformValidSuc = true;
  
  
    if (OrderID === '') {
      tempformValidSuc = false
      setformError('Order ID is Mandatory');
      setIndiReq(false);
    } 
  
    if (tempformValidSuc) {
      setformError('');
      let OrderSearch = OrderID;
      axios({
        method: 'post',
        url: '/search',
        data: {
            OrderSearch 
        }
    })
      .then(response => {
          if (response.data.result.length > 0) { 
          setdataList([...response.data.result]);
          } else {
            setformError('Order Not found');
          }
   
      })
      .catch((error) => {
   
          setformError('Internal Server Error');
      });

    }
  
  }
  


const DeleteClick = (orderid, e) => {

    const data = {
        orderid
    };

    axios.post('/delete', data)
        .then(response => {
            displaylist();
        })
        .catch((error) => {
            displaylist();
        });


}

const updateList = (orderid, amount, paid, pendingamt, e) => {


    setamount(0);
    let newPaid = amount - 1 + 1 + parseInt(paid);
    let newPendingamt = parseInt(pendingamt) - amount;

    const data = {
        orderid: orderid,
        paid: newPaid,
        pendingamt: newPendingamt
    };


    axios.post('/updateamount', data)
        .then(response => {
    
            displaylist();
        })
        .catch((error) => {
            displaylist();
        });

}

const updateList1 = (orderid, status, oldStatus, e) => {

    setstatus("Select");
    let NewStatus = '';

    if (status === '') {
        NewStatus = oldStatus;
    } else {
        NewStatus = status
    }

    const data = {
        orderid: orderid,
        status: NewStatus,
    };


    axios.post('/updatestatus', data)
        .then(response => {
    
            displaylist();
        })
        .catch((error) => {
            displaylist();
        });

}


const displaylist = () => {

    // setIndiReq(false);

    if (!indiReq) {

    axios.post('/list',{})
        .then(response => {
    
                setdataList([...response.data.result]);
        
        })
        .catch((error) => {
            setformError('Internal Server Error');
        });
    } else {

        let OrderSearch = OrderID;

    axios({
            method: 'post',
            url: '/search',
            data: {
                OrderSearch 
            }
        })
          .then(response => {
              setdataList([...response.data.result]);
       
          })
          .catch((error) => {
       
              setformError('Internal Server Error');
          });
        }    
}

const fulllist = () => {

        setIndiReq(false);
        setOrderID("");
 
        displaylist();   
    
}


if (!props.renderUiPage) {

    renderList = <div>
        <br></br>
        <br></br>
 

        <form onSubmit={handleSubmit}>
            <div className="row row1">
                <div className="contact-form">


                    <div className="row row1">
                        <div className="col col1 span-1-of-3">
                            <label>Login ID</label>
                        </div>
                        <div className="col col1 span-2-of-3">
                            <input type="text" name="login" id="login" placeholder="login Id" required onChange={e => setlogin1(e.target.value)} value={login1} />
                        </div>
                    </div>

                    <div className="row row1">
                        <div className="col col1 span-1-of-3">
                            <label>Password</label>
                        </div>
                        <div className="col col1 span-2-of-3">
                            <input type="password" name="password" id="password" placeholder="password" onChange={e => setpassword1(e.target.value)} required value={password1} />
                        </div>
                    </div>
                    <div className="row row1">
                        <div className="col col1 span-1-of-3">
                            <label>&nbsp;</label>
                        </div>
                        <div className="col col1 span-2-of-3">
                            <input type="submit" value="Login"></input>
                        </div>
                    </div>

                </div>

            </div>
        </form>
        <br></br>
        <div className="emailAdd">
            <p>{uploadStatus}</p>
        </div>

    <div className="desktop-view-home">
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

    </div>

}

if (props.renderUiPage) {
    formDet = (
        <div>
      
          <div className="contact-form">
            <div className="row">
              <div className="col span-1-of-4">
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
              <div className="col span-1-of-4">
                <span className="btn btn1-color">
                  <div onClick={handleform}>
                    Check
                  </div>
                </span>
              </div>
              <div className="col span-1-of-4">
                <span className="btn btn2-color">
                  <div onClick={fulllist}>
                    Full list
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
    }

if (props.renderUiPage) {

    suggestionListPage = dataList.map(indiSuggestion => {

        let listImages;

        if (indiSuggestion.imageHeading1 !== '') {
            listImages = <ul className="iconDisplay">
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading1}, Quantity: {indiSuggestion.Quantity1}, Size: {indiSuggestion.frameSize1}, Requirement: {indiSuggestion.custm1}</li>
            </ul>;
        }

        if (indiSuggestion.imageHeading2 !== '') {
            listImages = <ul className="iconDisplay">
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading1}, Quantity: {indiSuggestion.Quantity1}, Size: {indiSuggestion.frameSize1}, Requirement: {indiSuggestion.custm1}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading2}, Quantity: {indiSuggestion.Quantity2}, Size: {indiSuggestion.frameSize2}, Requirement: {indiSuggestion.custm2}</li>
            </ul>;
        }


        if (indiSuggestion.imageHeading3 !== '') {
            listImages = <ul className="iconDisplay">
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading1}, Quantity: {indiSuggestion.Quantity1}, Size: {indiSuggestion.frameSize1}, Requirement: {indiSuggestion.custm1}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading2}, Quantity: {indiSuggestion.Quantity2}, Size: {indiSuggestion.frameSize2}, Requirement: {indiSuggestion.custm2}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading3}, Quantity: {indiSuggestion.Quantity3}, Size: {indiSuggestion.frameSize3}, Requirement: {indiSuggestion.custm3}</li>
            </ul>;
        }


        if (indiSuggestion.imageHeading4 !== '') {
            listImages = <ul className="iconDisplay">
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading1}, Quantity: {indiSuggestion.Quantity1}, Size: {indiSuggestion.frameSize1}, Requirement: {indiSuggestion.custm1}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading2}, Quantity: {indiSuggestion.Quantity2}, Size: {indiSuggestion.frameSize2}, Requirement: {indiSuggestion.custm2}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading3}, Quantity: {indiSuggestion.Quantity3}, Size: {indiSuggestion.frameSize3}, Requirement: {indiSuggestion.custm3}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading4}, Quantity: {indiSuggestion.Quantity4}, Size: {indiSuggestion.frameSize4}, Requirement: {indiSuggestion.custm4}</li>
            </ul>;
        }


        if (indiSuggestion.imageHeading5 !== '') {
            listImages = <ul className="iconDisplay">
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading1}, Quantity: {indiSuggestion.Quantity1}, Size: {indiSuggestion.frameSize1}, Requirement: {indiSuggestion.custm1}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading2}, Quantity: {indiSuggestion.Quantity2}, Size: {indiSuggestion.frameSize2}, Requirement: {indiSuggestion.custm2}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading3}, Quantity: {indiSuggestion.Quantity3}, Size: {indiSuggestion.frameSize3}, Requirement: {indiSuggestion.custm3}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading4}, Quantity: {indiSuggestion.Quantity4}, Size: {indiSuggestion.frameSize4}, Requirement: {indiSuggestion.custm4}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading5}, Quantity: {indiSuggestion.Quantity5}, Size: {indiSuggestion.frameSize5}, Requirement: {indiSuggestion.custm5}</li>
            </ul>;
        }


        if (indiSuggestion.imageHeading6 !== '') {
            listImages = <ul className="iconDisplay">
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading1}, Quantity: {indiSuggestion.Quantity1}, Size: {indiSuggestion.frameSize1}, Requirement: {indiSuggestion.custm1}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading2}, Quantity: {indiSuggestion.Quantity2}, Size: {indiSuggestion.frameSize2}, Requirement: {indiSuggestion.custm2}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading3}, Quantity: {indiSuggestion.Quantity3}, Size: {indiSuggestion.frameSize3}, Requirement: {indiSuggestion.custm3}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading4}, Quantity: {indiSuggestion.Quantity4}, Size: {indiSuggestion.frameSize4}, Requirement: {indiSuggestion.custm4}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading5}, Quantity: {indiSuggestion.Quantity5}, Size: {indiSuggestion.frameSize5}, Requirement: {indiSuggestion.custm5}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading6}, Quantity: {indiSuggestion.Quantity6}, Size: {indiSuggestion.frameSize6}, Requirement: {indiSuggestion.custm6}</li>
            </ul>;
        }


        if (indiSuggestion.imageHeading7 !== '') {
            listImages = <ul className="iconDisplay">
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading1}, Quantity: {indiSuggestion.Quantity1}, Size: {indiSuggestion.frameSize1}, Requirement: {indiSuggestion.custm1}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading2}, Quantity: {indiSuggestion.Quantity2}, Size: {indiSuggestion.frameSize2}, Requirement: {indiSuggestion.custm2}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading3}, Quantity: {indiSuggestion.Quantity3}, Size: {indiSuggestion.frameSize3}, Requirement: {indiSuggestion.custm3}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading4}, Quantity: {indiSuggestion.Quantity4}, Size: {indiSuggestion.frameSize4}, Requirement: {indiSuggestion.custm4}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading5}, Quantity: {indiSuggestion.Quantity5}, Size: {indiSuggestion.frameSize5}, Requirement: {indiSuggestion.custm5}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading6}, Quantity: {indiSuggestion.Quantity6}, Size: {indiSuggestion.frameSize6}, Requirement: {indiSuggestion.custm6}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading7}, Quantity: {indiSuggestion.Quantity7}, Size: {indiSuggestion.frameSize7}, Requirement: {indiSuggestion.custm7}</li>

            </ul>;
        }


        if (indiSuggestion.imageHeading8 !== '') {
            listImages = <ul className="iconDisplay">
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading1}, Quantity: {indiSuggestion.Quantity1}, Size: {indiSuggestion.frameSize1}, Requirement: {indiSuggestion.custm1}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading2}, Quantity: {indiSuggestion.Quantity2}, Size: {indiSuggestion.frameSize2}, Requirement: {indiSuggestion.custm2}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading3}, Quantity: {indiSuggestion.Quantity3}, Size: {indiSuggestion.frameSize3}, Requirement: {indiSuggestion.custm3}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading4}, Quantity: {indiSuggestion.Quantity4}, Size: {indiSuggestion.frameSize4}, Requirement: {indiSuggestion.custm4}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading5}, Quantity: {indiSuggestion.Quantity5}, Size: {indiSuggestion.frameSize5}, Requirement: {indiSuggestion.custm5}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading6}, Quantity: {indiSuggestion.Quantity6}, Size: {indiSuggestion.frameSize6}, Requirement: {indiSuggestion.custm6}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading7}, Quantity: {indiSuggestion.Quantity7}, Size: {indiSuggestion.frameSize7}, Requirement: {indiSuggestion.custm7}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading8}, Quantity: {indiSuggestion.Quantity8}, Size: {indiSuggestion.frameSize8}, Requirement: {indiSuggestion.custm8}</li>
            </ul>;
        }


        if (indiSuggestion.imageHeading9 !== '') {
            listImages = <ul className="iconDisplay">
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading1}, Quantity: {indiSuggestion.Quantity1}, Size: {indiSuggestion.frameSize1}, Requirement: {indiSuggestion.custm1}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading2}, Quantity: {indiSuggestion.Quantity2}, Size: {indiSuggestion.frameSize2}, Requirement: {indiSuggestion.custm2}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading3}, Quantity: {indiSuggestion.Quantity3}, Size: {indiSuggestion.frameSize3}, Requirement: {indiSuggestion.custm3}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading4}, Quantity: {indiSuggestion.Quantity4}, Size: {indiSuggestion.frameSize4}, Requirement: {indiSuggestion.custm4}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading5}, Quantity: {indiSuggestion.Quantity5}, Size: {indiSuggestion.frameSize5}, Requirement: {indiSuggestion.custm5}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading6}, Quantity: {indiSuggestion.Quantity6}, Size: {indiSuggestion.frameSize6}, Requirement: {indiSuggestion.custm6}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading7}, Quantity: {indiSuggestion.Quantity7}, Size: {indiSuggestion.frameSize7}, Requirement: {indiSuggestion.custm7}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading8}, Quantity: {indiSuggestion.Quantity8}, Size: {indiSuggestion.frameSize8}, Requirement: {indiSuggestion.custm8}</li>
                <li><i className="ion-ios-crop icon-small"></i>Name: {indiSuggestion.imageHeading9}, Quantity: {indiSuggestion.Quantity9}, Size: {indiSuggestion.frameSize9}, Requirement: {indiSuggestion.custm9}</li>

            </ul>;
        }

        let suggestionDet;

        if (!indiReq) {

            suggestionDet =  <div className="section-plans" key={indiSuggestion.orderid}>

            <div className="row row1" >

                <div className="col col1 col-width-1">





                </div>
                <div className="col col1 col-width-2">
                    <div className="plan-box">
                        <div>
                            <ul className="iconDisplay">
                                <li><p className="plan-price">Order ID:{indiSuggestion.orderid} Name:{indiSuggestion.name}  </p></li>
                                <li>
                                    <div onClick={(e) => DeleteClick(indiSuggestion.orderid, e)}>
                                        <button className="btn1-color">Delete</button>
                                    </div>
                                </li>
                            </ul>

                            <div className="historyDet">
                                <ul className="iconDisplay">
                                    <li>Email  : {indiSuggestion.Mail} ,</li>
                                    <li>Mobile :{indiSuggestion.Mobileno} ,</li>
                                    <li>Status :{indiSuggestion.status} ,</li>
                                    <li>Paid   :{indiSuggestion.paid} ,</li>
                                    <li>Total  :{indiSuggestion.totalamt} ,</li>
                                    <li>Unpaid :{indiSuggestion.pendingamt},</li>
                                    <li>Order ID :{indiSuggestion.orderDate},</li>
                                    <li>Customer collection :{indiSuggestion.collection === 'true' ? 'Yes' : 'No'}</li>
                                </ul>
                            </div>

                            {indiSuggestion.collection === 'false' ? <div className="historyDet">
                                <p>Address:</p>

                                <ul className="iconDisplay">
                                    <li>{indiSuggestion.Doorno} ,</li>
                                    <li> {indiSuggestion.Addressline1} ,</li>
                                    <li>{indiSuggestion.Addressline2} ,</li>
                                    <li> {indiSuggestion.City} ,</li>
                                    <li> {indiSuggestion.Pincode} ,</li>
                                    <li> {indiSuggestion.State}</li>

                                </ul>
                            </div> : null
                            }
                            <div className="historyDet">
                                <ul className="iconDisplay">
                                    <li>Customer Message: {indiSuggestion.Comments}</li>
                                </ul>
                            </div>
                
                        </div>

                        <div className="historyDet">
                            {listImages}
                        </div>
                    </div>




                </div>
                <div className="col col1 col-width-3">

                </div>


            </div>


        </div>
   

        } else {

            suggestionDet =  <div className="section-plans" key={indiSuggestion.orderid}>

            <div className="row row1" >

                <div className="col col1 col-width-1">





                </div>
                <div className="col col1 col-width-2">
                    <div className="plan-box">
                        <div>
                            <ul className="iconDisplay">
                                <li><p className="plan-price">Order ID:{indiSuggestion.orderid} Name:{indiSuggestion.name}  </p></li>
                                <li>
                                    <div onClick={(e) => DeleteClick(indiSuggestion.orderid, e)}>
                                        <button className="btn1-color">Delete</button>
                                    </div>
                                </li>
                            </ul>

                            <div className="historyDet">
                                <ul className="iconDisplay">
                                    <li>Email  : {indiSuggestion.Mail} ,</li>
                                    <li>Mobile :{indiSuggestion.Mobileno} ,</li>
                                    <li>Status :{indiSuggestion.status} ,</li>
                                    <li>Paid   :{indiSuggestion.paid} ,</li>
                                    <li>Total  :{indiSuggestion.totalamt} ,</li>
                                    <li>Unpaid :{indiSuggestion.pendingamt},</li>
                                    <li>Order ID :{indiSuggestion.orderDate},</li>
                                    <li>Customer collection :{indiSuggestion.collection === 'true' ? 'Yes' : 'No'}</li>
                                </ul>
                            </div>

                            {indiSuggestion.collection === 'false' ? <div className="historyDet">
                                <p>Address:</p>

                                <ul className="iconDisplay">
                                    <li>{indiSuggestion.Doorno} ,</li>
                                    <li> {indiSuggestion.Addressline1} ,</li>
                                    <li>{indiSuggestion.Addressline2} ,</li>
                                    <li> {indiSuggestion.City} ,</li>
                                    <li> {indiSuggestion.Pincode} ,</li>
                                    <li> {indiSuggestion.State}</li>

                                </ul>
                            </div> : null
                            }
                            <div className="historyDet">
                                <ul className="iconDisplay">
                                    <li>Customer Message: {indiSuggestion.Comments}</li>
                                </ul>
                            </div>
                            <div className="row row1 iconDisplay">


                                <div className="col col1 span-1-of-5">
                                    <label>Amount paid:</label>
                                </div>
                                <div className="col col1 span-1-of-5">
                                    <input type="text" name="amount" id="amount" placeholder="amount" required onChange={e => setamount(e.target.value)} value={amount} />
                                </div>







                                <div className="col col1 span-1-of-5" onClick={(e) => updateList(indiSuggestion.orderid, amount, indiSuggestion.paid, indiSuggestion.pendingamt)}>
                                    <button className="btn2-color"> Update</button>
                                </div>

                            </div>

                            <div className="row row1 iconDisplay">
                                <div className="col col1 span-1-of-5">
                                    <label>New Status:</label>
                                </div>
                                <div className="col col1 span-1-of-5">
                                    <select value={status} onChange={e => setstatus(e.target.value)}>
                                        <option value="Select">Select</option>
                                        <option value="Board Preparation">Board Preparation</option>
                                        <option value="sketch in progress">sketch in progress</option>
                                        <option value="Stone Work">Stone Work</option>
                                        <option value="Mukk work">Mukk work</option>
                                        <option value="Gold Foil">Gold Foil</option>
                                        <option value="Coloring Work">Coloring Work</option>
                                        <option value="Framing">Framing</option>
                                        <option value="Shipping">Shipping</option>
                                        <option value="Delivered">Delivered</option>
                                        <option value="Canceled">Canceled</option>
                                    </select>

                                </div>

                                <div className="col col1 span-1-of-5" onClick={(e) => updateList1(indiSuggestion.orderid, status, indiSuggestion.status)}>
                                    <button className="btn2-color"> Update</button>
                                </div>
                            </div>
                        </div>

                        <div className="historyDet">
                            {listImages}
                        </div>
                    </div>




                </div>
                <div className="col col1 col-width-3">

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
   

        }

        return suggestionDet; 
}

    );


    renderList = <div  >
        <div>
        {formDet}
        </div>
        {suggestionListPage}
    </div>

}


  uiHeader = 
    <div>
      <div className="css-ship-bottom css-walk-high">
        <div className="css-head-master"></div>
      </div>

      <div className="str-body">
        <div>
          <div className="row">
            <div>
              <br></br>

              <div className="css-temp1-products-head css-temp1-products-head-comp css-flex-space ">
                <h2 className="">
                  Order List<small></small>
                </h2>
              
              </div>
            </div>
          </div>
            

              {renderList}
        </div>

        <div infinitescroll=""></div>
      </div>
    </div>

  return (
    <div>
      {uiHeader}
    </div>
  );
}
  
const mapStateToProps = (state) => {
    return {
        renderUiPage: state.pageTag.orderListUiState,
  }
}
  
  const mapDispatchToProps = dispatch => {
    return {
        LoginStatus: (loginStatus) => dispatch(actions.LoginStatus(loginStatus)),
    }
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderList));