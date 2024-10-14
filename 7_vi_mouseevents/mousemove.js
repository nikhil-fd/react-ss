class FlagMove extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            styleObject: {
                position: "fixed",
                let: "",
                top: ""
            }
        }
        this.mouseMoveFlag = this.mouseMoveFlag.bind(this)
    }
    mouseMoveFlag(e){
        this.setState({
            styleObject: {
                left: e.clientX + "px",
                top: e.clientY + "px"
            }
        })
    }
    render(){
        return(
            <>
                <div onMouseMove={this.mouseMoveFlag}>
                    <div style={{height: "1000px"}}></div>
                    <img style={this.state.styleObject} src="../asset/indiaflagbg.gif" width={50} height={50}></img>
                </div>
            </>
        )
    }
}
class MainComponent extends React.Component{
    render(){
        return(
            <>
                <FlagMove/>
            </>
        )
    }
}
ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)