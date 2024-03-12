import React from "react";
import { Product } from "../Product";
import styles from "./styles.module.css";
import { RiChatDeleteLine } from "react-icons/ri";
import { SlArrowUp } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";

const page = () => {
  return (
    <>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.cart_row} id="row_head">
            <td>Product</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Subtotal</td>
          </tr>

          {Product.map((product) => (
            <tr className={styles.cart_row}>
              <td className={styles.image_td}>
                <img src={product.img} alt="props" width={50} height={39} />
                {product.name}
                <RiChatDeleteLine className={styles.icon_cross} />
              </td>
              <td>{product.nprice}</td>

              <td>
                <div className={styles.quantity}>
                  {product.quantity}
                  <div className={styles.up_down}>
                    <SlArrowUp />
                    <SlArrowDown />
                  </div>
                </div>
              </td>

              <td>{product.oprice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.btn_div}>
        <button>Return To Shop</button>
        <button>Update Cart</button>
      </div>
      <div className={styles.coupon_div}>
        <div className={styles.coupon_btn}>
          <input type="text" placeholder="Coupon Code" />
          <button>Apply Coupon</button>
        </div>
        <div className={styles.total_sum}>
          <h4>Cart Total</h4>
          <div className={styles.inputs}>
            <p>SubTotal:</p>
            <p>$1759</p>
          </div>
          <div className={styles.inputs}>
            <p>Shiping:</p>
            <p>Free</p>
          </div>
          <div className={styles.inputs}>
            <p>Total</p>
            <p>$1230</p>
          </div>
          <button>Process to checkout</button>
        </div>
      </div>
    </>
  );
};

export default page;
