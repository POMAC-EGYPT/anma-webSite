//react
import React, { useEffect, useState, useRef } from "react";

//formik
import { formik, useFormik } from "formik";

//validation

//material UI
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default (props) => {
  console.log(props.activeStep);
  const [alignment, setAlignment] = React.useState("null");
  const prevCountRef = useRef();
  useEffect(() => {
    console.log("debug-counter1-effect");
    prevCountRef.current = alignment;
  });
  const prevCount = prevCountRef.current;
  console.log(prevCount);

  //useEffect didMount
  useEffect(() => {
    console.log(props)
    console.log(props.fullArrayQues)
    console.log(props.activeStep)
    console.log(alignment)
    console.log(props.fullArrayAns[props.activeStep + 1])
   
    if (props.fullArrayAns[props.activeStep]) {
      console.log(props.fullArrayAns[props.activeStep][1])
        formik.setFieldValue("answer", props.fullArrayAns[props.activeStep]);
        setAlignment(props.fullArrayAns[props.activeStep]);
    }
}, []);

  //formik
  const formik = useFormik({
    initialValues: {
      answer: [],
      questions: [],
    },
    //  validationSchema: firstValidation,
    onSubmit: (values, fields) => {
      console.log(values);
      // if( props.activeStep + 1 !== props.testExams.length){
      console.log(values.answer);
      props.handleTest(values);
      props.handleNext();
      formik.resetForm();
      // }else{
      //   props.handleTest(values);
      // }
    },
  });

  const handleAlignment = (event, newAlignment) => {
    console.log(event.target);
    console.log(newAlignment);
    let arr = [event.target.id, newAlignment];

    console.log(arr);
    console.log(event.target.id);
    console.log(newAlignment);
    setAlignment(newAlignment);
    formik.setFieldValue(`answer`, arr);
  };


  return props.testExams.map((item, index) => {
    if (index === props.activeStep) {
      return (
        <form key={item.id} onSubmit={formik.handleSubmit} className="">
          <div key={item.id} className="examQues-ques">
            <span>{`${index + 1}- ${item.title_en}`}</span>
            <div className="examQues-ans">
              {item.type == "true-false" ? (
                <div className="yesOrNo">
                  <ToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    className="row"
                  >
                    {item.values.map((answer, answerInd) => {
                      return (
                        <ToggleButton
                          key={answerInd.id}
                          value={answer.id}
                          id={answerInd}
                          aria-label="left aligned"
                        >
                          {answer.value == 1 ? "Yes" : "No"}
                        </ToggleButton>
                      );
                    })}
                  </ToggleButtonGroup>
                </div>
              ) : (
                <div className="options">
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                >
                  {item.values.map((answer, answerInd) => {
                    console.log(answerInd)
                    return (
                      <ToggleButton
                        key={answerInd.id}
                        id={answerInd}
                        value={answer.id}
                        aria-label="left aligned"
                      >
                        {answerInd + 1}
                      </ToggleButton>
                    );
                  })}
                </ToggleButtonGroup>
                </div>
              )}

              <div className= {props.activeStep !== 0 ? "nextBtt-cont d-flex justify-content-between" : "nextBtt-cont d-flex justify-content-center"}>
                {props.activeStep !== 0 && (
                  <Button onClick={props.handleBack} className="backBtt">
                    Back
                  </Button>
                )}

                <Button
                 type="submit"
                 className={props.activeStep === 0 ? 'xs-btt nextBtt-able' : 'nextBtt-able'}
                 disabled= {formik.values.answer.length === 0}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </form>
      );
    }
  });
};
