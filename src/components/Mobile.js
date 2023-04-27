import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import "./all.css";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(16),
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

function Mobile({ status }) {
  const classes = useStyles();
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post(`https://botserverin.onrender.com/mobile`, { number }).then((res) => {
      if (res.data) {
        status(res.data.to);
        // setNumber("");
      }
    });
  };

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    
    <>
      
      <div className="main">
        <div><p className="main-text">OTP VERIFICATION</p></div>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="number"
            label="Enter Number"
            autoComplete="contactnumber"
            autoFocus
            value={number}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}

export default Mobile;
