//material UI
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Stepper from "@mui/material/Stepper";
import * as React from "react";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";

//screens
import FirstScreen from "./firstScreen";
import SecondScreen from "./secondScreen";
import ThirdScreen from "./thirdScreen";

//styles
import "./styles/doTest.css";
import "./styles/doTest-media.css";

const steps = [
  "Guardian's information",
  "Child's information",
  "Child's medical condition",
];

export default function HorizontalNonLinearStepper(props) {
  console.log(props)
  const [activeStep, setActiveStep] = React.useState(
    props.secView ? 1 : props.thirdView ? 2 : 0
  );
  const [completed, setCompleted] = React.useState(
    props.secView ? { 0: true } : props.thirdView ? { 0: true, 1: true } : {}
  );

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
  return (
    <div className="Stepper-parent">
      <div className="header-parent">
        <div className="col-12 header-cont row py-4 px-0">
          <div className="col-3 col-sm-2 me-4">
            <img src={props.userTest.imagePath} className="header-img" />
          </div>
          <div className="col-8 col-sm-9 text-start flex-column row justify-content-around">
            <span className="header-bold">{props.userTest.name_en}</span>
            <span className="header-regular">
              {`Age from ${
                props.userTest.type ? props.userTest.type.age_from : null
              } years to ${
                props.userTest.type ? props.userTest.type.age_to : null
              } years`}
            </span>
          </div>
        </div>

        {/* stepper*/}
        <div className="Stepper-component">
          <Stepper
            activeStep={activeStep}
            alternativeLabel
            connector={<QontoConnector />}
          >
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color={"#00A099"} onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </div>

        <div className="forms-parent">
          <React.Fragment>
            {activeStep === 0 ? (
              <FirstScreen
                handleNext={handleNext}
                handleFirstViewData={props.handleFirstViewData}
                CustTextField={props.CustTextField}
                firstViewData={props.firstViewData}
              />
            ) : activeStep === 1 ? (
              <SecondScreen
                handleSecondViewData={props.handleSecondViewData}
                CustTextField={props.CustTextField}
                secondViewData= {props.secondViewData}
                handleNext={handleNext}
                handleBack={handleBack}
              />
            ) : activeStep === 2 ? (
              <ThirdScreen
                handleBack={handleBack}
                handleThirdViewData={props.handleThirdViewData}
                CustTextField={props.CustTextField}
                userTest={props.userTest}
                thirdViewData={props.thirdViewData}
                testExam= {props.testExam}
                opendialog= {props.opendialog}
                handleClickOpen= {props.handleClickOpen}
                handleClose= {props.handleClose}
                handleOpenExam= {props.handleOpenExam}
              />
            ) : null}
          </React.Fragment>
        </div>
      </div>
    </div>
  );
}
