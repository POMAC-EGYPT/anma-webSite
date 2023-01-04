//react
import React from "react";

// contexts
import AuthContext from "../../contexts/authContext";

//axios
import axios from "axios";


//components
import AllTests from './allTests'


//styles
import './styles/allTests.css'
import './styles/allTests-media.css'

export default class Tests extends React.Component {
  state = {
    allTypeOfTests: [],
    currentURL: '',
    isDoTest: false
  };

  componentDidMount(){
    this.setState({
      currentURL: window.location.href
    })
    this.getData();
   

    console.log(this.state.currentURL)
}

getData= ()=>{
     //all type of tests
     axios.get("https://anma.pomac.info/api/front/test_types").then((res) => {
      console.log(res);
      if (res.status === 200) {
        console.log(res.data.data);
        this.setState({
          allTypeOfTests: res.data.data,
        });
      }
  })
}

  render() {
    return (
      <div className="tests-parent mt-5 bold-header">
    <h4 className="parent-header">All Tests</h4>
       <AllTests
        allTypeOfTests= {this.state.allTypeOfTests}/>
      </div>
    );
  }
}
Tests.contextType = AuthContext;
