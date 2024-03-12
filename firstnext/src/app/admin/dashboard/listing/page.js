import React from "react";
import "./listing.css";
import "../All_categories/allcategory.css";

const page = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Products Listing</h1>
      <table border={1} className="product_table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Old Price</th>
            <th>Product Category</th>
            <th>Product Description</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>IMMMM</td>
            <td>Iphone</td>
            <td>$1230</td>
            <td>$1330</td>
            <td>Mobiles</td>
            <td>
              I phone is a very beautiful brand with multiple authentivcatiolns
              and the verifications
            </td>
            <td>2 march 2024</td>
            <td>
              <button className="delete">Delete</button>
              <button className="edit">Edit</button>
            </td>
          </tr>
          <tr>
            <td>IMMMM</td>
            <td>Iphone</td>
            <td>$1230</td>
            <td>$1330</td>
            <td>Mobiles</td>
            <td>
              I phone is a very beautiful brand with multiple authentivcatiolns
              and the verifications
            </td>
            <td>2 march 2024</td>
            <td>
              <button className="delete">Delete</button>
              <button className="edit">Edit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default page;
