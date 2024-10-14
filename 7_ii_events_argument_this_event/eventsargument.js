//🚩bind() method🎁
//When a "method" is updating value by using "setState()" method inside state i.e. "this.state",
//at that time we need to use bind() method. because "this.state" is defined inside constructor,
//hence, that method need to bind inside constructor then only that method can update value inside state. 


class ButtonlistComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            msg: ""
        }
        this.databaseOperation = this.databaseOperation.bind(this)   //if we don't bind then we can't update data inside "msg"
    }
    databaseOperation(e){
        switch(e.target.name){
            case "insert":
                this.setState({
                    msg: "data inserted successfully"
                })
                break;
                case "update":
                    this.setState({
                        msg: "data updated successfully"
                    })
                    break;
                    case "delete":
                        this.setState({
                            msg: "data removed successfully"
                        })
                        break;
        }
    }
    render(){
        return(
            <>
                <button name="insert" onClick={this.databaseOperation}>Insert</button>
                <button name="update" onClick={this.databaseOperation}>Update</button>
                <button name="delete" onClick={this.databaseOperation}>Delete</button>
                <h3>{this.state.msg}</h3>
            </>
        )
    }
}
class MainComponent extends React.Component{
    render(){
        return(
            <ButtonlistComponent />
        )
    }
}
ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)