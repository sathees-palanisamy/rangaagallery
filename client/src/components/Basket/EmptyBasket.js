import React from "react";
import { Link } from "react-router-dom";

function EmptyBasket() {

return (
   <div>
   <div className="detail-flex mobile-view-home">
   <div className="">


     <div className="">
       <div className="css-lay-cart-empty css-flex-space">
         <img
           alt="empty cart"
           className="css-image-dis-cor "
           src="assets/mis/empty-cart.png"
         />
         <p className="">Cart is Empty.</p>

         <div className="btnpos">
           <Link to="/" className="btnhome">
             Continue Shopping
           </Link>
         </div>
       </div>
     </div>
   </div>

     <div infinitescroll=""></div>
   </div>

   <div className="css-lay-cart-photo desktop-view-home">

   <div className="css-cof-finals-deep css-iphone-onebyone">


     <div className="css-photos-cover css-flex-space ">
       <div className="css-lay-cart-empty css-flex-space">
         <img
           alt="empty cart"
           className="css-image-dis-cor "
           src="assets/mis/empty-cart.png"
         />
         <p className="">Cart is Empty.</p>

         <div className="btnpos">
           <Link to="/" className="btnhome">
             Continue Shopping
           </Link>
         </div>
       </div>
     </div>
   </div>

     <div infinitescroll=""></div>
   </div>

 </div>
    );

}

export default EmptyBasket;