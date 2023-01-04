import React from "react";

// components
import NavBar from "./NavBar";

//styles
import "./navBar.css";

//axios
import axios from "axios";


export default class TopNavBar extends React.Component {
  state = {
    open: false,
    allTypeOfTests: []
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
    this.getData();
  }

  render() {
    console.log(this);
    return (
      <div className="navBar-Parent" id="navBar">
        <NavBar
          handleChange={this.props.handleChange}
          pageNumber={this.props.pageNumber}
          open={this.state.open}
          handleClickOpen={this.handleClickOpen}
          handleClose={this.handleClose}
          allTypeOfTests= {this.state.allTypeOfTests}
        />
      </div>
    );
  }
}
