//🎁"Properties(props)" in Class Component🎁
//For More Example check on note book 👉14 chapter.
//For better understanding check folder👉 5_i_properties_vs_state

//Both functional component and class component are local and immutable.
//Immutable means the value can not be change within the component.
//properties pass from parent to child.
//We can access properties by - {this.props.key}

//Example:
class StudenComponent extends React.Component{
    render(){
        return(
            <>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Student Name</th>
                            <th>Student Percentage</th>
                            <th>Student Branch</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.name}</td>
                            <td>{this.props.percentage}</td>
                            <td>{this.props.branch}</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }
}
class MainComponent extends React.Component{
    render(){
        return(
            <>
                <StudenComponent name={"jitesh"} percentage={75} branch={"AEI"}/>
                <StudenComponent name={"Somalin"} percentage={81} branch={"CSE"}/>
                <StudenComponent name={"Chawala"} percentage={70} branch={"EEE"}/>
            </>
        )
    }
}
ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)