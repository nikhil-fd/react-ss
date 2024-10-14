//1️⃣In Javascript we were storing value/data in "variable" or "object" or "array" etc.
//2️⃣But In ReactJS for storing value/data instead of "variable" or "object" or "array"
//   we use "properties" and "state".
//3️⃣So in React both "properties" and "state" are able to store the data/value, 
//  then what is the difference between them?


//🎁Differnce between "properties" and "state"?🎁
//        🤷‍♂️properties                                        🤷‍♂️state
//#1. In react "propertis" are used to                  #1. In React "state" are used to 
//    store "data".                                         store data.

//#2. "properties" are local and immutable in           #2. "state" are mutable in both "funcitonal component"  
//     both "functional component" and "class               and "class component". mutable means we can modify
//     component". immutable means can not                  the data. In class componet we are modifying or update
//     modify the data within the component.                data by using "this.setState()" method.
//                                                          In functional component we are modifying or update data
//                                                          by using "useState()" hook, this hook contains a
//                                                          function and using this function can update/modify data.     

//#3. "properties" are defined in both "functional"     #3. In class component "state" is defined by "constructor()"
//     and "class" component by the name of "props".        method with "this.state" and it is access by {this.state.key}.
//     "properties" passed from parent to child             In functional component "state" is defined by "useState()" hook.
//     component and child store the data and these         
//     data access in parent component.
//     In class properties access by - {this.props.key}
//     In functional properties access by - {props.key}

//#4. When you should use "properties"?                   #4. When you should use "state"?
//    if you don't want to change data, menas providing       if you have dynamic data and that data can
//    data one time later you can't change within the         change dynamically in later within the component.
//    component.
//    "properties" does not allow you to change value         "state" allows you to change the value within
//    within the component.                                    the compoenent.