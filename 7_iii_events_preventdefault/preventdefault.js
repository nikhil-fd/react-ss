class FormComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            msg: ""
        }
        this.handleInputData = this.handleInputData.bind(this)
    }
    handleInputData(e){
        e.preventDefault();         //It preventing submit data and reload page while click on button only our functionalites is working.
        this.setState({
            msg: "Data submitted Successfully😎"
        })
    }
    render(){
        return(
            <>
                <form onSubmit={this.handleInputData}>
                    <label for="user">UserName</label>
                    <input type="text" id="user"></input>
                    <button>Register</button>
                    <h3>{this.state.msg}</h3>
                </form>
            </>
        )
    }
}
class MainComponent extends React.Component{
    render(){
        return(
            <>
                <FormComponent/>
            </>
        )
    }
}
ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)