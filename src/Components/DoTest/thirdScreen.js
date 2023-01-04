//react
import React, { useEffect, useState } from "react";

//formik
import { formik, isEmptyArray, useFormik } from "formik";

//validation
import thirdValidation from "../Validation/doTest/thirdScreen";

//material UI
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import { OtherHousesOutlined } from "@mui/icons-material";
import { DialogContentText } from "@mui/material";

//svg files
import ScooterImg from "../../svg/Scooter-cuate.svg";

//dialog
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

export default (props) => {
  console.log(props.testExam.length)
  const [isValid, seIsValid] = useState(false);

  const questions = props.userTest.length !== 0 ? props.userTest.questions : [];
  const CustTextField = props.CustTextField;
  const formik = useFormik({
    initialValues: {},
    //  validationSchema: thirdValidation,
    onSubmit: (values, fields) => {
      console.log(values);

      props.handleThirdViewData(values);
      props.handleClickOpen();
    },
  });

  // useEffect didMount
  useEffect(() => {
    questions.map((value) => {
      formik.setFieldValue(`${value.id}`, "");
    });
  }, []);

  //useEffect didUpdate
  useEffect(() => {
    const allFields = Object.values(formik.values);
    console.log(allFields);

    if (allFields.includes("")) {
      seIsValid(false);
    } else {
      seIsValid(true);
    }
  });

  
  return (
    <form onSubmit={formik.handleSubmit} className="myform row py-4 bg-white">
      <div className="header-form text-start mb-5">
        <span>Child's medical condition</span>
      </div>

      {questions.length !== 0
        ? questions.map((question, i) => {
            console.log(question.id);
            if (question.type == "select") {
              console.log(question.title_en);
              console.log(i);
              return (
                <div className="col-md-6 col-12" key={question.id}>
                  <FormControl fullWidth>
                    <InputLabel variant="filled" id="demo-simple-select-label">
                      {question.title_en}
                    </InputLabel>

                    <Select
                      defaultValue=""
                      inputProps={{ "aria-label": "Without label" }}
                      // value={formik.values.questions.title_en}
                      name={`${question.id}`}
                      id={`${question.id}`}
                      onBlur={formik.handleBlur}
                      onChange={(value) => {
                        console.log(value.target);
                        console.log(value.target.value);
                        formik.setFieldValue(
                          `${question.id}`,
                          value.target.value
                        );
                      }}
                    >
                      {question.values.map((answer, i) => {
                        console.log(answer.answer_en);
                        console.log(i);
                        return (
                          <MenuItem key={i} value={answer.answer_en}>
                            {answer.answer_en}
                          </MenuItem>
                        );
                      })}
                    </Select>
                    {formik.touched.questions && formik.errors.questions ? (
                      <small className="text-danger">
                        {formik.errors.questions}
                      </small>
                    ) : null}
                  </FormControl>
                </div>
              );
            } else {
              console.log(question.id);
              return (
                <div className="col-md-6 col-12">
                  <CustTextField
                    fullWidth
                    style={{ marginTop: 11 }}
                    label={question.title_en}
                    // value={formik.values.questions.title_en}
                    name={`${question.id}`}
                    id={`${question.id}`}
                    onChange={(value) => {
                      console.log(value.target.value);
                      formik.setFieldValue(
                        `${question.id}`,
                        value.target.value
                      );
                    }}
                    variant="filled"
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.fullNamme && formik.errors.fullNamme ? (
                    <small className="text-danger">
                      {formik.errors.fullNamme}
                    </small>
                  ) : null}
                </div>
              );
            }
          })
        : null}

      <div className="xsBtt-cont row justify-content-between nextBtt-cont">
        <Button className="col-2 backBtt" onClick={props.handleBack}>
          back
        </Button>

        <Button
          className="nextBtt-able"
          type="submit"
          disabled={!isValid}
        >
          Next
        </Button>
      </div>

      <Dialog
        open={props.opendialog}
        onClose={props.handleClose}
        className="dialog-parent"
      >
        <DialogContent>
          <img src={ScooterImg} className="dialog-img" />
          <DialogTitle className="dialog-title">Let's start test</DialogTitle>
          <DialogContentText className="dialog-text">
            {`The test consists of ${props.testExam.length} questions that must be answered, There are two types of bad, the first type is answered yes or no, and the second type choose the answer from 1 to 5, and when you finish the answers, you can send them and wait for the result`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleOpenExam}>Let's start test</Button>
        </DialogActions>
      </Dialog>
    </form>
  );
};
