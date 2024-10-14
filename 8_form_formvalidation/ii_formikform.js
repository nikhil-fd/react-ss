//🚩"form" define using -- "Formik" library🎁

import React from "react";
import {useFormik} from "formik";

function FormikForm(){
    const formik = useFormik({      //👈Here instead of "formik" you can give any name
        initialValues: {
            itemname: "",
            price: 0,
            shippedto: "",
            stock: false
        },
        onSubmit: (values) => (
            document.write(`
                <table border="1">
        <tr>
            <th>Name</th>
            <td>${values.itemname}</td>
        </tr>
        <tr>
            <th>Price</th>
            <td>${values.price}</td>
        </tr>
        <tr>
            <th>Shipped To</th>
            <td>${values.shippedto}</td>
        </tr>
        <tr>
            <th>Stock</th>
            <td>${(values.stock == true)?"Available":"Out of Stock"}</td>
        </tr>
    </table>
                `)
        )
    })
    return(
        <>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt><label for="itemname">Item Name</label></dt>
                    <dd><input type="text" id="itemname" name="itemname" onChange={formik.handleChange} value={formik.values.itemname}/></dd>
                    <dt><label for="itemprice">Item Price</label></dt>
                    <dd><input type="text" id="itemprice" name="price" onChange={formik.handleChange} value={formik.values.price}/></dd>
                </dl>
                <select name="shippedto" value={formik.values.shippedto} onChange={formik.handleChange}>
                    <option>Shipped To</option>
                    <option>Bombay</option>
                    <option>Kashmir</option>
                    <option>Patna</option>
                </select>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" name="stock" id="instock" checked={formik.values.stock} onChange={formik.handleChange}/>
                    <label for="instock">In Stock</label>
                </div>
                <button className="bg-danger">Register</button>
            </form>
        </>
    )
}
export default FormikForm;


//🔔NOTE: <input> element name="" value must be same with formik "initialvalues" key name,
//        then only you can change name in input box.

//      "handleChange" and "handleSubmit" are the default attribute of useFormik.
//      "handleChange" get the value from "input" box and "select" box and then handleChange updateing
//      these value in formik--initialvalues--keys(itemname, price, ....)

//      "handleSubmit" when form submitting data at that time it update in formik--onSubmit and 
//      formik--onSubmit submitting data in document.write. 

//      Line no.7 instead of "formik" you can give any name.