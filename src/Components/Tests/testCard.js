//react
import React from "react";

//material UI
import Button from "@mui/material/Button";

//router
import { useNavigate, Link } from "react-router-dom";

//components

export default (props) => {
  const navigate = useNavigate;
  return (
    <div className="col-12 row card-parent">
      {props.tests.map((itemData) => {
        console.log(itemData.id);
        return (
          <div
            key={itemData.id}
            className="row  col-md-4  col-6 card custom-col"
          >
            <Button>
              <div className="container">
                <label className="card-backGround">
                  <div className="cardContent-cont">
                    <span className="hoverTextCard">{itemData.name_en}</span>
                    <Link target="_blank" to={`/DoTest?test=${itemData.id}`}>
                      <Button
                        className="hoverButCard"
                        onClick={() => navigate("/route here...")}
                      >
                        Take test
                      </Button>
                    </Link>
                  </div>
                </label>
                <img src={itemData.imagePath} />
              </div>
            </Button>
          </div>
        );
      })}
    </div>
  );
};
