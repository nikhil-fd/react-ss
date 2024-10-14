//What is "state" in React?
//1️⃣state refers to object and object holds information relevant to component.
//2️⃣state allows react component to manage dynamic data.
//3️⃣When there is any changes or modification in state of component then react re-render the component,
//  and reflecting the updated state to the ui.
//4️⃣Actually in Javascript we used to use "variable"/"object" to store a "value" but in React,
//  we are using "state" to store a value.
//5️⃣In class component "state" is defined or initialized by using "constructor method" in "this.state".
//6️⃣In class component "function" is defined by using "method" not in function. 
//7️⃣In functional component "state" is defined or initialized by using "useState" hook.
//8️⃣In functional component "function" can define no need to define method. 

//Example: "state" using in class 
class UserComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: "Category List",
            category: ["fashion", "footwear", "electronics"],
            products: [
                {itemname: "leecooper", price: 3999, stock: "Available"},
                {itemname: "Nike", price: 5999, stock: "Not-Available"},
                {itemname: "JBL Speaker", price: 32999, stock: "Available"},
            ]
        }
    }
    render(){
        return(
            <>
                <h2>{this.state.title}</h2>
                <ul>
                    {
                        this.state.category.map((elem) => (
                            <li key={elem}>{elem}</li>
                        ))
                    }
                </ul>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map((elem) => (
                                <tr key={elem.itemname}>
                                    <td>{elem.itemname}</td>
                                    <td>{elem.price}</td>
                                    <td>{elem.stock}</td>
                                </tr>
                            ))
                        }
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
                <UserComponent/>
            </>
        )
    }
}
ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)