import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import "./all.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    marginTop: theme.spacing(22),
    width: 300,
    marginLeft: "40%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function Otp({ userNumber }) {
  const classes = useStyles();
  const [otp, setOtp] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(`${process.env.REACT_APP_BASE_URL}/otp`, {
      otp,
      userNumber,
    }).then((res) => {
      if (res.data.resp.valid) {
        console.log("done");
        history.push(`/chat`);
      } else {
        alert("Expired otp");
      }
    });
  };

  const handleChange = (event) => {
    setOtp(event.target.value);
  };

  return (
    <>
     <div className="main">
      <div>
      <p className="main-text">OTP VERIFICATION</p>
      </div>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          type="number"
          label="Otp"
          autoComplete="Otp"
          autoFocus
          inputProps={{style : {color: "white" }}}
          value={otp}
          onChange={handleChange}
          
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Submit Otp
        </Button>
      </form>
      </div>
    </>
  );
}

export default Otp;
