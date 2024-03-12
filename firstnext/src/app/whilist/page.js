import React from "react";
import styles from "./styles.module.css";
import { CiShoppingCart } from "react-icons/ci";
import { Product } from "../Product";

const page = () => {
  return (
    <>
      <section className={styles.whishlist_1}>
        <div className={styles.whishlist_child}>
          <h3>Wishlist(4)</h3>
          <button className={styles.whishlist_btn}>Move All To Bag</button>
        </div>
        <div className={styles.whishlist_cart_div}>
          {Product.map((product) => (
            <div className={styles.whishlist_cart} key={product.id}>
              <div className={styles.thumbnail}>
                <img src={product.img} alt="props" />
                <div>{product.delete}</div>
                <span>{product.off}</span>
                <button>
                  <CiShoppingCart style={{ fontSize: "22px", margin: "6px" }} />
                  Add To Cart
                </button>
              </div>
              <div className={styles.descprition}>
                <h5>{product.name}</h5>
                <div>{product.nprice}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.whishlist_1}>
        <div className={styles.whishlist_child}>
          <h3>
            <span className={styles.whishlist_child_1}></span>Just For You
          </h3>
          <button className={styles.btn_2}>Seel All</button>
        </div>
        <div className={styles.whishlist_cart_div}>
          {Product.map((product) => (
            <div className={styles.whishlist_cart} key={product.id}>
              <div className={styles.thumbnail}>
                <img src={product.img} alt="props" />
                <div>{product.eye}</div>
                <span>{product.off}</span>
                <button>
                  <CiShoppingCart style={{ fontSize: "22px", margin: "6px" }} />
                  Add To Cart
                </button>
              </div>
              <div className={styles.descprition}>
                <h5>{product.name}</h5>
                <div>{product.nprice}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;
