class UserCredential extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users: [
                {username: "Nikhil@6032"},
                {username: "Nikhil@1993"},
                {username: "Nikhil@1234"},
                {username: "Nikhil@2024"}
            ],
            usermsg: "",
            userpwdmsg: "",
            regex: /(?=.*[A-Z]\w{4,15})/
        }
        this.checkUserName = this.checkUserName.bind(this)
        this.checkPassword = this.checkPassword.bind(this)                                                                                                                                                                                                                                                                                                                                     
    }
    checkUserName(e){
        for(let user of this.state.users){
            if(e.target.value == user.username){
                this.setState({
                    usermsg: "Username -- Already Taken!"
                })
                break;
            }else if(e.target.value.length < 4){
                this.setState({
                    usermsg: "Password too short"
                })
            }else{
                this.setState({
                    usermsg: "Strong password"
                })
            }
        }
    }
    checkPassword(e){
        if(e.target.value.match(regex)){
            this.setState({
                userpwdmsg: "Strong Password Given"
            })
        }else{
            this.setState({
                userpwdmsg: "Weak Password not recommend"
            })
        }
    }
    render(){
        return(
            <>
                <dl>
                    <dt><label for="user">UserName</label></dt>
                    <dd><input type="text" id="user" onKeyUp={this.checkUserName}/></dd>
                    <dd>{this.state.usermsg}</dd>
                    <dt><label for="pwd">Password</label></dt>
                    <dd><input type="password" id="pwd" onKeyUp={this.checkPassword}/></dd>
                    <dd>{this.state.userpwdmsg}</dd>
                </dl>
            </>
        )
    }
}
class MainComponent extends React.Component{
    render(){
        return(
            <>
                <UserCredential/>
            </>
        )
    }
}
ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)