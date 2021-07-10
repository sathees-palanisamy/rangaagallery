import React from "react";
import { useHistory } from "react-router-dom";

const Banner = (props) => {

  const history = useHistory();

  const switchToShopPage = () => {

    history.push("/all");

  }
  return (
    <div >
      <div className="css-poster-cover ">
        <div>

          <div className="row ">
            <div className="col span-1-of-2 imagebackground">
              <img
                src="assets/Photos/Header/2.jpeg"
                alt="Home"
                className="app-screen1"
              />
            </div>

            <div className="col span-1-of-2 backgroundImage panelpos">
              <div className="hcard">
                <div>
          
                   
                 <span className="home-blank">
                  <br></br>
                  <br></br>
                  </span>
                  <p className="h1-css"> HAND MADE TANJORE PAINTINGS</p>
        
         
                  <span className="home-blank">
                  <br></br>
                  <br></br>
                  </span>

                  <div className="long-copy">
                    <p className="h2-css">
                        17 Years of experience
                        </p>
               
                        <p className="h2-css">
                        Direct from artisans
                        </p>
        
         
                  </div>

                  <span className="home-blank">
                  <br></br>
                  <br></br>
                  </span>
        
                  <div className="btnpos">
                    <button
                      to="/shop"
                      className="btnhome"
                      onClick={switchToShopPage}
                    >
                      Shop now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
       
       
        </div>
      </div>
    </div>
  );
};

export default Banner;
