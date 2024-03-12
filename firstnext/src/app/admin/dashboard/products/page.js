import React from "react";
import "./product.css";

const page = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add Products</h1>
      <form className="product_form">
        <div>
          <label>Enter Product Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Enter Product Price</label>
          <input type="text" />
        </div>
        <div>
          <label>Enter Product Old Price</label>
          <input type="text" />
        </div>
        <div>
          <label>Enter Product Description</label>
          <textarea rows={10} />
        </div>
        <div style={{ width: "310px" }}>
          <label>Select Category</label>
          <select className="custom_select">
            <option value="0">Select Category:</option>
            <option value="1">Mobile</option>
            <option value="2">Laptop</option>
            <option value="3">Citroen</option>
            <option value="4">Ford</option>
            <option value="5">Honda</option>
            <option value="6">Jaguar</option>
            <option value="7">Land Rover</option>
            <option value="8">Mercedes</option>
            <option value="9">Mini</option>
            <option value="10">Nissan</option>
            <option value="11">Toyota</option>
            <option value="12">Volvo</option>
          </select>
        </div>
        <div>
          <label>Select Product Images</label>
          <input type="file" />
        </div>
        <div>
          <button>Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default page;
