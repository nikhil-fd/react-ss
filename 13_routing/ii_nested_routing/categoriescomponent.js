import React from "react";
import { Link } from "react-router-dom";
const CategoryComponent = () => {
    let allCategory = [
        {categoryid:1, categoryname: "Electronics"},
        {categoryid:2, categoryname: "Fashion"},
        {categoryid:3, categoryname: "Footwear"}
    ]
    return(
        <>
            <h3>Category List</h3>
            <ul>
                {
                    allCategory.map(elem => (
                        <li key={elem.categoryid}><Link to={"/products/" + elem.categoryid}>{elem.categoryname}</Link></li>
                    ))
                }
            </ul>
        </>
    )
}
export default CategoryComponent;