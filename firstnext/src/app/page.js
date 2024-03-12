import React from "react";
import { MdNavigateNext } from "react-icons/md";
import "./home.css";
import { IoLogoApple } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoArrowBackSharp } from "react-icons/io5";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { LuGamepad2 } from "react-icons/lu";
import { Product } from "./Product";
import { GrDeliver } from "react-icons/gr";
import { Ri24HoursFill } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";
import "./about/about.css";
const page = () => {
  return (
    <div className="asdsadsadsadaad">
      <section className="section_1">
        <div className="sepration">
          <ul className="category">
            <li>
              Woman's Fashion <MdNavigateNext />
            </li>
            <li>
              Men's Fashion <MdNavigateNext />
            </li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby's & Toys</li>
            <li>Grocerise & Pets</li>
            <li>Health & beauty</li>
          </ul>
        </div>
        <div className="section1_child">
          <div className="section1_gchild">
            <h3>
              <IoLogoApple />
              <span>iPhone 14 Series</span>
            </h3>
            <h1>Upto 10% off Voucher</h1>
            <button>
              Shop Now <IoArrowForward />
            </button>
          </div>
          <div>
            <img src="./home/iphone.png" alt="props" className="banner" />
          </div>
        </div>
      </section>
      <p className="carousel">
        ..<span className="carousel_span">.</span>..
      </p>
      <div className="main_sale" style={{ marginLeft: 80 }}>
        <div className="sale"></div>

        <h3>Today's</h3>
      </div>

      <section className="section_2">
        <h2>Flash Sales</h2>
        <div className="time_div">
          <p>
            Days
            <br />
            <span>03</span>
          </p>
          :
          <p>
            Hours
            <br />
            <span>06</span>
          </p>
          :
          <p>
            Minutes
            <br />
            <span>56</span>
          </p>
          :
          <p>
            Seconds
            <br />
            <span>43</span>
          </p>
        </div>
        <div>
          <IoArrowBackSharp className="icons_style" />
          <IoArrowForwardSharp className="icons_style" />
        </div>
      </section>

      <div className="newDiv">
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
        <div className="btn_div">
          <button className="products_btn">View All Products</button>
        </div>
      </div>

      <section className="section_3">
        <div className="main_sale">
          <div className="sale"></div>

          <h3>Categories</h3>
        </div>
        <div className="section3_child">
          <h2>Browse By Category</h2>
          <div>
            <IoArrowBackSharp className="icons_style" />
            <IoArrowForwardSharp className="icons_style" />
          </div>
        </div>
        <div className="section3_child2">
          <div className="section3_gchild">
            <MdOutlinePhoneAndroid className="category_icon" />
            <p>Phones</p>
          </div>
          <div className="section3_gchild">
            <HiOutlineComputerDesktop className="category_icon" />
            <p>Computer</p>
          </div>

          <div className="section3_gchild">
            <BsSmartwatch className="category_icon" />
            <p>SmartWatch</p>
          </div>
          <div className="section3_gchild">
            <CiCamera className="category_icon" />
            <p>Camera</p>
          </div>
          <div className="section3_gchild">
            <CiHeadphones className="category_icon" />
            <p>HeadPhones</p>
          </div>
          <div className="section3_gchild">
            <LuGamepad2 className="category_icon" />
            <p>Gaming</p>
          </div>
        </div>
      </section>

      <section className="section_4">
        <div className="main_sale">
          <div className="sale"></div>

          <h3>This Month</h3>
        </div>
        <div className="section4_child">
          <h2>Best Selling Products</h2>
          <div>
            <button className="viewall_btn">View All</button>
          </div>
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
      <section className="section_5">
        <div className="section5_child">
          <h3 style={{ color: " rgb(29, 194, 29)", fontSize: "14px" }}>
            categorise
          </h3>
          <h1 className="heading">Enhance Your Music Experience</h1>
          <div className="paragraphs">
            <p>
              23
              <br />
              Hours
            </p>
            <p>
              18
              <br />
              Days
            </p>
            <p>
              11
              <br />
              Minutes
            </p>
            <p>
              09
              <br />
              Search
            </p>
          </div>
          <button className="buynow_btn">Buy Now</button>
        </div>
        <div className="section5_child2">
          <img src="./home/Frame_694.png" alt="popop" />
        </div>
      </section>
      <section className="section_6">
        <div className="main_sale">
          <div className="sale"></div>

          <h3>Our Products</h3>
        </div>
        <div className="section3_child">
          <h2>Explore Our Products</h2>
          <div>
            <IoArrowBackSharp className="icons_style" />
            <IoArrowForwardSharp className="icons_style" />
          </div>
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

        <button className="products_btn" style={{ margin: "auto" }}>
          View All Products
        </button>
      </section>
      <section className="section_7">
        <div className="main_sale">
          <div className="sale"></div>

          <h3>Featured</h3>
        </div>
        <h1>New Arrival</h1>
        <div className="section7_child">
          <div className="section7_gchild">
            <img src="./home/ps5.png" alt="props" className="ps5" />
            <div className="ps5_div">
              <h2>Play Station 5</h2>
              <p>Check out this masterpices</p>
              <p>Coming out in sale</p>
              <button>Shop Now</button>
            </div>
          </div>
          <div className="section7_gchild2">
            <div className="gchild1">
              <div className="womenimg_div">
                <img src="./home/women.png" alt="popo" className="women_pic" />
              </div>
              <div className="women_div">
                <h2>Women's Collection</h2>
                <p>Feature Women Collection that give you another vibe</p>
                <button>Shop Now</button>
              </div>
            </div>
            <div className="gchild2">
              <div className="ggchild1">
                <img
                  src="./home/Frame_707.png"
                  alt="props"
                  className="small_images"
                />
                <div className="small_div">
                  <h3>Speakers</h3>
                  <p>Amazon Wireless apeakers</p>
                  <button>Shop Now</button>
                </div>
              </div>
              <div className="ggchild2">
                <img
                  src="./home/Frame_706.png"
                  alt="props"
                  className="small_images"
                />
                <div className="small_div">
                  <h3>Perfumes</h3>
                  <p>Gucci Beautiful fragrance</p>
                  <button>Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="about_4">
          <div className="about4_child">
            <GrDeliver className="logo2_img" />
            <h3>Free and Fast Delivery</h3>
            <p>Free delivery for orders </p>
          </div>
          <div className="about4_child">
            <Ri24HoursFill className="logo2_img" />
            <h3>24/7 Customer Support</h3>
            <p>Freinds 24/7 Customer Support </p>
          </div>
          <div className="about4_child">
            <SiAdguard className="logo2_img" />
            <h3>Money Back Guarante</h3>
            <p>We return money with 30 days </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
