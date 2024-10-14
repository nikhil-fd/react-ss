//🚩Routing🎁
//Routing is used to configure the user and seo friendly url.
//Routing is used for navigation when user navigate from one component to another component
//without reloading the complete page.
//Using Routing the component or content is loading without reloading the complete page.

import React from "react";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
const HomeComponent = () => (
    <>
        <h2>Home</h2>
        <p>The heartfelt welcome to home page.</p>
    </>
);
const AboutusComponent = () => (
    <>
        <h2>AboutUs</h2>
        <p>This web application is built in layer but it will run in 3-tier application</p>
    </>
);
const LoginComponent = () => (
    <>
        <label for="username">UserName</label>
        <br></br>
        <input type="text" id="username"/>
        <br></br>
        <label for="pass">Password</label>
        <br></br>
        <input type="password" id="pass"/>
        <br></br>
        <br></br>
        <button>Login</button>
    </>
);

export default class NavigationComponent extends React.Component{
    render(){
        return(
            <>
                <Router>
                <div>
                    <span><Link to="/home">Home</Link></span>
                    <span> | </span>
                    <span><Link to="/aboutus">AboutUs</Link></span>
                    <span> | </span>
                    <span><Link to="/login">Login</Link></span>
                </div>
                <Routes>
                    <Route path="/home" element={<HomeComponent/>}></Route>
                    <Route path="/aboutus" element={<AboutusComponent/>}></Route>
                    <Route path="/login" element={<LoginComponent/>}></Route>
                </Routes>
                </Router>
            </>
        )
    }
}

