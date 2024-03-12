"use client";
import React, { useState } from "react";
import "./category.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  title: "",
};
const validationSchema = Yup.object({
  title: Yup.string().required("Title is Required !"),
});

const page = () => {
  // const [title, setTitle] = useState("");

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: async (values, { resetForm }) => {
        const data = await fetch("http://localhost:3000/category", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const response = await data.json();
        if (response.success) {
          window.alert(response.message);
        }
        console.log(response);
        resetForm({ values: "" });
      },
    });

  return (
    <div className="category_main">
      <h1>Create Categories</h1>
      <form onSubmit={handleSubmit} className="category_main">
        <div className=" category_div">
          <label htmlFor="CategoryName">Enter the Category Name</label>
          <input
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            name="title"
            value={values.title}
          />

          {errors.title && touched.title ? <span>{errors.title}</span> : null}
        </div>

        <button type="submit">Add Category</button>
      </form>
    </div>
  );
};

export default page;
