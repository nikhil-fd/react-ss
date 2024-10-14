//🚩Cookies🎁
//Actually cookies is a simple text file. This text file contains client related information.
//cookies can be added in browser memory and client hard drive.
//browser memory is called as in-memory-cookies.
//client hard drive is called as persistent cookies.
//in-memory cookies gets deleted after browser closed.
//in-memory cookies is default cookies.
//persistent cookies not get deleted after brower closed because it stores in hard drive/local drive(:C).

//👉npm install react-cookies

import React, { useState } from "react";
import {useCookies} from "react-cookie";

const LoginComponent = () => {
    const [message, setMessage] = useState('')
    const [cookie, setCookie] = useCookies(['useremail'])

    const createCookie = (email) => {
        localStorage.setItem("email", email)
        setMessage('cookie created')
        let now = new Date();
        now.setTime(now.getTime() + (24*60*60*1000))
        setCookie('useremail', email, {path: '/'})
    }
    return(
        <>
            <label htmlFor="email">Email</label>
            <input type="email" onChange={(e) => createCookie(e.target.value)}/>
            <br/>
            {message}
            <br/>
            cookie value: {cookie.useremail}
        </>
    )
}
export default LoginComponent;