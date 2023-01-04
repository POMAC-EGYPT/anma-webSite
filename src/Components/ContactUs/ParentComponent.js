//react
import React from "react";

// contexts
import AuthContext from "../../contexts/authContext";

//axios
import axios from "axios";

//component
import ContactForm from "./contactForm";
import ContactInformation from "./contactInformation";

//SnackBar
import SnackBar from '../reuseableComponent/snackBar/snackBar'

//styles
import "./styles/conatctUs.css";
import "./styles/conatctUs-media.css";

export default class ContactUs extends React.Component {
  state = {
    opensnackbar: false,
    message: null,
  };

  componentDidMount(){   
  }

  handleSubmit = (data) => {
    console.log(data);
    axios({
      method: "post",
      url: `https://anma.scarksa.com/public/api/contact`,
      data: {
        email: data.email,
        firstname: data.firstName,
        lastname: data.lastName,
        gender: data.gender,
        // gender:{data.gender == '1' ? 'male' : 'female' },
        description: data.message,
      },
    }).then((res) => {
      if (res.data.status) {
        console.log(res.data.data);
        this.setState({
          opensnackbar:   true,
          message: 'your message has been sent successfully'
         
         })
      }
    });
  };

  render() {
    return (

    
     
      <div className="contactUs-parent mt-5 col-12 row m-auto  px-0">
        {this.state.opensnackbar ?
         <SnackBar message= {this.state.message} /> 
        :null}
        <div className="col-lg-5 col-12 contactInformation-parent ps-3 pe-0 pt-5">
          <ContactInformation />
        </div>

        <div className="col-lg-7 col-12 contactForm-parent pe-0">
          <ContactForm handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}
ContactUs.contextType = AuthContext;
