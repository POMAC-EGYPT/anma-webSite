import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import React from "react";

import "./sbackBar.css";

export default function SimpleSnackbar(props) {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="snackBar-cont">
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Note archived"
      >
        <Alert onClose={handleClose} severity="success">
          {props.message}
        </Alert>
      </Snackbar>
    </div>
  );
}
