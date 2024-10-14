//🚩Events🚩

//🎁What is Events in both JavaScript and ReactJS?👇
// In JavaScript and react events typically "point to" the function, not "call" the function directly. 
// This means when you attach an event handler to an event, that means you're passing a reference 
// to the function rather than invoking it. The function will only be called when the, 
// event occurs (e.g., when a user clicks a button, hovers, submits a form, etc.).

//1️⃣In React when use "events" then take function's reference, function reference means only
//function name without parenthesis (). so that when click/hover button or submit form then only function will be called.
//but only in page load the function will not get invoke/call.

//2️⃣In React when use "events" if we pointing the function(call the function) with parenthesis (), then without evnts occur(that means without click/hover/submit on button),
//the funciton will get immediately called/invoked when the page load or component render.

//🎯How do we write "events" in functional component and class component?
//🎁Functional Component👇
//✅In Functional Component we can define function and variable also.
function VegMenuComponent(){
    function insertVegItems(){
        alert("Veg Items added Successfully!")
    }
    return(
        <>
            <h2>Adding Veg Items</h2>
            <button onClick={insertVegItems}>Insert</button>
        </>
    )
}

//🎁Class Component👇
//✅In class component we can't define function and variable. 
//✅In class instead of function we can define method and instead of variable can define "state" and "properties".  
//✅How to access method and state and properties?
//✅method can acces {this.method} and state can access {this.state.key} and properties can access{this.properties}.
//how to access state and properties check folder💬 4_state_in_class_component
class AdminCredComponent extends React.Component{
    deleteRecord(){
        confirm("Record Deleted Successfully!")
    }
    render(){
        return(
            <>
                <button onClick={this.deleteRecord}>Delete</button>
            </>
        )
    }
}
class FinalComponent extends React.Component{
    render(){
        return(
            <>
                <VegMenuComponent/>
                <AdminCredComponent/>
            </>
        )
    }
}
ReactDOM.render(
    <FinalComponent/>,
    document.getElementById("container")
);