import React from "react";
import styles from "./styles.module.css";
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { LuRefreshCw } from "react-icons/lu";
import "../../home.css";
import { Product } from "./Products";

const page = () => {
  return (
    <>
      <section className={styles.detail_main}>
        <div className={styles.detail_main1}>
          <div className={styles.small_div}>
            <img src="../detail/image57.png" alt="ooo" />
          </div>
          <div className={styles.small_div}>
            <img src="../detail/image58.png" alt="ooo" />
          </div>
          <div className={styles.small_div}>
            <img src="../detail/image59.png" alt="ooo" />
          </div>
          <div className={styles.small_div}>
            <img src="../detail/image61.png" alt="ooo" />
          </div>
        </div>
        <div className={styles.detail_main2}>
          <img src="../detail/image63.png" alt="main props" />
        </div>
        <div className={styles.detail_main3}>
          <h3>Havic HV G-92Gamepad</h3>
          <p> (150 reviews)| In Stock</p>
          <div>$192.00</div>
          <p>
            Play station 5 is aver helpful tool for playnig the games in the
            field pf pubg mess free removal pressuresensitive.
          </p>
          <div>
            Colors:
            <input type="radio" />
            <input type="radio" style={{ backgroudColor: "red" }} />
          </div>
          <div className={styles.size}>
            Sizes: <button>XL</button>
            <button>L</button>
            <button>md</button>
            <button>s</button>
            <button>s</button>
          </div>
          <div className={styles.btns}>
            <div>
              <button className={styles.other_btn}>-</button>
              <input type="text" placeholder="1" />
              <button className={styles.other_btn}>+</button>
            </div>
            <div>
              <button className={styles.buy_now}>Buy Now</button>
            </div>
            <div>
              <button className={styles.other_btn}>
                <CiHeart />
              </button>
            </div>
          </div>
          <div className={styles.delivery}>
            <div className={styles.delivery_div}>
              <div>
                <TbTruckDelivery style={{ fontSize: 42 }} />
              </div>
              <div>
                <h5>Free Delivery</h5>
                <p>Enter your postal code for delivery availbility </p>
              </div>
            </div>
            <div className={styles.delivery_div}>
              <div>
                <LuRefreshCw style={{ fontSize: 42 }} />
              </div>
              <div>
                <h5>Return Delivery</h5>
                <p>Free 30 days return delivery .Details </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section_main2}>
        <div className="main_sale">
          <div className="sale"></div>

          <h3>Related Items's</h3>
        </div>
        <div className="home_products">
          {Product.map((product) => (
            <div className="product_div" key={product.id}>
              <div className="image_div">
                <img src={product.img} alt="ppp" className="product_image" />
                <button className="image_btn">Add to Cat</button>
              </div>
              <h5>{product.name}</h5>
              <p>
                {product.nprice}
                <delete>{product.oprice}</delete>
              </p>
              <div className="products_icons">
                <p>{product.heart}</p>
                <p>{product.eye}</p>
              </div>
              <div className="off">
                <p>{product.off}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
