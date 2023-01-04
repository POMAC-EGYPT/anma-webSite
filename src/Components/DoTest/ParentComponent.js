//react
import React from "react";

// contexts
import AuthContext from "../../contexts/authContext";

//axios
import axios from "axios";

//components
import Stepper from "./stepper";
import ExamStepper from "./examStepper";
import WaitingReport from "./waitingReport";

//material UI
import { alpha, styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { ConstructionOutlined } from "@mui/icons-material";

export default class DoTest extends React.Component {
  state = {
    testURl: "",
    userTest: [],
    firstViewData: [],
    secondViewData: [],
    thirdViewData: [],
    thirdViewQues: [],
    opendialog: false,
    isExam: false,
    testExam: [],
    examAnswers: [],
    isWaitingReport: false,
    scorePercentage: '',
    reportAppear: false,
    userDataId: null,
    questionsInd: "",
    reportData: '',
    reportId: '',
    finalScore: '',
  };

  componentDidMount() {
    this.getTest();
    console.log(this.state.userTest);
  }

  //firstViewFunc
  handleFirstViewData = (data) => {
    console.log(data);

    this.setState({
      firstViewData: data,
    });
  };
  //secondViewFunc
  handleSecondViewData = (data) => {
    console.log(data);
    this.setState({
      secondViewData: data,
    });
  };
  //thirdViewFunc
  handleThirdViewData = (data) => {
    const questions = [];
    const answers = [];
    {
      Object.keys(data).map((item, index) => {
        console.log(`questions[${index}]: ${item}`);
      });
    }
    {
      Object.values(data).map((item, index) => {
        console.log(`answers[${index}]: ${item}`);
      });
    }

    this.setState({
      thirdViewData: data,
    });
  };

  //doTest function
  handleMedicalCond = () => {
    console.log(this.state.firstViewData);
    console.log(this.state.secondViewData);
    console.log(this.state.thirdViewData);

    const questions = [];
    const answers = [];
    {
      Object.keys(this.state.thirdViewData).map((item, index) => {
        const questions = [];
        // console.log(`questions[${index}]: ${item}`)
        questions.push(`questions[${index}]: ${item}`);
        return questions;
      });
    }

    console.log(questions);

    const alpha = Object.keys(this.state.thirdViewData).map((item, index) => {
      return `questions[${index}]: ${item}`;
    });

    const delta = Object.values(this.state.thirdViewData).map((item, index) => {
      return `answers[${index}]: ${item}`;
    });

    axios({
      method: "post",
      url: `https://anma.pomac.info/api/front/user_data/store`,
      data: {
        first_name: this.state.firstViewData.firstName,
        last_name: this.state.firstViewData.lastName,
        email: this.state.firstViewData.email,
        gender: this.state.firstViewData.gender,
        relatives: this.state.firstViewData.relatives,
        age: this.state.firstViewData.Age,
        child_name: this.state.secondViewData.fullNamme,

        child_birth_date: `${this.state.secondViewData.birthDate.$y}-${this.state.secondViewData.birthDate.$M + 1}-${this.state.secondViewData.birthDate.$D}`,
        child_gender: this.state.secondViewData.chiledGender,
        alpha,
        delta,
      },
    }).then((res) => {
      if (res.data.status) {
        console.log(res.data.data.id);
        this.setState({
          userDataId: res.data.data.id,
        });
      }
    });
  };

  //doEexam functions
  handleGetDoneQuesExam = (data, questionsNumb) => {
    const answer= data
    const question= questionsNumb



  

    
    let form = new FormData()
    const questions = question.map((data, index) => {
      console.log(data);
      console.log(this.state.userTest.exams[data].values);
      const questionsID = this.state.userTest.exams[data].id;
      return  form.append(`exams[${index}]`, questionsID)

      // return `questions[${data}]: ${questionsID}`;
    });

    console.log(questions)
    console.log(answer)


    

    
    this.setState({
      isWaitingReport: true,
    });

 
  form.append(`users_data_id`,this.state.userDataId)
  form.append(`test_id`,this.state.userTest.id)

  
  answer.map((data, index)=>{
    form.append(`answers[${index}]`,data[1])
    })

    axios({
      method: "post",
      url: `https://anma.pomac.info/api/front/user_data/test/store`,
      data: form,
    }).then((res) => {
      if (res.data.status) {
        console.log(res.data.data);

        this.setState({
          reportData: res.data.data.report,
          reportId: res.data.data.report_id,
          finalScore: res.data.data.grade,
          isWaitingReport: false,
          scorePercentage: res.data.data.grade / res.data.data.test.grade * 100
        })
          
        
       
      }
    });
  };

  getTest = () => {
    const URL = window.location.href.toString().split("/")[3].split("=")[1];
    console.log(URL);
    // specific tests
    axios.get("https://anma.pomac.info/api/front/tests").then((res) => {
      console.log(res);
      if (res.status == 200) {
        //
        this.setState({
          userTest: res.data.data.find((test) => test.id == URL),
          thirdViewQues: this.state.userTest.questions,
          testExam: res.data.data.find((test) => test.id == URL).exams,
        });
      }
      console.log(this.state.userTest.exams);
      console.log(res.data.data.find((test) => test.id == URL).exams)
    });
  };

  //dialog
  handleClickOpen = () => {
    this.setState({
      opendialog: true,
    });
  };
  handleClose = () => {
    this.setState({
      opendialog: false,
    });
  };

  handleOpenExam = () => {
    this.setState({
      isExam: true,
      opendialog: false,
    });
    this.handleMedicalCond();
  };

  //textField style
  CustTextField = styled((props) => (
    <TextField InputProps={{ disableUnderline: true }} {...props} />
  ))(({ theme }) => ({
    "& .MuiFilledInput-root": {
      border: "1px solid #E9EAEC",
      overflow: "hidden",
      borderRadius: 4,
      backgroundColor: "#FAFAFA",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
      "&:hover": {
        backgroundColor: "#FAFAFA",
      },
      "&.Mui-focused": {
        backgroundColor: "#FAFAFA",
        label: "red",
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} #00A099`,
        borderColor: "#00A099",
      },
    },
  }));

  render() {
    console.log(this.state.isWaitingReport);
    return (
      <>
        {this.state.isWaitingReport ? (
          <div className="waiting-parent">
            <WaitingReport firstViewData={this.state.firstViewData} />
          </div>
        ) : null}

        {!this.state.isExam ? (
          <div className="DoTest-component">
            <Stepper
              //general
              userTest={this.state.userTest}
              CustTextField={this.CustTextField}
              //first screen
              handleFirstViewData={this.handleFirstViewData}
              firstViewData={this.state.firstViewData}
              //second screen
              handleSecondViewData={this.handleSecondViewData}
              secondViewData={this.state.secondViewData}
              //third screen
              handleThirdViewData={this.handleThirdViewData}
              thirdViewData={this.state.thirdViewData}
              opendialog={this.state.opendialog}
              handleClickOpen={this.handleClickOpen}
              handleClose={this.handleClose}
              handleOpenExam={this.handleOpenExam}
              testExam={this.state.testExam}
            />
          </div>
        ) : (
          <div className="DoExam-component ">
            <ExamStepper
              testExam={this.state.testExam}
              userTest={this.state.userTest}
              handleGetDoneQuesExam={this.handleGetDoneQuesExam}
              isWaitingReport={this.state.isWaitingReport}
              reportAppear={this.state.reportAppear}
              reportData= {this.state.reportData}
              reportId= {this.state.reportId}
              finalScore= {this.state.finalScore}
              isWaitingReport= {this.state.isWaitingReport}
              scorePercentage= {this.state.scorePercentage}
            />
          </div>
        )}
      </>
    );
  }
}
DoTest.contextType = AuthContext;
