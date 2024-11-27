import React from "react";
import { useFormik } from "formik";
import { RegisterFormSchemas } from "../schemas/RegisterFormSchemas";
import { useState } from "react";

function RegisterForm() {
  const sumbit = (values, action) => {
    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
    validationSchema: RegisterFormSchemas, // Import your schema here
    onSubmit: sumbit, // Your submit function
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label>E-Mail</label>
          <input
            type="text"
            id="email"
            placeholder="Email giriniz"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="input-error"> {errors.email} </p>}
        </div>
        <div className="inputDiv">
          <label>Yas</label>
          <input
            type="number"
            id="age"
            placeholder="Yasinizi giriniz"
            value={values.age}
            onChange={handleChange}
          />
          {errors.age && <p className="input-error"> {errors.age} </p>}
        </div>
        <div className="inputDiv">
          <label>Sifre</label>
          <input
            type="password"
            id="password"
            placeholder="Sifrenizi giriniz"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className="input-error"> {errors.password} </p>
          )}
        </div>
        <div className="inputDiv">
          <label>Sifre Tekrari</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Sifrenizi tekrar giriniz"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="input-error"> {errors.confirmPassword} </p>
          )}
        </div>
        <div className="inputDiv">
          <div className="checkboxDiv">
            <input
              style={{ width: "20px", height: "12px" }}
              type="checkbox"
              id="term"
              placeholder=""
              value={values.term}
              onChange={handleChange}
            />
            <label>Kullanici Sozlesmesini Kabul Ediyorum</label>
          </div>
          {errors.term && <p className="input-error"> {errors.term} </p>}
        </div>
        <button type="submit" className="kaydet-button">
          KAYDET
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
