"use client";
import React from "react";
import "./about.css";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaGift } from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { AiFillSmile } from "react-icons/ai";
import { Data } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { GrDeliver } from "react-icons/gr";
import { Ri24HoursFill } from "react-icons/ri";
import { SiAdguard } from "react-icons/si";

const page = () => {
  return (
    <div className="main_About">
      <div className="about_1">
        <div className="about_child1">
          <h1>Our Story</h1>
          <p>
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
            Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
            written in 45 BC. This book is a treatise on the theory of ethics,
            very popular during the Renaissance. The first line of Lorem Ipsum,
            "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32.{" "}
          </p>

          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
        </div>
        <div>
          <img src="./about.png" alt="aabout pics" className="about_img" />
        </div>
      </div>
      <div className="about_2">
        <div className="about2_child">
          <FaGift className="logo2_img" />
          <h3>10.5k</h3>
          <p>Saller active our site</p>
        </div>
        <div className="about2_child">
          <AiFillDollarCircle className="logo2_img" />
          <h3>33k</h3>
          <p>Monthly product sale</p>
        </div>
        <div className="about2_child">
          <FaWallet className="logo2_img" />
          <h3>45.5k</h3>
          <p>Customer active</p>
        </div>
        <div className="about2_child">
          <AiFillSmile className="logo2_img" />
          <h3>25k</h3>
          <p>Annual grace sale </p>
        </div>
      </div>
      <div className="about_3">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          slidesPerView={3}
          spaceBetween={30}
        >
          {Data.map((data) => (
            <div>
              <SwiperSlide>
                <img src={data.img} alt="props" className="data_img" />
                <h2>{data.name}</h2>
                <p>{data.status}</p>
                <p>
                  {data.twitter}
                  {data.instagram}
                  {data.linkedin}
                </p>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
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
    </div>
  );
};

export default page;
