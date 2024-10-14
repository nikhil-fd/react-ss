//🚩Component life cycle🎁
//👌Follow my Notebook diagram also below link.BEST👌
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

//component has several phases from loading to destroying.
//component phases are classfied into 3 categories-
//1️⃣Mounting --- It is creating component with default properties. 
//2️⃣Update   --- It is updating when state(value) changes or modified.
//3️⃣Unmount  --- It is removing the component.

//The component phases are handled by 3 life cylce method.
//👉componentDidMount() -- 1️⃣When 1st time component is creating, loading and rendering in page. 
//                         2️⃣If you want to render anything in page, before this component load,
//                           we can render by using "constructor" method in class component.
//                         3️⃣componentDidMount -- Means --component mount hela

//👉componentDidUpdate() -- 1️⃣When changes or modification occured in state(value) then 
//                            componentDidUpdate() updating the state in component.
//                          2️⃣componentDidUpdate -- Means --component update hela

//👉componentWillUnmount() -- 1️⃣When a component is removing/cleanup/destroying.
//                              It remove component.
//                            2️⃣It destroy the memory allocated for object. also it can destroy the object.
//                            3️⃣componentWillUnmount -- Means --component unmount hebo

//👉render()              -- 1️⃣render() method should be pure inside render() method we can not
//                             modify the "state"(value).

//👉constructor()        -- 1️⃣constructor() method runs before render. It means before a component load in page
//                             constructor() mthod gets load or render 1st in page. 


//🕑Example:
import React from "react";
class LifeCycleComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            msg: "" 
        }
        this.componentWillUnmount = this.componentWillUnmount.bind(this);                                                                                 
    }
    timer(){
        this.setState({
            date: new Date(),
            msg: ""
        })
    }
    displayTimer;         //👈it is a property defined.

    /*here componentDidMount() creating component and loading component */
    componentDidMount(){
        this.displayTimer = setInterval(() => this.timer(), 1000)   //👈here callback function calling to the method so here we have to use () parenthesis. When we use events, in events the event handler pointing towards the function instead of calling function so in this scenario we don't need to use () parenthesis, the function will call when the event is occured.
        this.setState({
            msg: "Component Mounted"
        })
        alert("Component Mounted")
    }

    /*here componentWillUnmount() removing component */
    componentWillUnmount(){
        clearInterval(this.displayTimer);
        this.setState({
            msg: "Component Unmounted | Cleared memory "
        })
    }
    render(){
        return(
            <>
                <button onClick={this.componentWillUnmount}>Component Unmount</button>
                <p>{this.state.date.toLocaleTimeString()}</p>
                <p>{this.state.msg}</p>
            </>
        )
    }
}
export default LifeCycleComponent;


//🔔NOTE: Above line no.54 setInterval() method using callback function, calling to the method so here we have to use () parenthesis.
//       When we use events, in events the event handler pointing towards the function instead of,
//      calling function so in this scenario we don't need to use () parenthesis, the function will call when the event is occured.

