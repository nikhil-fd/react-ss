//🚩"form" validation used library "Formik" + "Yup"
//"Formik" library provides predefined component.
//Components have in-built functionalities.
//Without write lot of conditions and validation references you can handle validation with
//simple components.

//The components of "Formik" library  are--
//1️⃣<Formik>        --It configures the initialValues, validationSchema, formik events such as onSubmit, onBlur, onChange etc.
//2️⃣<Form>          --It is used to configure a dynamic form. "Form" can submit the intial vlaue from <Field>.
//3️⃣<Field>         --It configure form element like (<input type="text/checkbox/radio etc.." ), dropdown and select etc.
//                  --<Field> attribute is "as", "name" etc.(as="select")
//4️⃣<ErrorMessage>  --It binds the "Field" error to report the error and display in UI.

//🔔Note: in HTML form element defined in Small letter i.e. <form>
//        in React "formik" library defined form element in capital letter i.e. <Form> 


//🎯"Props" in Formik🎯
//"props" is used in Formik as function and "props" function identifying/collecting state(value)
//from every "Field".


//🎯Validation State🎯
//1️⃣dirty    --it returns true when value change/modify in "Field".
//2️⃣touched  --it returns true when "onBlur".
//3️⃣isValid  --it returns true when all "Field" has value.


//🕑Example:
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const UserJobPortalValidation = () => {
    return(
        <>
            <Formik
                initialValues={
                    {
                        Username: "",
                        Usersalary: "",
                        Useremail: ""
                    }
                }
                validationSchema={
                    yup.object({
                        Username: yup.string()
                                     .required("*username required")
                                     .min(4,"*username too short")
                                     .max(15, "username too long"),
                        Usersalary: yup.number()
                                       .required("*salary required")
                                       .min(15000, "*Minimum 15000 salary required")
                                       .max(45000, "*maximum 45000 salary required"),
                        Useremail: yup.string()
                                      .required("*email id required")
                                      .email("*Invalid email id")               
                    })
                }
                onSubmit={(values) => (
                    document.write(JSON.stringify(values))
                )}   
            >
            {/* inside binding expression used "props" as function and "props" identifying/collecting
            state/value from "Field". 👇*/}
            {
                (props) => (
            <Form>
                <dl>
                    <dt>UserName</dt>
                    <dd><Field type="text" name="Username"></Field></dd>
                    <dd className="text-danger"><ErrorMessage name="Username"></ErrorMessage></dd>
                    <dt>UserSalary</dt>
                    <dd><Field type="text" name="Usersalary"></Field></dd>
                    <dd className="text-danger"><ErrorMessage name="Usersalary"></ErrorMessage></dd>
                    <dt>Useremail</dt>
                    <dd><Field type="text" name="Useremail"></Field></dd>
                    <dd className="text-danger"><ErrorMessage name="Useremail"></ErrorMessage></dd>
                </dl>
                <button disabled={props.isValid == false}>Register</button>
                <button disabled={props.dirty == false}>Save</button>
                {/*👆 when all "Field" contains data(that means isValid returns true) then this button will enable orelse button will disabled. */}
            </Form>
                )
            }
            </Formik>
        </>
    )
}
export default UserJobPortalValidation;
