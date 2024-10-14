class CarComponent extends React.Component{
    render(){
        return(
            <>
                <div className="card me-3">
                    <div className="card-header">{this.props.carname}</div>
                    <div className="card-body">
                        <img width={200} height={200} src={this.props.path}></img>
                    </div>
                    <div className="card-footer">{this.props.price}</div>
                </div>
            </>
        )
    }
};
class MainComponent extends React.Component{
    render(){
        return(
            <>
                <div className="d-flex m-3">
                    <CarComponent carname={"Mahindra"} path={"../asset/Maa Bhaku.jpg"} price={529999}/>
                    <CarComponent carname={"Toyota"} path={"../asset/Maa Bhaku.jpg"} price={689999}/>
                    <CarComponent carname={"Suzuki"} path={"../asset/Maa Bhaku.jpg"} price={729999}/>
                </div>
            </>
        )
    }
}
ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)