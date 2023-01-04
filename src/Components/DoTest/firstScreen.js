//react
import React, { useEffect, useState } from "react";

//formik
import { formik, useFormik } from "formik";

//validation
import firstValidation from "../Validation/doTest/firstScreen";

//material UI
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import { formControlUnstyledClasses } from "@mui/base";

export default (props) => {
  console.log(props.firstViewData.length)
  console.log(props.firstViewData)
  const CustTextField = props.CustTextField;
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: "",
      relatives: "",
      Age: "",
      email: "",
    },
      validationSchema: firstValidation,
    onSubmit: (values, fields) => {
      console.log(values);
      props.handleNext();
      window.scrollTo(0, 0);
      props.handleFirstViewData(values);
    },
  });

   //useEffect didMount
   useEffect(() => {
    if(props.firstViewData.length !== 0){
      formik.setFieldValue('firstName' , props.firstViewData.firstName)
      formik.setFieldValue('lastName' , props.firstViewData.lastName)
      formik.setFieldValue('gender' , props.firstViewData.gender)
      formik.setFieldValue('relatives' , props.firstViewData.relatives)
      formik.setFieldValue('Age' , props.firstViewData.Age)
      formik.setFieldValue('email' , props.firstViewData.email)
    }
   }, [])


   console.log(formik.values)
   console.log(props.firstViewData)
   console.log(formik.touched)

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="myform row py-4 bg-white"
    >
      <div className="header-form text-start mb-5 ">
        <span>Guardian's information</span>
      </div>

      <div className="col-md-6 col-12">
        <CustTextField
          fullWidth
          style={{ marginTop: 11 }}
          label="First name"
          id="firstName"
          value={formik.values.firstName}
          variant="filled"
          onBlur={formik.handleBlur}
          onChange={(value) => {
            formik.setFieldValue("firstName", value.target.value);
          }}
        />
         {formik.touched.firstName && formik.errors.firstName ? (
          <small className="text-danger">{formik.errors.firstName}</small>
        ) : null}
      </div>

      <div className="col-md-6 col-12">
        <CustTextField
          fullWidth
          style={{ marginTop: 11 }}
          label="Last name"
          id="lastName"
          name="lastName"
          value={formik.values.lastName}
          onBlur={formik.handleBlur}
          variant="filled"
          onChange={(value) => {
            formik.setFieldValue("lastName", value.target.value);
          }}
        />
         {formik.touched.lastName && formik.errors.lastName ? (
          <small className="text-danger">{formik.errors.lastName}</small>
        ) : null}
      </div>
     

      <div className="col-md-6 col-12">
        <FormControl fullWidth>
          <InputLabel variant="filled" id="demo-simple-select-label">
            Gender
          </InputLabel>
          <Select
            inputProps={{ "aria-label": "Without label" }}
            name="gender"
            value={formik.values.gender}
            onBlur={formik.handleBlur}
            onChange={(value) => {
              formik.setFieldValue("gender", value.target.value);
            }}
          >
            <MenuItem value='male'>Male</MenuItem>
            <MenuItem value='female'>Female</MenuItem>
          </Select>
        </FormControl>
        {formik.touched.gender && formik.errors.gender ? (
          <small className="text-danger">{formik.errors.gender}</small>
        ) : null}
      </div>

      <div className="col-md-6 col-12">
        <CustTextField
          fullWidth
          style={{ marginTop: 11 }}
          label="Relatives"
          id="relatives"
          value={formik.values.relatives}
          variant="filled"
          onBlur={formik.handleBlur}
          onChange={(value) => {
            formik.setFieldValue("relatives", value.target.value);
          }}
        />
         {formik.touched.relatives && formik.errors.relatives ? (
          <small className="text-danger">{formik.errors.relatives}</small>
        ) : null}
      </div>

      <div className="col-md-6 col-12">
        <CustTextField
          fullWidth
          style={{ marginTop: 11 }}
          label="Age"
          id="Age"
          value={formik.values.Age}
          variant="filled"
          type="number"
          onBlur={formik.handleBlur}
          onChange={(value) => {
            formik.setFieldValue("Age", value.target.value);
          }}
        />
         {formik.touched.Age && formik.errors.Age ? (
          <small className="text-danger">{formik.errors.Age}</small>
        ) : null}
      </div>

      <div className="col-md-6 col-12">
        <CustTextField
          fullWidth
          style={{ marginTop: 11 }}
          label="Email address"
          id="email"
          value={formik.values.email}
          variant="filled"
          onBlur={formik.handleBlur}
          onChange={(value) => {
            formik.setFieldValue("email", value.target.value);
          }}
        />
         {formik.touched.email && formik.errors.email ? (
          <small className="text-danger">{formik.errors.email}</small>
        ) : null}
      </div>

      <div className="d-flex justify-content-end nextBtt-cont">
        <Button
          className="nextBtt-able"
          type="submit"
          disabled={!(formik.isValid && formik.dirty) && props.firstViewData.length === 0}
        >
          Continue
        </Button>
      </div>
    </form>
  );
};
