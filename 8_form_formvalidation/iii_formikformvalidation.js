//👇Example: Belongs to VDO 23_FormValidation -- SudhakarSharma
//🚩Form Validation using--"Formik"🎁
//Here <form> validation is defined by using React 3rd party Library i.e. "Formik" and this 
//validation is defined by with "formik"'s default validation. But formik default validation
//process is more lengthy so to avoid this lengthy process we can use "formik"'s specail validation library
//i.e. "YUP" library.
//Using "formik-yup" validation library we can streamline or can more easy the validation process. 

//"formik.touched.Name" etc. means When user click on input field and didn't give any value and came out from input field,
// and that time it render "error" message. "touched" is a formik predefined property
 

import React from "react";
import { useFormik } from "formik";

const InputValidation = (props) => {
    const errors = {
        errorname: "",
        errorprice: "",
        errorcode: ""
    }
    /*error condition for Name*/
    if(!props.Name){
        errors.errorname = "*Product Name Required";
    }else if(props.Name.length < 5){
        errors.errorname = "*Name too short"
    }

    /*error condition for Price*/
    if(!props.Price){
        errors.errorprice = "*Minimum Amount Required";
    }else if(!/(?=.*[A-Z])(?=.*\d)(?=.*\W){5,15}/.test(props.Price)){  //👈Regex--atleast 1 uppercase & 1 number & 1 special character with minimum 5 and maximum 15 charcter require. "test" method is same as "match()" method.
        errors.errorprice = "*Provide valid price"
    }

    /*error condition for Code*/
    if(!props.Code){
        errors.errorcode = "*Required valid code";
    }
    return errors;

}

function FormikFormValidation(){
    const formik = useFormik({
            initialValues: {
                Name: "",
                Price: 0,
                Code: ""
            },
            validate: InputValidation,   //👈validate property pointing towrards InputValidation and store value in InputValidation function.
            onSubmit: (values) => (
                document.write(JSON.stringify(values))
            )
    })
    return(
        <>
            <form onSubmit={formik.handleSubmit}>
                <dl className="ms-3 mt-3">
                    <dt><label for="pname">Product Name</label></dt>
                    <dd><input type="text" id="pname" name="Name" value={formik.values.Name} onChange={formik.handleChange} onBlur={formik.handleBlur}/></dd>
                    <dd className="text-danger">{(formik.touched.Name && formik.errors.errorname)?formik.errors.errorname:null}</dd> 
                                                 {/* 👆used ternary operator */}
                    <dt><label for="pprice">Product Price</label></dt>
                    <dd><input type="text" id="pprice" name="Price" value={formik.values.Price} onChange={formik.handleChange} onBlur={formik.handleBlur}/></dd>
                    <dd className="text-danger">{(formik.touched.Price && formik.errors.errorprice)?formik.errors.errorprice:null}</dd>
                    <dt><label for="pcode">Product Code</label></dt>
                    <dd><input type="text" id="pcode" name="Code" value={formik.values.Code} onChange={formik.handleChange} onBlur={formik.handleBlur}/></dd>
                    <dd className="text-danger">{(formik.touched.Code && formik.errors.errorcode)?formik.errors.errorcode:null}</dd>
                </dl>
                <div>
                <button className="btn btn-info ms-3 d-grid">Register</button>
                </div>
            </form>
        </>
    )
}
export default FormikFormValidation;