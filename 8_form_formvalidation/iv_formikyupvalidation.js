//🚩Formik doing form validation using "yup" library🎁
//👉"...formik.getFieldProps("Name")" -- It gets value from input field and bind these value in "initialValues".

import React from "react";
import { Formik, useFormik } from "formik";
import * as yup from "yup";

function FormikYupValidationForm(){
    const formik = useFormik({
        initialValues: {
            Name: "",
            Price: "",
            Mail: ""
        },
        validationSchema: yup.object({
            Name: yup.string()
                    .required("*Name must Required")
                    .min(4, "*Name too short")
                    .max(12, "*Name too Long"),
            Price: yup.number()
                      .required("*Price must required"),
            Mail: yup.string()                   
                     .required("*Email required")
                     .email("*Invalid E-mail id")    
        }),
        onSubmit: (values) => (
            alert(JSON.stringify(values))
        )
    })
    return(
        <>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt><label for="uname">UserName</label></dt>
                    <dd><input type="text" {...formik.getFieldProps("Name")} name="Name" id="uname"/></dd>
                    <dd className="text-danger">{(formik.touched.Name && formik.errors.Name)?formik.errors.Name:null}</dd>
                    {/*   👆 "formik.touched.Name" means When user click on input field and didn't give any value and came out from input field,
                    and that time it render "error" message. "touched" is a formik predefined property */}

                    <dt><label for="price">Price</label></dt>
                    <dd><input type="text" {...formik.getFieldProps("Price")} name="Price" id="price"/></dd>
                    <dd className="text-danger">{(formik.touched.Price && formik.errors.Price)?formik.errors.Price:null}</dd>

                    <dt><label for="email">E-mail</label></dt>
                    <dd><input type="text" {...formik.getFieldProps("Mail")} name="Mail" id="email"/></dd>
                    <dd className="text-danger">{(formik.touched.Mail && formik.errors.Mail)?formik.errors.Mail:null}</dd>
                </dl>
                <button className="bg-info">Register</button>
            </form>
        </>
    )
}
export default FormikYupValidationForm;
