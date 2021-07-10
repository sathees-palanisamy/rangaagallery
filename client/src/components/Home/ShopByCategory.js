import React from "react";
import { useHistory } from "react-router-dom";

const ShopByCategory = (props) => {
  const history = useHistory();

  return (
    <div className="css-photos-wrap-products ">
      <div className="container">
        <div className="css-temp1-products-head css-flex-space">
          <h2>Products</h2>
        </div>
        <div>
          <div className="css-photos1-lays-cover css-flex-space ">
            <div
              className="css-lays-photos1 css-flex-space "
              onClick={() => history.push("/all")}
            >
              <div className="css-lays-photos1-img">
                <img
                  className="css-image-dis-cor"
                  src="assets/Photos/Header/Gifts/12.jpg"
                  alt=""
                />
              </div>
              <div className="css-list-photo-det">
                <h3>All Products</h3>
                <p>View All Products</p>
              </div>
            </div>

            <div
              className="css-lays-photos1 css-flex-space "
              onClick={() => history.push("/balaji")}
            >
              <div className="css-lays-photos1-img">
                <img
                  className="css-image-dis-cor"
                  src="assets/Photos/Header/Balaji/3.jpg"
                  alt=""
                />
              </div>
              <div className="css-list-photo-det">
                <h3>Balaji</h3>
                <p>100% handmade</p>
              </div>
            </div>

            <div
              className="css-lays-photos1 css-flex-space "
              onClick={() => history.push("/ganesha")}
            >
              <div className="css-lays-photos1-img">
                <img
                  className="css-image-dis-cor"
                  src="assets/Photos/Header/Ganesha/8.jpg"
                  alt=""
                />
              </div>
              <div className="css-list-photo-det">
                <h3>Ganesha</h3>
                <p>100% handmade</p>
              </div>
            </div>

            <div
              className="css-lays-photos1 css-flex-space "
              onClick={() => history.push("/lakshmi")}
            >
              <div className="css-lays-photos1-img">
                <img
                  className="css-image-dis-cor"
                  src="assets/Photos/Header/Lakshmi/8.jpg"
                  alt=""
                />
              </div>
              <div className="css-list-photo-det">
                <h3>Lakshmi</h3>
                <p>100% handmade</p>
              </div>
            </div>

            <div
              className="css-lays-photos1 css-flex-space "
              onClick={() => history.push("/embossed")}
            >
              <div className="css-lays-photos1-img">
                <img
                  className="css-image-dis-cor"
                  src="assets/Photos/Header/Embossed/1.jpg"
                  alt=""
                />
              </div>
              <div className="css-list-photo-det">
                <h3>Semi Embossed</h3>
                <p>100% handmade</p>
              </div>
            </div>

            <div
              className="css-lays-photos1 css-flex-space "
              onClick={() => history.push("/Gifts")}
            >
              <div className="css-lays-photos1-img">
                <img
                  className="css-image-dis-cor"
                  src="assets/Photos/Header/Gifts/9.jpg"
                  alt=""
                />
              </div>
              <div className="css-list-photo-det">
                <h3>Gifts</h3>
                <p>100% handmade</p>
              </div>
            </div>

            <div
              className="css-lays-photos1 css-flex-space "
              onClick={() => history.push("/Amman")}
            >
              <div className="css-lays-photos1-img">
                <img
                  className="css-image-dis-cor"
                  src="assets/Photos/Header/Amman/1.jpg"
                  alt=""
                />
              </div>
              <div className="css-list-photo-det">
                <h3>Amman</h3>
                <p>100% handmade</p>
              </div>
            </div>

            <div
              className="css-lays-photos1 css-flex-space "
              onClick={() => history.push("/Annapoorani")}
            >
              <div className="css-lays-photos1-img">
                <img
                  className="css-image-dis-cor"
                  src="assets/Photos/Header/Annapoorani/1.jpg"
                  alt=""
                />
              </div>
              <div className="css-list-photo-det">
                <h3>Annapoorani</h3>
                <p>100% handmade</p>
              </div>
            </div>

            <div
              className="css-lays-photos1 css-flex-space "
              onClick={() => history.push("/Krishna")}
            >
              <div className="css-lays-photos1-img">
                <img
                  className="css-image-dis-cor"
                  src="assets/Photos/Header/Krishna/1.jpg"
                  alt=""
                />
              </div>
              <div className="css-list-photo-det">
                <h3>Krishna</h3>
                <p>100% handmade</p>
              </div>
            </div>

            <div
              className="css-lays-photos1 css-flex-space "
              onClick={() => history.push("/mukk")}
            >
              <div className="css-lays-photos1-img">
                <img
                  className="css-image-dis-cor"
                  src="assets/Photos/Header/mukk/1.jpg"
                  alt=""
                />
              </div>
              <div className="css-list-photo-det">
                <h3>Muck Boards</h3>
                <p>100% handmade</p>
              </div>
            </div>

            <div
              className="css-lays-photos1 css-flex-space "
              onClick={() => history.push("/plain")}
            >
              <div className="css-lays-photos1-img">
                <img
                  className="css-image-dis-cor"
                  src="assets/Photos/Header/Plain/2.jpg"
                  alt=""
                />
              </div>
              <div className="css-list-photo-det">
                <h3>Plain Boards</h3>
                <p>100% handmade</p>
              </div>
            </div>

            <div
              className="css-lays-photos1 css-flex-space "
              onClick={() => history.push("/Saibaba")}
            >
              <div className="css-lays-photos1-img">
                <img
                  className="css-image-dis-cor"
                  src="assets/Photos/Header/Saibaba/1.jpg"
                  alt=""
                />
              </div>
              <div className="css-list-photo-det">
                <h3>Saibaba</h3>
                <p>100% handmade</p>
              </div>
            </div>

            <div
              className="css-lays-photos1 css-flex-space "
              onClick={() => history.push("/Saraswathi")}
            >
              <div className="css-lays-photos1-img">
                <img
                  className="css-image-dis-cor"
                  src="assets/Photos/Header/Saraswathi/1.jpg"
                  alt=""
                />
              </div>
              <div className="css-list-photo-det">
                <h3>Saraswathi</h3>
                <p>100% handmade</p>
              </div>
            </div>

            <div
              className="css-lays-photos1 css-flex-space "
              onClick={() => history.push("/Sivan")}
            >
              <div className="css-lays-photos1-img">
                <img
                  className="css-image-dis-cor"
                  src="assets/Photos/Header/Sivan/1.jpg"
                  alt=""
                />
              </div>
              <div className="css-list-photo-det">
                <h3>Sivan Parvathi</h3>
                <p>100% handmade</p>
              </div>
            </div>

            <div
              className="css-lays-photos1 css-flex-space "
              onClick={() => history.push("/Murugar")}
            >
              <div className="css-lays-photos1-img">
                <img
                  className="css-image-dis-cor"
                  src="assets/Photos/Header/Murugar/1.jpg"
                  alt=""
                />
              </div>
              <div className="css-list-photo-det">
                <h3>Murugar</h3>
                <p>100% handmade</p>
              </div>
            </div>

            <div
              className="css-lays-photos1 css-flex-space "
              onClick={() => history.push("/WallPlate")}
            >
              <div className="css-lays-photos1-img">
                <img
                  className="css-image-dis-cor"
                  src="assets/Photos/Header/Wall/1.jpg"
                  alt=""
                />
              </div>
              <div className="css-list-photo-det">
                <h3>Wall Plate</h3>
                <p>100% handmade</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
