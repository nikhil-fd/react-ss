//🔔Note: In Line No. 17,20,22,30 In onChange event we used callback and passed e as an event argument 
//      using "e" get value from input box and that value store in setName and setName update that value in state/getName.

//     👉This is the default/core functionalities of react for form validation, and it is a lengthy process, 
//       so to make this form validattion streamline we need to use third party library in react.  

import React from "react";
import { useState } from "react";
function FormComponent(){
    const[getName, setName] = useState("")
    const[getPrice, setPrice] = useState("")
    const[getLocation, setLocation] = useState("")
    const[getStock, setStock] = useState(true)
    const formSubmit = (e) => (
        document.write(`ProductName--${getName} <br> ProductPrice--${getPrice} <br> Location--${getLocation} <br> StockAvailability--${getStock}`)
    )
    return(
        <>
            <form onSubmit={formSubmit}>
                <dl>
                    <dt><label for="pname">Product Name</label></dt>
                    <dd><input type="text" name="prodname" id="pname" value={getName} onChange={(e) => setName(e.target.value)}></input></dd>
                    {/* 👆In onChange we used callback and passed e as an event argument using e get value from input box and that value store in setName and setName update that value in state/getName. */}
                    <dt><label for="price">Product Price</label></dt>
                    <dd><input type="number" name="prodprice" id="price" value={getPrice} onChange={(e) => setPrice(e.target.value)}></input></dd>
                </dl>
                <select name="location" value={getLocation} onChange={(e) => setLocation(e.target.value)}>
                    <option>Location</option>
                    <option>Hyderabad</option>
                    <option>Bhubaneswar</option>
                    <option>Bangalore</option>
                    <option>Delhi</option>
                </select>
                <div>
                    <input type="checkbox" id="stock" value={getStock} onChange={(e) => setStock(e.target.value)}/>
                    <label for="stock">Stock Available or Not</label>
                </div>
                <div>
                    <button>Register</button>
                </div>
             
            </form>
        </>
    )
}
export default FormComponent;