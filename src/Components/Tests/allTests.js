//react
import React from "react";

//components
import TestCard from "./testCard";

//material UI
import Divider from "@mui/material/Divider";
import { useState } from "react";

export default (props) => {
  const [isreports, setIsRepor] = useState(false)
  console.log(props.allTypeOfTests);

  console.log(isreports)
  return (
    <div className="tests-cont mt-1">
      {props.allTypeOfTests.map((arrData) => {
        console.log(arrData)
        return (
          <>
            {arrData.tests.length !== 0 && (
                <>
                  <div className="col-12 mt-4">
                  <Divider textAlign="left">
                    {
                      <span className="bold-header testType-header">{`${arrData.name_en}(${arrData.age_from} - ${arrData.age_to} years)`}</span>
                    }
                  </Divider>
                </div>
              <div className="row  px-0  pt-4">
                <TestCard
                  testID={arrData.id}
                  tests={arrData.tests}
                  allTypeOfTests={props.allTypeOfTests}
                />
              </div>
           </> )}
            {/* <TestCard
            testID= {arrData.id}
            tests= {arrData.tests}  
            allTypeOfTests={props.allTypeOfTests} /> */}
          </>
        );
      })}
    </div>
  );
};
