//🎁"Properties(props)" in Functional Component🎁
//For More Example check on note book 👉14 chapter.
//For better understanding check folder👉 5_i_properties_vs_state

//Both functional component and class component are local and immutable.
//Immutable means the value can not be change within the component.

//Functional component uses "properties" as parameter.
//parameter type can be "string", "number", "array", "object" etc.
//We can access properties by - {props.key}

//Example:
function StudenComponent(props){
    return(
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>RollNo.</th>
                        <th>Specialization</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{props.name}</th>
                        <th>{props.rollnum}</th>
                        <th>{props.special}</th>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

function MainComponent(){
    return(
        <>
            <StudenComponent name={"Jatindra"} rollnum={82606032} special={"chemisry"}/>
            <StudenComponent name={"kumaresh"} rollnum={82606035} special={"biology"}/>
            <StudenComponent name={"vidwaan"} rollnum={82606015} special={"physics"}/>
        </>
    )
}
ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
);