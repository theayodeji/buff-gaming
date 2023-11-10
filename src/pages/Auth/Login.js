import React, { useState } from "react";
// import LoginGif from "../../assets/among-us-gif-15.gif";
import { useContext } from "react";
import { LoginContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


function Logins() {
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorTxt, setErrorTxt] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("loggedIn") === "true"){
        navigate("/");
      }
  })

  const Authenticate = () => {
    const users = [
      { username: "blake255", password: "blake255" },
      { username: "jake255", password: "jake255" },
      { username: "drake255", password: "drake255" },
    ];

    const currentUser = users.find((user) => user.username === username);

    if (currentUser && password && currentUser.password === password) {
      setLoggedIn(true);
      navigate("/");
      localStorage.setItem("loggedIn", "true");
    } else {
      setErrorTxt("Invalid Username Or Password!");
    }
  };

//   useEffect(() =>{
//     console.log(localStorage);
//   })

  if(localStorage.getItem('loggedIn') === "false") {return (
    <div>
      <div className="container login-modal">
        {/* <div className="col-1 video-player">
        </div> */}
        <div className="col-2 form">
          <h1>There's an Impostor Among Us!</h1>
          <p>Prove It's Not You</p>
          <form id="login-form" action="">
            <div className="username-field">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              ></input>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></input>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  Authenticate();
                }}
              >Login</button>
              <p className="error">{errorTxt}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
}

export default Logins;
