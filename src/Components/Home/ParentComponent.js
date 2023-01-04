//react
import React from "react";

// contexts
import AuthContext from "../../contexts/authContext";

//axios
import axios from "axios";

//component
import HomeChild from "./home";

//svg files
import Card1 from "../../svg/Group68630.svg";
import Card2 from "../../svg/Group68634.svg";
import Card3 from "../../svg/Group68633.svg";
import Card4 from "../../svg/Group68628.svg";
import Card5 from "../../svg/Group68636.svg";
import Card6 from "../../svg/Group68638.svg";

export default class Home extends React.Component {
  state = {
    featuresCards: [
      {
        color: "#C8CCDB",
        text: "Addressing any developmental or behavioral disorders that the child is exposed to at an early stage that limits the occurrence of an educational problem; Save him from the danger of dropping out",
        svgFiles: Card1,
      },
      {
        color: "#D8EEED",
        text: "Verifying parents' doubts and teachers' confusion, and identifying the type of disorders that the child suffers from, reducing the problem of medical shopping and hesitating to the wrong authorities or incompetent specialists.",
        svgFiles: Card2,
      },
      {
        color: "#FFD4D7",
        text: "Support the stages of normal growth and provide guidance and recommendations to parents so that the child can grow and acquire the necessary skills to support his strengths",
        svgFiles: Card3,
      },
      {
        color: "#F1FAEE",
        text: "Supporting the relentless efforts of the state to care for children and to provide everyone with free and quality education",
        svgFiles: Card4,
      },
      {
        color: "#CEE5F3",
        text: "Consistency with the state’s strategic plans in enabling artificial intelligence in areas of life such as health and education",
        svgFiles: Card5,
      },
      {
        color: "#CBEED3",
        text: "Consistency with concerted international efforts to achieve economic growth and sustainability",
        svgFiles: Card6,
      },
    ],
    platFormCards: [
      {
        color: "#717895",
        text: "The target customer, whether it is a parent, a family member responsible for child care, or a teacher in regular schools, registers and accesses the platform",
      },
      {
        color: "#7EAAA8",
        text: "The customer writes the problem that the child suffers from in a concise form that does not exceed several lines",
      },
      {
        color: "#BB7F84",
        text: "Through artificial intelligence techniques, the platform selects one of the tests for developmental disorders and learning problems",
      },
      {
        color: "#81A176",
        text: "The customer answers all the test paragraphs in an easy way to which he is directed through the platform",
      },
      {
        color: "#7392A5",
        text: "The platform then submits a report to the client that includes: the nature of the problem that the child suffers from the procedures and information that require the client to address the problem government or private agencies that provide appropriate services, their locations and means of communication with them based on the closest and most appropriate location for the client's presence",
      },
      {
        color: "#6E9E79",
        text: "Or the platform will identify the educational or behavioral problem, provide recommendations and necessary follow-up procedures, estimate the size of the problem, and provide the customer with the ability to purchase indicative videos for the case or subscribe to several available services.",
      },
    ],

    allTests: [],
  };

  getData = () => {
    // all tests
    axios.get("https://anma.pomac.info/api/front/tests").then((res) => {
      console.log(res);
      if (res.status === 200) {
        console.log(res.data.data);
        this.setState({
          allTests: res.data.data,
        });
      }
    
    });
  };
  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="home-parent mt-5 col-12 row m-auto justify-content-center px-0">
        <HomeChild
          allTests={this.state.allTests}
          platFormCards={this.state.platFormCards}
          featuresCards={this.state.featuresCards}
          soceialApps={this.state.soceialApps}
        />
      </div>
    );
  }
}
Home.contextType = AuthContext;
