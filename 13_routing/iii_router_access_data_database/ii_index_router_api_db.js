import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";

export class CategoriesComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categories: []
        }
    }
    componentDidMount(){
        axios.get("http://127.0.0.1:8080/getcategories")
        .then(response => {
            this.setState({
                categories: response.data
            })
        })
        .catch(error => {
            console.error("There was an error fetching the categories!", error)
        })
    }
    render(){
        return(
            <>
                <div>
                    <h3>Categories</h3>
                    <ol>
                        {
                            this.state.categories.map(elem => 
                                <li key={elem.Categoryid}>
                                    <Link to={"/products/" + elem.Categoryid}>{elem.Categoryname}</Link>
                                </li>
                            )
                        }
                    </ol>
                </div>
            </>
        )
    }
}

export class ProductsComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        axios.get("http://127.0.0.1:8080/getproducts")
        .then((response) => {
            this.setState({
                products: response.data
            })
        })
        .catch(error => {
            console.error("There was an error fetching the products!", error)
        })
    }
    render(){
        return(
            <>
                <div>
                    <ol>
                        {
                            this.state.products.map(elem => 
                                <li key={elem.Productid}>{elem.Name}</li>
                            )
                        }
                    </ol>
                    <div>
                        <Link to="/categories">Back to Categories</Link>
                    </div>
                </div>
            </>
        )
    }
}


const HomeComponent = () => {
    return(
        <>
            <h2>Amazon-Home Online Shopping</h2>
        </>
    )
}

export default class IndexComponent extends React.Component{
    render(){
        return(
            <>
                <div className="container-fluid">
                    <Router>
                    <header className="bg-danger text-white text-center p-2">
                        <h1>Amazon Shopping</h1>
                    </header>
                    <div className="row">
                        <div className="col-3 d-grid">
                            <Link className="btn btn-danger mt-3" to="/home">Home</Link>
                            <Link className="btn btn-danger mt-3" to="/categories">Categories</Link>
                        </div>
                        <div className="col-9">
                            <Routes>
                                <Route path="/" element={<HomeComponent/>}></Route>
                                <Route path="/home" element={<Navigate to="/"/>}></Route>
                                <Route path="/categories" element={<CategoriesComponent/>}></Route>
                                <Route path="/products/:id" element={<ProductsComponent/>}></Route>
                            </Routes>
                        </div>
                    </div>
                    </Router>
                </div>
            </>
        )
    }
}


//useState() -- useState() hooks is used to store the value in state and update or modify the value using useState() set-function.
// const [products, setProducts] = useState({});

//useEffect() -- useEffect() hooks is used to handle the functionalities such as componentDidMount(), componentDidUpdate()
//               and componentUnmount(). So useEffect() hooks is used to handle the mount techniques in functional component.
//               * useEffect() hooks it contains a callback function and dependencies.
// useEffect(() => {

// }, [])

//