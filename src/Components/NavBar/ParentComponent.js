import React from "react";

// components
import NavBar from "./NavBar";

//styles
import "./navBar.css";

//global data
import { userInfo } from '../../GlobalData/globalData'


//axios
import axios from "axios";


export default class TopNavBar extends React.Component {
  state = {
    open: false,
    allTypeOfTests: [],
    isOffline: false,
    isTest: false,
  };

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
  componentDidMount() {
    console.log(this.props.doTest)
    this.getData('test');

 
  }
  
 

  render() {
    console.log(this.state.isOffline);
    
    return (
      <div className="navBar-Parent" id="navBar">
        <NavBar
        handleChange= {this.props.handleChange}
          pageNumber={this.props.pageNumber}
          open={this.state.open}
          handleClickOpen={this.handleClickOpen}
          handleClose={this.handleClose}
          allTypeOfTests= {this.state.allTypeOfTests}
          isTest= {this.state.isTest}
          doTest= {this.props.doTest}
        />
        {this.state.isOffline ? 'ssasasasas' : null}
      </div>
    );
  }
}
