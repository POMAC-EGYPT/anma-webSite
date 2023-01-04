//react
import React from "react";

//material UI
import LinearProgress from '@mui/material/LinearProgress';

//svg
import FilesSent from "../../svg/FilesSent-amico.svg";

export default (props) => {
    console.log(props.firstViewData.email)
  return (
    <div className="waiting-cont">
      <div className="img-cont">
        <img src={FilesSent} className="img" />
      </div>
      <div className="content-cont">
        <span className="title">You sent test successfully</span>
        <span className="E-mail-text">

            
                 You can wait soon and the result will be sent on e-mail
                <span className="Email">{` ${props.firstViewData.email} `}</span>
                 and the pdf file will be displayed now you
                can download and see the result`
            
         
        </span>
        <div className="waiting-progress">
        <LinearProgress color="success" />
        </div>
      </div>
    </div>
  );
};
