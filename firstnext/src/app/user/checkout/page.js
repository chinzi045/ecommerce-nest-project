import React from "react";
import styles from "./styles.module.css";
import { Product } from "../detail/Products";
const page = () => {
  return (
    <div className={styles.checkout}>
      <section className={styles.billing_detail}>
        <h1>Billing Details</h1>
        <div className={styles.billing_input}>
          <label htmlFor="fname">First Name *</label>
          <input type="text" />
        </div>
        <div className={styles.billing_input}>
          <label htmlFor="fname">Compnay Name</label>
          <input type="text" />
        </div>
        <div className={styles.billing_input}>
          <label htmlFor="fname">Street Address</label>
          <input type="text" />
        </div>
        <div className={styles.billing_input}>
          <label htmlFor="fname">Apartment ,floor etc (optional)</label>
          <input type="text" />
        </div>
        <div className={styles.billing_input}>
          <label htmlFor="fname">Town/city*</label>
          <input type="text" />
        </div>
        <div className={styles.billing_input}>
          <label htmlFor="fname">Phone Number*</label>
          <input type="text" />
        </div>
        <div className={styles.billing_input}>
          <label htmlFor="fname">Email Address*</label>
          <input type="text" />
        </div>
        <div>
          <input type="checkbox" />
          save this information for faster check-out next time
        </div>
      </section>
      <section className={styles.payment_method}>
        <div className={styles.selected_products}>
          <div className={styles.image_div}>
            <div>
              <img
                src="../../home/Frame_611.png"
                alt="image"
                width={48}
                height={42}
              />
            </div>
            <div> LCD monitor</div>
          </div>
          <p>$650</p>
        </div>
        <div className={styles.selected_products}>
          <div className={styles.image_div}>
            <div>
              <img
                src="../../home/Frame_612.png"
                alt="image"
                width={48}
                height={42}
              />
            </div>
            <div> keyboard</div>
          </div>
          <p>$650</p>
        </div>
        <div className={styles.selected_products}>
          <p>Subtotal:</p>
          <p>$1750</p>
        </div>
        <div className={styles.selected_products}>
          <p>Shipping:</p>
          <p>Free</p>
        </div>
        <div className={styles.selected_products}>
          <p>Total:</p>
          <p>$1750</p>
        </div>
        <div>
          <input type="radio" />
          Payment Method
          <input type="radio" checked={true} />
          Cash On Delivery
        </div>
        <div className={styles.btns_div}>
          <input type="text" placeholder="Coupon Code" />
          <button>Apply Coupon</button>
        </div>
        <button className={styles.place_order}>Place Order</button>
      </section>
    </div>
  );
};

export default page;
