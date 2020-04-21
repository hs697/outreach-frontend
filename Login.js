import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import dayjs from "dayjs";


const Login = (props) => (
  
  //<Grid justify = "center" alignItems="center">
  <Grid 
    container 
    spacing={3}
    direction="column"
    alignItems="center"
    justify="center"
  >
    <Grid item xs={3} />
    <Grid item xs={9}>
      <Typography variant="h4">Log In Here:</Typography>
    </Grid>
    <Grid item xs={3} />
    <Grid item xs={9}>
      <TextField id="standard-basic" name="username" label="Email" onChange={props.onInputChange} />
    </Grid>

    <Grid item xs={3} />
    {props.variant === "Candidate" ? (
      <Grid item xs={9}>
        <TextField
          id="standard-basic"
          type="date"
          label="Birthdate"
          name="password"
          defaultValue={dayjs().format("YYYY-MM-DD")}
          onChange={props.onInputChange}
        />
      </Grid>
    ) : (
      <Grid item xs={9}>
        <TextField
          id="standard-basic"
          name="password"
          type="password"
          label="Password"
          onChange={props.onInputChange}
        />
      </Grid>
    )}

    <Grid item xs={3} />
    <Grid item xs={9}>
      <Button variant="contained" onClick={props.onLogIn}>
        Log In
      </Button>
    </Grid>
  </Grid>
);

export default Login;
