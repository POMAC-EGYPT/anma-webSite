//react
import React, { useState, useEffect } from "react";

//router
import { useNavigate, Link } from "react-router-dom";


//styles
import "./styles/home-media.css";
import "./styles/home.css";

//material UI
import Button from "@mui/material/Button";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

//owl carousel
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//svg files
import HeaderImg from "../../svg/Group68625.png";

//img files
import AboutAnma from "../../img/Group68639.png";
import FirstStageImg from "../../img/Group68810.png";
import SecondStageImg from "../../img/Group68812.png";
import WhyAnmaImg from "../../img/Group68641.png";

export default (props) => {
  const navigate= useNavigate
  const [allTests, setallTests] = useState([]);

  //useEffect didMount
  useEffect(() => {
    console.log(props.allTests);
    if (props.allTests.length !== 0) {
      console.log(props.allTests);
      props.allTests.map((data) => {
        setallTests(data.imagePath);
      });
      console.log(allTests);
    }
  });

  const options = {
    // items:'5',
    //autoHeight:true,
    className: "owl-theme",
    nav: true,
    loop: true,
    //margin:10,
    responsiveClass: true,
    items: 5,
    responsive: {
      0: {
        items: 2,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: true,
        loop: false,
      },
    },
   
  };

  console.log(allTests);
  return (
    <div className="px-0">
      {/*header*/}
      <div className="d-flex flex-md-row-reverse flex-column">
        <div className="col-md-6 row px-0">
          <img className="headerImg ms-auto row" src={HeaderImg} />
        </div>

        <div className="ms-auto d-flex row headerCont">
          <div className="headerBold-cont text-start ps-0 pb-3">
            <span className="headerBold xs-header-home">
              We support child development and learning solutions
            </span>
          </div>

          <span className="headerLight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. isus commodo viverra maecenas accumsan
            lacus vel facilisis.Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse ultrices gravida. isus commodo viverra
            maecenas accumsan lacus vel facilisis.
          </span>

          <Button className="headerButton ">
            <PlayCircleOutlineOutlinedIcon />
            Watch video
          </Button>
        </div>
      </div>

      {/*anmaTests*/}
      <div className=" d-flex flex-column mt-5 anmaTest-parent">
        <div className="headerParent">
          <span
            className="headerBold text-center m-auto  custText"
            style={{ maxWidth: "fit-content" }}
          >
            Anma Tests
          </span>
        </div>

        <span className="headerLight text-center w-75 m-auto">
          The Anma platform has benefited from international scientific research
          that has proven the effectiveness of artificial intelligence and its
          ability to sort and identify various developmental disorders
          (autism-hyperactivity disorder and attention deficit hyperactivity
          disorder) with an accuracy of 96%.
        </span>

        <OwlCarousel {...options}>
        {props.allTests.length !== 0 && 
          props.allTests.map(data=>{
            console.log(data.name_en)
            return(
              <div key={data.id} class="item">

                <Button>
                <div className="container">
                  <div className= "imageLabel-cont">
                <span className="imageLabel">{`${data.type.age_from} - ${data.type.age_to} years`}</span>
                </div>
                <label className="card-backGround">
                <div className="cardContent-cont">
                <span className="img-name">{data.name_en}</span>
                <Link target="_blank"  to= {`/DoTest?test=${data.id}`}>
                <Button  className="hoverButCard" onClick={() => navigate('/route here...')}>Take test</Button>
                </Link>
                </div>
                </label>
              <img className="test" src={data.imagePath} />
              </div>
                </Button>
              
            </div>
            )
            
          })}
        </OwlCarousel>
      </div>

      {/*anma features*/}
      <div className=" d-flex flex-column anmaFeatures-parent">
        <div className="headerParent">
          <span
            className="headerBold text-center m-auto  custText"
            style={{ maxWidth: "fit-content" }}
          >
            Anma Features
          </span>
        </div>

        <span className="headerLight text-center w-75 m-auto">
          Finding a quick, technical and reliable solution with results, while
          providing effective recommendations to the targets and directing them
          to effective solutions through one electronic session that works ons
          the following:
        </span>

        <div className="cards-cont-parent">
          <div className="row col-12 mt-5 justify-content-between ps-2 cards-cont">
            {props.featuresCards.map((data, index) => {
              return (
                <div id="card-container" className="">
                  <div className="cont">
                    <div
                      className={`card card${index + 1}`}
                      style={{ background: data.color }}
                    >
                      <div className="">
                        <img src={data.svgFiles} className="rounded-circle" />
                      </div>

                      <span className="card-text">{data.text}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/*about anma*/}

        <div className="d-flex flex-md-row flex-column ">
          <div className="col-md-5 row px-0">
            <img className="aboutImg ms-auto row mt-2" src={AboutAnma} />
          </div>

          <div className="ms-auto d-flex row headerCont justify-content-md-end col-md-7 flex-column">
            <div id="aboutUs" className="headerParent-about mt-5 mb-3">
              <span
                className="headerBold text-center m-auto  aboutCustText"
                style={{ maxWidth: "fit-content" }}
              >
                About Anma
              </span>
            </div>
            <span className="aboutBold">
              The Anma platform has benefited from{" "}
              <span className="aboutColored">
                international scientific research
              </span>{" "}
              that has proven the effectiveness of artificial intelligence and
              its ability to sort and identify various developmental disorders
              (autism-hyperactivity disorder and attention deficit hyperactivity
              disorder) with an accuracy of 96%.
            </span>

            <span className="aboutLight">
              Through experience in family counseling and teacher training on
              early detection of disabilities and learning problems, a platform
              was created to provide maximum benefit and effectiveness in
              detecting developmental disorders and providing prompt and timely
              guidance and recommendations to target clients. In addition to
              working on finding innovative solutions to problems resulting from
              learning difficulties, intellectual disabilities and other
              developmental and behavioral disorders
            </span>
          </div>
        </div>

        {/*platForm*/}
        <div className="platform-line mt-5">
          <div className="line-parent">
            <div className="line-contet"></div>
          </div>
          <div className="row col-12  justify-content-between ps-2 platForm-parent">
            <div className="platformHeader-parent">
              <span className="headerBold">How does anma platform work?</span>
            </div>

            {props.platFormCards.map((data, index) => {
              return (
                <div
                  className={`featureCard-container featureCard-container${
                    index + 1
                  }`}
                >
                  <div
                    className={`featureCard-index featureCard-index${
                      index + 1
                    }`}
                  >
                    <span className="chiledSPan" style={{ color: data.color }}>
                      {`0${index + 1}`}
                    </span>

                    <div className="aboutCard-text">
                      <p>{data.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/*target groub*/}
        <div className="mb-2 mt-5" style={{ position: "relative" }}>
          <span
            className="headerBold text-center m-auto  targetCustText"
            style={{ maxWidth: "fit-content" }}
          >
            Target group
          </span>
        </div>
        <div className="targetGroup-parent-com row col-12  justify-content-between ps-2 flex-md-row flex-column">
          <div className="targetGroup-cont-com">
            <Card sx={{ maxWidth: 450 }} className="card-cont1">
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  First stage:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Parents, family member, early childhood teachers, lower grades
                  of primary school
                </Typography>
              </CardContent>
            </Card>

            <div className="img-cont">
              <img src={FirstStageImg} />
            </div>
          </div>

          <div className="targetGroup-cont-com">
            <div>
              <Card sx={{ maxWidth: 450 }} className="card-cont2">
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Second stage:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Government agencies interested in data, government and
                    private educational and health agencies, international
                    organizations
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div className="img-cont">
              <img src={SecondStageImg} />
            </div>
          </div>
        </div>

        {/*why anma*/}
        <div className="d-flex flex-md-row-reverse flex-column mt-5 whyAnma-parent">
          <div className="col-md-5 row px-0">
            <img className="aboutImg ms-auto row mt-2" src={WhyAnmaImg} />
          </div>

          <div className="ms-auto d-flex row headerCont justify-content-md-end col-md-7">
            <div className="d-flex flex-column">
              <span className="whyAnmaBold d-flex col-md-5 col-12">
                Why anma is a
              </span>
              <span className="whyAnmaBold">different platform?</span>
            </div>

            <span className="aboutLight whyAnma-light">
              Locally, there are a number of different platforms in the
              direction of the trend
            </span>

            <span className="whyAnma-regular">
              <ul className="pl-0">
                <li>
                  After studying and researching locally and globally, there is
                  no platform that supports natural growth and works to detect
                  and identify developmental and behavioral problems using
                  artificial intelligence and innovative solutions based on
                  practical evidence and controlled and reliable studies
                </li>
                <li>
                  And some international platforms measure psychological and
                  developmental disorders only, without directing solutions.
                  Only one option is based on booking an appointment with a
                  specialist affiliated with the platform.
                </li>
                <li>
                  and other fundamental differences that make ENMA unique and
                  innovative, specific to specific but broad-based problems
                  related to disabling disorders and learning problems.
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
