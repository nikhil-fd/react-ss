//🚩Best Example must try to practice👌

class ShirtComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            shirtsrc: "../asset/whiteshirts.png"
        }
        this.shirtColorChng = this.shirtColorChng.bind(this)
    }
    shirtColorChng(e){
        switch(e.target.className){
            case "bg-danger":
                this.setState({
                    shirtsrc: "../asset/redshirt.png"
                })
                break;
                case "bg-warning":
                    this.setState({
                        shirtsrc: "../asset/yellowshirt.png"
                    })
                    break;
                    case "bg-info":
                        this.setState({
                            shirtsrc: "../asset/blueshirt.png"
                        })
                        break;
                        case "bg-white":
                            this.setState({
                                shirtsrc: "../asset/whiteshirts.png"
                            })
                            break;
                            case "bg-dark":
                                this.setState({
                                    shirtsrc: "../asset/blackshirt.png"
                                })
                                break;
                                default:
                                    this.setState({
                                        shirtsrc: "../asset/whiteshirt.png"
                                    })
                                    break;
        }
    }
    stopScroll(e){
        e.target.stop()
    }
    startScroll(e){
        e.target.start()
    }
    render(){
        return(
            <>
                <nav>
                <ul className="list-group">
                    <li><button className="bg-danger" onMouseOver={this.shirtColorChng}>&nbsp;</button></li>
                    <li><button className="bg-warning" onMouseOver={this.shirtColorChng}>&nbsp;</button></li>
                    <li><button className="bg-info" onMouseOver={this.shirtColorChng}>&nbsp;</button></li>
                    <li><button className="bg-white" onMouseOver={this.shirtColorChng}>&nbsp;</button></li>
                    <li><button className="bg-dark" onMouseOver={this.shirtColorChng}>&nbsp;</button></li>
                </ul>
                </nav>
                <marquee onMouseOver={this.stopScroll} onMouseOut={this.startScroll} className="text-danger fw-bold fs-1">Flat 50% OFF on MENS T-SHIRT LEE, LEVIS, SPYKER</marquee>
                <img className="mt-4 ms-4" src={this.state.shirtsrc} width={200} height={200}></img>
            </>
        )
    }
}
class MainComponent extends React.Component{
    render(){
        return(
            <>
                <ShirtComponent/>
            </>
        )
    }
}
ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)