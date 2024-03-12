"use client";
import React, { useEffect, useState } from "react";
import "./allcategory.css";
import Moment from "moment";

const page = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await fetch("http://localhost:3000/category");
      const response = await data.json();
      console.log(response, "rr");
      setData(response);
    })();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>List Of All Categories</h1>
      <table className="table" border={1}>
        <thead>
          <tr>
            <th>Seial No</th>
            <th>Category Name</th>
            <th>Created_Date & Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {data.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.title}</td>

                <td>
                  {data.created_at &&
                    Moment.utc(data.created_at)
                      .local()
                      .format("YYYY-MM-DD , HH:mm:ss")}
                </td>
                <td>
                  <button className="delete">Delete</button>
                  <button className="edit">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default page;
