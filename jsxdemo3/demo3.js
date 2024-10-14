//Using props(properties) in functional component.
const CarComponent = (props) => (
    <>
        <div className="card">
            <div className="card-header bg-primary text-center">{props.name}</div>
            <div className="card-body text-center">
                <img width={200} height={200} src={props.location}></img>
            </div>
            <div className="card-footer text-center">{props.price}</div>
        </div>
    </>
);
const MainComponent = () => (
    <>
        <div className="d-flex ms-4">
        <CarComponent name={"Hyundai"} location={"../asset/Maa Bhaku.jpg"} price={325965966}/>
        <CarComponent name={"Tata"} location={"../asset/Maa Bhaku.jpg"} price={59999999}/>
        </div>
    </>
);
ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)