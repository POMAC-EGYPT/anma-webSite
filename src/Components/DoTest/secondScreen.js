//react
import React, { useEffect, useState } from "react";

//formik
import { formik, useFormik } from "formik";

//validation
import secondValidation from "../Validation/doTest/secondScreen";

//material UI
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import { SvgIcon } from "@mui/material";

//mateial UI - datePicker
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Calendar from "../../svg/calendar.svg";

export default (props) => {
  console.log(props.secondViewData.length)
  console.log(props.secondViewData)
  const CustTextField = props.CustTextField;
  const formik = useFormik({
    initialValues: {
      fullNamme: "",
      birthDate: "",
      chiledGender: "",
    },
     validationSchema: secondValidation,
    onSubmit: (values, fields) => {
      console.log(values);
      props.handleNext();
      window.scrollTo(0, 0);
      props.handleSecondViewData(values);
    },
  });


//useEffect didMount
useEffect(() => {
  if(props.secondViewData.length !== 0){
    console.log(props.secondViewData.birthDate)
   
    formik.setFieldValue('fullNamme' , props.secondViewData.fullNamme)
    formik.setFieldValue('birthDate' ,  `${props.secondViewData.birthDate}`)
    formik.setFieldValue('chiledGender' , props.secondViewData.chiledGender)
  }
 }, [])



  const DateIcon = (props) => {
    return <img src={Calendar} />;
  };

  console.log(formik.values)
  console.log(formik.touched)
  console.log(formik.errors)
  console.log(formik.errors.birthDate);
  console.log(formik.values.birthDate.$M + 1)
  console.log(`${formik.values.birthDate.$y}-${formik.values.birthDate.$M + 1}-${formik.values.birthDate.$D}`)

//prevent user writting in filed
  const onKeyDown = (e) => {
    e.preventDefault();
 };
  return (
    <form onSubmit={formik.handleSubmit} className="myform row py-4 bg-white">
      <div className="header-form text-start mb-5">
        <span>Child's information</span>
      </div>

      <div className="col-md-6 col-12">
        <CustTextField
          fullWidth
          style={{ marginTop: 11 }}
          label="Name"
          id="fullNamme"
          value={formik.values.fullNamme}
          variant="filled"
          onBlur={formik.handleBlur}
          onChange={(value) => {
            formik.setFieldValue("fullNamme", value.target.value);
          }}
        />
        {formik.touched.fullNamme && formik.errors.fullNamme ? (
          <small className="text-danger">{formik.errors.fullNamme}</small>
        ) : null}
      </div>

      <div className="col-md-6 col-12 datePicker">
        <div className="w-100 ssss" fullWidth>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              components={{
                OpenPickerIcon: DateIcon,
              }}
              label="Birthday"
              value={formik.values.birthDate}
              disableFuture
              onBlur={formik.handleBlur}
              onChange={(value) => {
                console.log(value);
                formik.setFieldValue("birthDate", value);
              }}
              renderInput={(params) => <CustTextField  onKeyDown={onKeyDown}    onBlur={formik.handleBlur}{...params} /> }
            />
          </LocalizationProvider>
        </div>
        {/* {formik.touched.birthDate  && formik.errors.birthDate ? (
          <p className="text-danger">{formik.errors.birthDate}</p>
        ) : null} */}
      </div>
      {formik.touched.birthDate  && formik.errors.birthDate ? (
          <p className="text-danger">{formik.errors.birthDate}</p>
        ) : null}

      <div className="col-md-6 col-12">
        <FormControl fullWidth>
          <InputLabel variant="filled" id="demo-simple-select-label">
            Gender
          </InputLabel>
          <Select
            inputProps={{ "aria-label": "Without label" }}
            name="chiledGender"
            value={formik.values.chiledGender}
            onBlur={formik.handleBlur}
            onChange={(value) => {
              formik.setFieldValue("chiledGender", value.target.value);
            }}
          >
            <MenuItem value='male'>Male</MenuItem>
            <MenuItem value='female'>Female</MenuItem>
          </Select>
        </FormControl>
        {formik.touched.chiledGender && formik.errors.chiledGender ? (
          <small className="text-danger">{formik.errors.chiledGender}</small>
        ) : null}
      </div>

      <div className="xsBtt-cont row justify-content-between nextBtt-cont">
        <Button className="col-2 backBtt" onClick={props.handleBack}>
          back
        </Button>

        <Button
          className="nextBtt-able"
          type="submit"
           disabled={!(formik.isValid && formik.dirty) && props.secondViewData.length === 0 }
          >
          Next
        </Button>
      </div>
    </form>
  );
};
