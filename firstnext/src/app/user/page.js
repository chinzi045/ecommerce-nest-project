import React from "react";
import styles from "./styles.module.css";

const page = () => {
  return (
    <>
      <section className={styles.user_section}>
        <div className={styles.user_1child}>
          <h3 style={{ margin: 0 }}>Manage My Account</h3>
          <ul>
            <li style={{ color: "red" }}>My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options</li>
          </ul>
          <h3>My Orders</h3>
          <ul>
            <li>My Returns</li>
            <li>My Cancellations</li>
            <li>My Payment Options</li>
          </ul>
          <h3>My WishList</h3>
        </div>
        <div className={styles.user_2child}>
          <div className={styles.inner}>
            <h2>Edit your Profile</h2>
            <div className={styles.inpuuu}>
              <div className={styles.inpuu}>
                <div className={styles.inpu}>
                  <label htmlFor="firstname">First Name </label>
                  <input
                    type="text"
                    placeholder="Julia"
                    className={styles.small_inputss}
                  />
                </div>
                <div className={styles.inpu}>
                  <label htmlFor="lastname">Last Name</label>
                  <input
                    type="text"
                    placeholder="iraj"
                    className={styles.small_inputss}
                  />
                </div>
              </div>
              <div className={styles.inpuu}>
                <div className={styles.inpu}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="admian@gmail.com"
                    className={styles.small_inputss}
                  />
                </div>
                <div className={styles.inpu}>
                  <label htmlFor="Address">Address</label>
                  <input
                    type="text"
                    placeholder="Lahore :Street no 45"
                    className={styles.small_inputss}
                  />
                </div>
              </div>

              <div className={styles.pass}>
                <label htmlFor="Passord">Password Changes</label>
                <input
                  type="password"
                  placeholder="current Password"
                  className={styles.big_inputs}
                />
                <input
                  type="password"
                  placeholder="new Password"
                  className={styles.big_inputs}
                />
                <input
                  type="password"
                  placeholder="confirm Password"
                  className={styles.big_inputs}
                />
              </div>
              <div className={styles.pbutton}>
                <button className={styles.cancel_btn}>Cancel</button>
                <button className={styles.save_btn}>Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
