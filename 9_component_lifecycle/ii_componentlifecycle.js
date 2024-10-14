//💡Below program is correct because we are not getting any error in browser. However, the programming
//is not giving any output..👇

import React from "react";
class SuccessComponent extends React.Component{
    componentWillMount(){
        alert("Success Component Requested... ")
    }
    componentDidMount(){
        alert("Success Component Created and Loaded..")
    }
    componentWillUnmount(){
        alert("Success Component Destroyed/Removed..")
    }
    render(){
        return(
            <>
                <h2>Login Success..</h2>
            </>
        )
    }
}
class ErrorComponent extends React.Component{
    componentWillMount(){
        alert("Error Component Requested..")
    }
    componentDidMount(){
        alert("Error Component Created and Loaded..")
    }
    componentWillUnmount(){
        alert("Error Component Destroyed/Removed..")
    }
    render(){
        return(
            <>
                <h2>Login Error...</h2>
            </>
        )
    }
}
export default class LoginComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            msg: "",
            uname: "",
            upwd: ""
        }
        this.handleSuccess = this.handleSuccess.bind(this)
        this.handleError = this.handleError.bind(this)
        this.changeUname = this.changeUname.bind(this)
        // this.changeUpwd = this.changeUpwd.bind(this)
    }
    handleSuccess(){
        this.setState({
            msg: <SuccessComponent/>
        })
    }
    handleError(){
        this.setState({
            msg: <ErrorComponent/>
        })
    }
    changeUname(e){
        this.setState({
            uname: e.target.value,
            upwd: this.state.upwd
        })
    }
    changeUpwd(e){
        this.setState({
            uname: this.state.uname,
            upwd: e.target.value
        })
    }
    handleLogin(){
        if(this.state.uname == "nikhil6032" && this.state.upwd == "Happy@1234"){
            this.setState({
                msg: <SuccessComponent/>
            })
        }else{
            this.setState({
                msg: <LoginComponent/>
            })
        }
    }
    render(){
        return(
            <>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" name="uname" onChange={this.changeUname}/></dd>
                    <dt>Password</dt>
                    <dd><input type="password" name="upwd" onChange={this.changeUpwd.bind(this)}/></dd>
                </dl>
                <button onClick={this.handleLogin.bind(this)}>Login</button>
                <button onClick={this.handleSuccess}>Success</button>
                <button onClick={this.handleError}>Error</button>
            </>
        )
    }
}