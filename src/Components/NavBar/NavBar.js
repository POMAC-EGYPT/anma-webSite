//react
import React, { useEffect, useState } from "react";

//material UI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { Link } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeGrid as Grid } from "react-window";

//material UI taps
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

//dialog
import Dialog from "@mui/material/Dialog";
import ListItem from "@mui/material/ListItem";
import { ListItemButton } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";

//svg files
import A from "../../svg/HendElgoharyPortfolio-Work-2.svg";
import B from "../../svg/HendElgoharyPortfolio-Work-6.svg";
import C from "../../svg/path-1_24_.svg";
import AnmaLogo from "../../svg/logoanma.svg";

//router
import { useNavigate } from "react-router-dom";

//styles
import "./navBar.css";
import "./navBar-media.css";

const pages = ["Home", "Tests", "About us", "Contact us"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default (props) => {
  //dropDown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openMenue, setOpenMenue] = React.useState(false);
  const handleClick = () => {
    setOpenMenue((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpenMenue(false);
  };

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [currentURL, setCurrentURL] = useState("one");
  const [dynamicURl, setDynamicURl] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    navigate(0);
  };

  //component didUpdate
  useEffect(() => {
    setDynamicURl(window.location.href.toString().split("/")[3].charAt(0));
    setCurrentURL(window.location.href.toString().split("/")[3]);
  });

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar style={{ background: "#353B50 !important" }} disableGutters>
            <Button
              onClick={(e) => {
                navigate("/Home");
                navigate(0);
              }}
            >
              <img className="AppLogo" src={AnmaLogo} />
            </Button>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                className="menuBtt"
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleClickOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {dynamicURl !== "D" && (
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Tabs
                  value={
                    currentURL == "Tests" || dynamicURl == "D"
                      ? "two"
                      : currentURL == "ContactUs"
                      ? "four"
                      : currentURL == "Home"
                      ? "one"
                      : "one"
                  }
                  onChange={props.handleChange}
                  aria-label="wrapped label tabs example"
                >
                  <Tab value="one" label="Home" wrapped />

                  <Tab value="two" label="Tests" onMouseOver={handleClick} />

                  <Tab value="three" label="About us" />
                  <Tab value="four" label="Contact us" />
                </Tabs>
              </Box>
            )}

            <Box sx={{ flexGrow: 0 }}>
              {dynamicURl !== "D" && (
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  <IconButton className="ps-3">
                    <img src={C} />
                  </IconButton>
                  <IconButton sx={{ p: 0 }} className="ps-3">
                    <img src={A} />
                  </IconButton>

                  <IconButton className="ms-4" sx={{ p: 0 }}>
                    <img src={B} />
                  </IconButton>
                </Box>
              )}

              {/*xs dialog*/}
              <Dialog
                className="navBar-xs"
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
              >
                <div
                  className="d-flex justify-content-between flex-column"
                  style={{ height: "100vh" }}
                >
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>

                  <List className="m-auto">
                    <ListItem button>
                      <ListItemButton
                        onClick={(e) => props.handleChange(e, "one")}
                      >
                        Home
                      </ListItemButton>
                    </ListItem>
                    <Divider />

                    <ListItem button>
                      <ListItemButton
                        onClick={(e) => props.handleChange(e, "two")}
                      >
                        Tests
                      </ListItemButton>
                    </ListItem>
                    <Divider />

                    <ListItem button>
                      <ListItemButton
                        onClick={(e) => props.handleChange(e, "three")}
                      >
                        {" "}
                        About us
                      </ListItemButton>
                    </ListItem>
                    <Divider />

                    <ListItem button>
                      <ListItemButton
                        onClick={(e) => props.handleChange(e, "four")}
                      >
                        {" "}
                        Contact us
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </List>

                  <div className="d-flex justify-content-center flex-row">
                    <IconButton className="ps-3">
                      <img src={C} />
                    </IconButton>
                    <IconButton sx={{ p: 0 }} className="ps-3">
                      <img src={A} />
                    </IconButton>

                    <IconButton className="ms-4" sx={{ p: 0 }}>
                      <img src={B} />
                    </IconButton>
                  </div>
                </div>
              </Dialog>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <ClickAwayListener onClickAway={handleClickAway}>
        <Box className="dropDown-parent">
          {openMenue ? (
            <Box sx={{ width: 1, position: "absolute" }}>
              <div className="dropDown-cont col-12 row">
                {props.allTypeOfTests
                  ? props.allTypeOfTests.map((data) => {
                      console.log(data);
                      if (data.tests.length !== 0) {
                        const tests = data.tests.map((test) => {
                          console.log(test.name_en);
                          return test;
                        });
                        console.log(tests.name_en);
                        return (
                          <div className="typeTest-cont   col-md-3">
                            <a className="" href="Tests">
                              <span className="typeName">{data.name_en}</span>
                            </a>
                            <div className="tests-cont row">
                              {data.tests.slice(0, 7).map((test) => {
                                return (
                                  <span className="testName">
                                    <Button
                                      className="testName"
                                      onClick={(e) => {
                                        navigate({
                                          pathname: "/DoTest",
                                          search: `?test=${test.id}`, // inject code value into template
                                        });
                                        navigate(0);
                                      }}
                                    >
                                      {test.name_en}
                                    </Button>

                                    {/* <Link to={`/DoTest/${test.id}`}>{test.name_en}</Link> */}
                                  </span>
                                );
                              })}
                            </div>
                          </div>
                        );
                      }
                    })
                  : null}
              </div>
            </Box>
          ) : null}
        </Box>
      </ClickAwayListener>
    </>
  );
};

//old and origin code
