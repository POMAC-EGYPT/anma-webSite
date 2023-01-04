//react
import React, { useEffect, useState, useRef } from "react";

//formik
import { formik, useFormik } from "formik";

//material UI
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Stepper from "@mui/material/Stepper";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

//svg
import Complete from "../../svg/Group68727.svg";
import DownloadSvg from "../../svg/Group68682.svg";

//screens
import ExamQues from "./examQues";

//styles
import "./styles/doTest.css";
import "./styles/doTest-media.css";
import Button from "@mui/material/Button";
import MyFont from '../../css/Gopher-Regular.ttf'
import MyBold from '../../css/Gopher-Bold.ttf'

//pdf
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Page, Text, View, Document, StyleSheet, Font } from "@react-pdf/renderer";


function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <div className="parent">
          <LinearProgress variant="determinate" {...props} />
          <div className="chiled">
            <Typography variant="body2" color="text.secondary">{`${Math.round(
              props.value
            )}`}</Typography>
          </div>
        </div>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};


//Fonts registration
Font.register({ family: 'GopherRegular', src: MyFont })
Font.register({ family: 'GopherBold', src: MyBold })

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
  title: {
    paddingBottom: '20px',
    fontFamily: 'GopherBold',
    fontSize: '25px',
    color: '#000000',
  },
  text: {
    fontFamily: 'GopherRegular',
     color: '#707070',
     fontSize: '18px'
  },
  
});


export default function HorizontalNonLinearStepper(props) {
  console.log(props.scorePercentage);
  console.log(props.userTest.type.name_en);
  const formik = useFormik({
    initialValues: {
      fullArrayAns: [],
      fullArrayQues: [],
    },
    onSubmit: (values, fields) => {
      console.log(values);
    },
  });

  //verify
  const [exam, setExam] = React.useState([]);
  const [steps, setSteps] = React.useState([]);
  const [activeStep, setActiveStep] = React.useState(
    props.secView ? 1 : props.thirdView ? 2 : 0
  );
  const [completed, setCompleted] = React.useState(
    props.secView ? { 0: true } : props.thirdView ? { 0: true, 1: true } : {}
  );

  const prevCountRef = useRef();
  useEffect(() => {
    console.log("debug-counter1-effect");
    prevCountRef.current = exam;
  });
  const prevCount = prevCountRef.current;
  console.log(prevCount);

  const handleTest = (data) => {
    console.log(data);
    setExam(data.answer, 0, activeStep);

    formik.setFieldValue(`fullArrayAns.${activeStep}`, data.answer);
    formik.setFieldValue(`fullArrayQues.${activeStep}`, activeStep);

    console.log(props.userTest.exams.length);
    console.log(activeStep + 1);

    if (props.userTest.exams.length === activeStep + 1) {
      props.handleGetDoneQuesExam(
        formik.values.fullArrayAns,
        formik.values.fullArrayQues
      );
    }

    //
  };

  // useEffect didMount
  useEffect(() => {
    let testname = [];
    props.userTest.exams.map((value) => {
      testname.push(value.title_en);
      setSteps(testname);
    });
  }, []);

  // useEffect didUpdate
  useEffect(() => {
    console.log(formik.values.fullArrayAns);
  });

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);

    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    console.log(newActiveStep);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
    props.handlesavedata(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: "-12px !important",
      left: "calc(-50% + 18px) !important",
      right: "calc(50% + 8px) !important",
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#00A099",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#00A099",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));

  function QontoStepIcon(props) {
    const { active, completed, className } = props;
    return (
      <QontoStepIconRoot ownerState={{ active }} className={className}>
        {completed ? (
          <div className="QontoStepIcon-completedIcon ssss col" />
        ) : (
          <div className="QontoStepIcon-circle ssss col" />
        )}
      </QontoStepIconRoot>
    );
  }
  const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    ...(ownerState.active && {
      color: "#00A099",
    }),
    "& .QontoStepIcon-completedIcon": {
      color: "#00A099",
      backgroundColor: "#00A099",
      width: 8,
      height: 8,
      borderRadius: "50%",
    },
    "& .QontoStepIcon-circle": {
      width: 8,
      height: 8,
      borderRadius: "50%",
      backgroundColor: "#D9D9D9",
    },
  }));

  // Create Document Component
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page} >
        <View style={styles.section}>
          <Text style={styles.title}>    These results indicate that...</Text>
        </View>


        <View style={styles.section}>
        <Text style={styles.text}> 
          {props.reportData.description}
          </Text>
          </View>


          <View style={styles.section}>
          <Text style={styles.title}>
          What should I do Now?
          </Text>
          <Text style={styles.text}> 
              {props.reportData.should_do_en}
            </Text>
          </View>


        <View style={styles.section}>
       
                    <Text style={styles.title}>What next?</Text>
                    <div
                      className="bg-white p-4 d-grid mt-4"
                      style={{ borderRadius: "8px"}}
                    >
                      <Text className="next-title">
                        Talk with a qualified professional
                      </Text>
                      <Text  style={styles.text}> 
                        A free, confidential call could quickly help you get the
                        support you need. Your call will be answered by an
                        assistant psychologist who will listen to your concerns
                        before explaining your options and suggesting the most
                        appropriate treatment.
                      </Text>
                      <Text className="next-title">
                        Call us today: 0203 326 9160
                      </Text>
                      </div>
                    
        </View>
      </Page>
    </Document>
  );
  return (
    <>
      {!props.isWaitingReport && (
        <div
          className={
            props.finalScore ? "Stepper-report-parent" : "Stepper-parent"
          }
        >
          <div className="header-parent">
            <div className="col-12 header-cont row justify-content-center">
              <div
                className={
                  props.finalScore
                    ? "text-start flex-column row justify-content-around"
                    : "text-center flex-column row justify-content-around"
                }
              >
                <span
                  className={
                    props.finalScore
                      ? "header-bold text-start"
                      : "header-bold text-center"
                  }
                >
                  {props.userTest.name_en}
                </span>
                <span className="header-regular">
                  {props.finalScore
                    ? `Age from ${
                        props.userTest.type
                          ? props.userTest.type.age_from
                          : null
                      } years to ${
                        props.userTest.type ? props.userTest.type.age_to : null
                      } years`
                    : `The test consists of ${props.testExam && props.testExam.length} questions that must be answered, There are two types of bad, the first type is answered yes or no, and the second type choose the answer from 1 to 5, and when you finish the answers, you can send them and wait for the result`}
                </span>
                {props.finalScore && (
                  <div className="text-end">
                    <img src={Complete} className="Completesvg" />
                    <span className="examcompStatus text-end">Completed</span>
                  </div>
                )}
              </div>
            </div>

            {/* stepper*/}

            {!props.finalScore && (
              <div className="Stepper-component">
                <Stepper activeStep={activeStep} connector={<QontoConnector />}>
                  {steps.map((label, index) => (
                    <Step key={label} completed={completed[index]}>
                      <StepLabel
                        className="ssasasasas"
                        StepIconComponent={QontoStepIcon}
                      >
                        {label}
                      </StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </div>
            )}

            {/*report*/}
            {props.finalScore && (
              <div className="report-cont p-4">
                <div className="col-12 mb-3">
                  <span className="result-header">
                    These results indicate that...
                  </span>
                </div>

                <div className="row col-12">
                  <span className="firstExpretion col-12 col-md-7 col-lg-8 pe-0">
                    you have a strong likelihood of being autistic.
                  </span>

                  <div className="download-cont col-12 col-md-5 col-lg-4 ms-auto ps-0">
                    <PDFDownloadLink
                      document={<MyDocument />}
                      fileName="movielist.pdf"
                      style={{
                        textDecoration: "none"
                      }}
                    >
                      <Button className="download-btt ">
                        <img src={DownloadSvg} className="download-svg" />
                        Download report PDF
                      </Button>
                    </PDFDownloadLink>
                  </div>

                  <div className="col-12 mt-5">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        style={{
                          width: `${props.scorePercentage}%`,
                          position: "relative",
                        }}
                      >
                        <span
                          className="progressNumb"
                          style={{ position: "absolute" }}
                        >
                          {props.finalScore}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className=" col-12 mt-4">
                    <span className="generalText">
                      {props.reportData.description}
                    </span>
                  </div>

                  <div className=" col-12 mt-4 d-grid">
                    <span className="generaltitle">What should I do Now?</span>
                    <span className="generalText mt-3">
                      {props.reportData.should_do_en}
                    </span>
                  </div>

                  <div className=" col-12 mt-4 d-grid">
                    <span className="generaltitle">What next?</span>
                    <div
                      className="bg-white p-4 d-grid mt-4 xs-cont-white"
                      style={{ borderRadius: "8px" }}
                    >
                      <span className="next-title">
                        Talk with a qualified professional
                      </span>
                      <span className="generalText my-3">
                        A free, confidential call could quickly help you get the
                        support you need. Your call will be answered by an
                        assistant psychologist who will listen to your concerns
                        before explaining your options and suggesting the most
                        appropriate treatment.
                      </span>
                      <span className="next-title">
                        Call us today: 0203 326 9160
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="forms-parent">
              <React.Fragment>
                {props.userTest.exams.map((item, index) => {
                  if (activeStep === index) {
                    return (
                      <div className="examQues-parent p-4" key={item.id}>
                        <ExamQues
                          activeStep={activeStep}
                          handleNext={handleNext}
                          handleBack={handleBack}
                          testExam={props.testExam}
                          handleTest={handleTest}
                          handleGetDoneQuesExam={props.handleGetDoneQuesExam}
                          fullArray={formik.values.fullArray}
                          testExams={props.userTest.exams}
                          reportAppear={props.reportAppear}
                        />
                      </div>
                    );
                  }
                })}
              </React.Fragment>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
