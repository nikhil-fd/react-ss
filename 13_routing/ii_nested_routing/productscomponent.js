import React from "react";
import { Link, useParams } from "react-router-dom";
const ProductsComponent = () => {
    let {id} = useParams();
    let products = [
        {Name: "Haier Ovan", Price: 45000, categoryId:1, categoryname: "Electronics" },
        {Name: "LG Washing Machine", Price: 45000, categoryId:1, categoryname: "Electronics" },
        {Name: "Lee Jeansn", Price: 2999, categoryId:2, categoryname: "Fashion" },
        {Name: "Spykar Shirts", Price: 1599, categoryId:2, categoryname: "Fashion" },
        {Name: "Nike", Price: 5999, categoryId:3, categoryname: "Footwear" },
        {Name: "HRX", Price: 6599, categoryId:3, categoryname: "Footwear" },
        
    ];
    let result = products.filter(elem => elem.categoryId === id)
    return(
        <>
            <div>
                <h3>{result.categoryId === id?result.categoryname:null}</h3>
                <table className="table table-hover table-bordered table-primary table-responsive table-striped">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        result.map(item => 
                            <tr key={item.Name}>
                                <td>{item.Name}</td>
                                <td>{item.Price}</td>
                                <td>{item.categoryId}</td>
                            </tr>
                        )
                    }
                </tbody>
             </table>       
                <br/>
                <Link to="/category">Back to Categories</Link>
            </div>
        </>
    )
}
export default ProductsComponent;