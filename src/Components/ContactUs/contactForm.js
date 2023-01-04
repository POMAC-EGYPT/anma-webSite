//react
import React from "react";

//formik
import { formik, useFormik } from "formik";

//validation
import ContactUsSchema from "../Validation/contactUs-schema";

//material UI
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";

export default (props) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      gender: null,
      email: "",
      message: "",
    },
    validationSchema: ContactUsSchema,
    onSubmit: (values, { resetForm }) => {
      props.handleSubmit(values);
      resetForm({ values: "" });
    },
  });

  console.log(formik.errors )
  return (
    <form onSubmit={formik.handleSubmit} className="myform ps-5 row">
      <div className="col-md-6 col-12 pb-4">
        <FormControl fullWidth>
          <TextField
            variant="outlined"
            id="First name"
            value={formik.values.firstName}
            placeholder="First name"
            onChange={(value) => {
              formik.setFieldValue("firstName", value.target.value);
            }}
            className={
              formik.touched.firstName && formik.errors.firstName
                ? "is-invalid"
                : ""
            }
          />
        </FormControl>
        {formik.touched.firstName && formik.errors.firstName ? (
          <small className="text-danger">{formik.errors.firstName}</small>
        ) : null}
      </div>

      <div className="col-md-6 col-12 pb-4">
        <FormControl fullWidth>
          <TextField
            variant="outlined"
            id="Last name"
            value={formik.values.lastName}
            placeholder="Last name"
            onChange={(value) => {
              formik.setFieldValue("lastName", value.target.value);
            }}
            className={
              formik.touched.lastName && formik.errors.lastName
                ? "is-invalid"
                : ""
            }
          />
        </FormControl>
        {formik.touched.lastName && formik.errors.lastName ? (
          <small className="text-danger">{formik.errors.lastName}</small>
        ) : null}
      </div>

      <div className="col-md-6 col-12 pb-4">
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            className={
              formik.touched.gender && formik.errors.gender ? "is-invalid" : ""
            }
            name="gender"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formik.values.gender}
            label="Gender"
            onChange={(value) => {
              formik.setFieldValue("gender", value.target.value);
            }}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </FormControl>
        {formik.touched.gender && formik.errors.gender ? (
            <small className="text-danger">{formik.errors.gender}</small>
          ) : null}

      </div>
     
      <div className="col-md-6 col-12 pb-4">
        <FormControl fullWidth>
          <TextField
            variant="outlined"
            id="email"
            value={formik.values.email}
            placeholder="Email"
            onChange={(value) => {
              formik.setFieldValue("email", value.target.value);
            }}
            className={
              formik.touched.email && formik.errors.email ? "is-invalid" : ""
            }
          />
        </FormControl>
        {formik.touched.email && formik.errors.email ? (
          <small className="text-danger">{formik.errors.email}</small>
        ) : null}
      </div>

      <div className="col-12">
        <FormControl fullWidth>
          <TextField
            multiline
            rows={6}
            variant="outlined"
            id="message"
            value={formik.values.message}
            placeholder="Your message"
            onChange={(value) => {
              formik.setFieldValue("message", value.target.value);
            }}
            className={
              formik.touched.message && formik.errors.message
                ? "is-invalid"
                : ""
            }
          />
        </FormControl>
        {formik.touched.message && formik.errors.message ? (
          <small className="text-danger">{formik.errors.message}</small>
        ) : null}
      </div>
      <div className="col-12 d-flex justify-content-end py-3">
        <Button variant="contained" className="contactUs-btt" type="submit">
          Send message
        </Button>
      </div>
    </form>
  );
};
