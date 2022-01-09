import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import App from "../App";
import { actionTypes } from "../contextAPI/reducer";
import { useStateValue } from "../contextAPI/StateProvider";
import logo from "../assets/logo.png"

const Login = () => {

    const [user, setUser] = useState({

        refId: "",
        password: "",
    });

    const [state, dispatch] = useStateValue();
    const { refId, password } = user;
    const navigate = useNavigate();
    const [error, setError] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));

    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (refId === process.env.REACT_APP_USERNAME && password === process.env.REACT_APP_PASSWORD) {
            dispatch({ type: actionTypes.SET_USERNAME, username: process.env.REACT_APP_USERNAME })
            dispatch({ type: actionTypes.TOGGLE_LOGIN, condition: true })

            navigate("/");
        }
        else {
            setError("Invalid credentials");
        }
    }


    // const c = () => {
    //     alert(JSON.stringify(user));
    // }
    return (

        <div className="container">

            <div className="row justify-content-center align-items-center">
                {error &&
                    <div className="alert alert-danger" role="alert">
                        {error}</div>
                }
                <div className="col-sm-auto">
                    <form className="form-container" onSubmit={handleSubmit}>
                        <h3 className="" style={{ textAlign: "center" }}><span className=""><img src={logo} height="80px" alt="" /></span>Login</h3><br />
                        <div className="row">
                            <div className="col">
                                <label htmlFor="userId"><h5 >Username</h5></label>
                            </div>
                            <div className="col">
                                <input
                                    className="form-control"
                                    type="text"
                                    onChange={handleChange}
                                    name="refId"
                                    value={refId}
                                    autoSave="false"
                                    autoCapitalize="false"
                                    autoComplete="false"
                                    autoCorrect="false"
                                    placeholder="Username"
                                />
                            </div>
                        </div><br />
                        <div className="row">
                            <div className="col-sm">
                                <label htmlFor="userId"><h5>Password</h5></label>
                            </div>
                            <div className="col-sm">
                                <input type="password"
                                    className="form-control"
                                    onChange={handleChange}
                                    name="password"
                                    value={password}
                                    autoSave="false"
                                    autoCapitalize="false"
                                    autoComplete="false"
                                    autoCorrect="false"
                                    placeholder="Password"
                                />
                            </div>
                        </div><br />
                        <button
                            className="btn btn-primary btn-block"
                            style={{ textAlign: "center" }}
                            type="submit"
                        >Login</button>
                    </form>
                </div>



            </div>
        </div >

    );
};

export default Login;
