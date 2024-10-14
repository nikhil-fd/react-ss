// const divElem = React.createElement(
//     "div", 
//     {className: "papers", title: "sanju"}, 
//     "Welcome to JSX",
//     React.createElement("h3", {align: "center", id: "heading3"}, "Item details here"),
//     React.createElement("p", {className: "para1", align: "center"}, "lorem data given here"),
//     React.createElement("img", {width: 100, height: 100, src: "../asset/Maa Bhaku.jpg", title: "my life"})
// );

//     ReactDOM.render(divElem, document.getElementById("msgbox"))

//React Component
//it comprises of logic, markup and style
//react component is created in 2 ways--1.using javascript function i.e. called as functional compnent
//2.using javascript class i.e. called as class component.
//functional component is defined by using anonymous function but we can take it reference 

// const HeaderComponent = function(){
//     return(
//         <>
//         <header className="bg-primary p-2 text-center text-light">
//         <h2>Amazon Shopping Online</h2>
//         <p>india's largest e-commerce</p>
//         </header>
//     </>
//     )
// };
// const NavigationComponent = () => (
//     <>
//         <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </>
// );
// const FooterComponent = () => (
//     <>
//         <p className="bg-danger p-3 text-center text-white">&copy;Copyright Nikhil 2024</p>
//     </>
// );
// const MainComponent = () => (
//     <>
//         <HeaderComponent/>
//         <div className="row">
//             <div className="col-2">
//                 <NavigationComponent/>
//             </div>
//             <div className="col-10">
//                 <p>Welcome to Anmazon shoopibng didkshd</p>
//             </div>
//         </div>
//         <FooterComponent/>
//     </>
// )

// ReactDOM.render(
//     <MainComponent/>,
//     document.getElementById("msgbox")
// )



class HeaderCompo extends React.Component{
        constructor(prop){
            super(prop)
            this.state = {
                myVal: "Flipkart New Arrival"
            }
        }
    render(){
        return (
            <>
                <div className="bg-warning text-center text-danger">
                <h1>{this.state.myVal}</h1>
                <p>india's largest Ecommerece</p>
                </div>
            </>
        )
    }
}
class NavCompo extends React.Component{
    render(){
        return(
            <>
                <nav style={{height: "460px"}}> 
                <ul>
                    <li>Footwear</li>
                    <li>Fashion</li>
                    <li>Grocery</li>
                    <li>Electronics</li>
                </ul>
                </nav>
            </>
        )
    }
}
class FooterCompo extends React.Component{
    render(){
        return(
            <>
                <h5 className="bg-warning p-2 text-center">&copy;Copyright 2024 Flipkart</h5>
            </>
        )
    }
}
class MainCompo extends React.Component{
    render(){
        return(
            <>
                <HeaderCompo/>
                <div className="row">
                    <div className="col-3">
                        <NavCompo/>
                    </div>
                    <div className="col-9">
                        <p>We are doing great in this situation returned to the nite.</p>
                    </div>
                </div>
                <FooterCompo/>
            </>
        )
    }
}
ReactDOM.render(
    <MainCompo/>,
    document.getElementById("msgbox")
)


//👌in js markdown need to mention.
//can we define a variable inside class in js and react? --No
//can we define a function inside class in js and react? -- No
//JavaScript Class🎯
//1️⃣In js class, instead of "variable" we use "properties" -- "properties" stores value -- And "properties" define inside "constructor" method.
//  "Properties" value can be access by "newobject.properties".

//2️⃣In js class, instead of "funciton" we use "method". method can access by "newobject.method()". 

//React Class🎯
//1️⃣In Reactjs class, instead of "variable" we use "properties" -- "properties" stores value -- here no need to mention "props"
//   "properties" value can be access by {this.props.key}

//2️⃣In Reactjs class, instead of "funciton" we use "method". method can access by "this.method()". 



//2. jodi amey variable kimba function define kari paruney class re tahele value ku store kori rakhi pariba nahi.
//so value ku store kari rakhiba painee hele amaku use kariba painee hebo properties(for variable) and method(for function).