import React from 'react';
import { Link } from "react-router-dom";

const NavHeader = (props) => {


    return (
        <div>

            <div className="css-ship-high1 css-colol1-bg ">
                <div className="container css-flex-space">

                    <div className="css-ship-high1-left css-flex-space ">

                        <div className="css-icon-font-det1 css-flex-space ">

                            <p className="">Shri Rangaa Tanjore Art Gallery</p>

                        </div>
                  
                    </div>

                    <div className="css-ship-high1-right css-flex-space">


                        <div className="css-icon-font-det1 css-flex-space ">
                        <div className="css-icon-font-det1 css-desktop-only css-flex-space"><i className="css-icon-border-line"
                            aria-expanded="false"><ion-icon name="call-outline"></ion-icon></i><Link to="tel:+91-7200200733">7200200733</Link></div>
                                </div>
                    </div>
                </div>
            </div>

         

        </div>
    );
}

export default NavHeader;