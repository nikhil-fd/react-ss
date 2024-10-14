//🎁Difference between Functional Component and Class Component?🚩

//     🤷‍♂️Functional Component                                   🤷‍♂️Class Component
//#1. functional component is "stateless".             #1. class component is "statefull".

//#2. functional component means ther are              #2. class component means they are
//    designed with javascript function.                   designed with javascript class.

//#3. It is "stateless" because they don't             #3. It can hold and manage memory.
//    hold or manage state. It is simply                   statefull implement logic and sate.
//    accept data and display them in some form.

//#4. To become functional component statefull,        #4. In Ccomponent we can define "state"
//    we can use useState() hook.Using this hook           by using "constructor()" method with
//    we can define the "state" in FComponent.             "this.state". For "state" update use
//    For "state" update also we use same,                 "this.setState()" (update means suppose
//    "useState()" hook. Using useState() hook             if you want to update new data in state
//     we can define "state" variable and                  then we can update data using "this.setState()".
//     update the "state" by a function.                   Here "state" value can acces by {this.state.key}.
//     The "state" and "function" is inbuilt with
//     useState() hook. 

//#5. What is "state" in React?                          #5. "state" same in class component also.   
//   "state" is an object that holds information/value,
//    relevant to component. Actually in Javascript  
//    we used to use "variable"/"object" to store a 
//    "value" but in React we are using "state" 
//    to store a value.
//    "state" allows component to manage dynamic data.
//    When there is any changes or modification in 
//    "state" then react re-render the component and
//    reflecting the updated "state" to UI. 

//#6. In Fcomponent we can define "function", for        #6. In Ccomponent we can't define function 
//    events or other criteria.                              instead of function can define "method"
//    example: function handleClikc(){}                      example: handleClick(){}.
//    it can access by {handleClick}                         method can access by {this.handleClick}.                                   

//#7. Fcomponent uses "properties(props)" as           #7. Ccomponent uses "properties".
//     parameter. And parameter can be any type              Same Ccomponent properties are local and immutable.
//     "string", "array", "object", "number" etc.            Same Component properties not allow to modify the value. 
//     Fcomponent properties are local and immutable.        properties can access by- {this.props.key}
//     Immutable means we can not change or modify
//     the data in properties.
//     Properties can be acces by- {props.key}                

//#8. In fcomponent component we use return() method     #8. In C-component we use "render()" method to render the
//    to render the DOM(Html element).                       DOM(Html element). Inside render() method can not modify the state.
//    Syntax: function HeaderComponent{                      syntax: class HeadComponent extends React.Component{
//                return(                                                  render(){
//                   <>                                                         return( 
//                     <html element>                                              <>
//                   </>                                                            <html element>
//                      )}                                                         </>
//                                                                                   )}}

//#9. It is difficult to transport data from one        #9. It is good for taransporting data across
//    component to another component.                       component.

//#10. It is tightly coupled architecture.              #10. It is loosely coupled architecture.

//#11. It is more secure and discrete in access.        #11. It is not secure and not discrete.  
//    it manages memory.                                    Not secured -- means it can access in any location.
//                                                          Not discrete -- continuous in connection then uses more memory.

//#12. Here no use of "constructor."                    #12. Here "constructor" are necessary bcz they store "state".



//👉NOTE: In javascript When we use "class", in "class" we can not use "variable" and "function",
//        so instead of "variable" we can use "properties" to store value by syntax- this.propertiesname = "value".
//        And instead of "function" we can use "method", "method" can use for events or data updation etc.
//        syntax: handleClick(){}. 