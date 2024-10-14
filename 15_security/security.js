//🚩Security🎁
//If we do not provide security to our React application then we have to may face-
//👉Cross Site Scripting Attack(XSS)
//👉Request Forgery
//👉Authorization/Authentication 

//Precautions for Cross Site Scripting Attack(XSS)
//✅SAFE                                                🔴UNSAFE
<p>{msg}</p>,                                       <p innerHTML={msg}></p>,
<p dangerouslySetInnerHTML={msg}></p>

//📌dangerouslySetInnerHTML: is used to handle the cross site scripting attack(XSS).
//📌innerHTML: is not used to handle cross site scripting attack(XSS).


