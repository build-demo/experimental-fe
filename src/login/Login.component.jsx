import { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import queryString from "query-string";
import { config } from "../config";
import { credential } from "../firebase/firebase.utils";
import { signinUser } from "../api/api";
import "./Login.styles.css";

const Login = ({ location }) => {
  const [state, setstate] = useState({});

  useEffect(() => {
    const message = queryString.parse(location.search);
    console.log(message);
    if (message) {
      setstate(message);
    }
  }, [location.search]);

  return (
    <div className="App">
      <Card
        style={{
          width: "27rem",
          margin: "10rem auto",
          height: "40rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          boxShadow: "0px 0px 12px 2px rgb(15 15 15 / 20%)",
          textAlign: "center",
        }}
      >
        <Card.Img variant="top" src="https://i.ibb.co/Rv1Tg53/unblockme.png" />
        <Card.Body>
          <Card.Title>Welcome to Mentors Portal</Card.Title>
          <Card.Text>
            Sign in with your Google account, link your Github account and set
            up your calendar so mentees can easily book a session with you
          </Card.Text>
          <div className="auth-buttons">
            <Button
              className="google-signin"
              variant="primary"
              onClick={() => {
                window.open(
                  `${process.env.REACT_APP_BASE_URL}/auth/google`,
                  "_self"
                );
              }}
            >
              Signin with Google
            </Button>
            {state && (
              <small style={{ color: "blue" }}>
                You are loggedin with Google Link your Github account to the
                account
              </small>
            )}
            <Button
              className="github-sigin"
              variant="primary"
              disabled={!state}
              onClick={() => {
                window.open(
                  `${process.env.REACT_APP_BASE_URL}/auth/github`,
                  "_self"
                );
              }}
            >
              Sign in with Github
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
