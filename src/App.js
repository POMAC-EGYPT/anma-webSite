//react
import React, { useEffect, useState } from "react";

//routing
import { Routes, Route, Link, useNavigate } from "react-router-dom";

//styles
import "./App.css";

//components
const NavBar = React.lazy(() => import("./Components/NavBar/ParentComponent"));
const Footer = React.lazy(() => import("./Components/Footer/footer"));
const Home = React.lazy(() => import("./Components/Home/ParentComponent"));
const DoTest = React.lazy(() => import("./Components/DoTest/ParentComponent"));
const ContactUs = React.lazy(() =>
  import("./Components/ContactUs/ParentComponent")
);

const Tests = React.lazy(() => import("./Components/Tests/ParentComponent"));

export default function App() {
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState("one");
  // const [isFooter, setIsFooter] = useState(true);

  useEffect(() => {
    console.log(window.location.href.toString().split("/")[3]);
    console.log(setPageNumber);
    console.log(pageNumber);
  });

  const scroll = () => {
    const section = document.querySelector("#aboutUs");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  //handle page routing
  const handleChange = (event, newValue) => {
    console.log(event);
    console.log(newValue);
    // setPageNumber(newValue);

    if (newValue == "four") {
      navigate(`/ContactUs`);
      navigate(0);
    } else if (newValue == "one") {
      navigate(`/Home`);
      navigate(0);
    } else if (newValue == "three") {
      navigate(`/Home`);
      navigate(0);
      setTimeout(scroll(), 5000);
      //  scroll();
    } else if (newValue == "two") {
      navigate(`/Tests`);
      navigate(0);
    }
  };

  console.log(pageNumber);
  console.log(window.location.href.toString().split("/")[3].charAt(0));
  return (
    <div className="App">
      <Link to="/ContactUs" />
      <div>
        <NavBar handleChange={handleChange} pageNumber={pageNumber} />
      </div>

      <div className="d-flex flex-column">
        <div className="app-cont row col-12 col-md-11 justify-content-center m-auto container-fluid px-0">
          <Routes>
            <Route exact path="Home" element={<Home />} />
            <Route path="Tests" element={<Tests />} />
            <Route path="DoTest" element={<DoTest />} />
            <Route path="ContactUs" element={<ContactUs />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        {window.location.href.toString().split("/")[3] == "Home" ||
          window.location.href.toString().split("/")[3] == "Tests" ? 
            <div className="">
              <Footer />
            </div>
           :null}
      </div>
    </div>
  );
  document.getElementById("root");
}
