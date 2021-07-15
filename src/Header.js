// type rfce and TAB to get a code snippet
import './Header.css';
import React from 'react'

// 1) Standard use of props
// function Header(props) {
//     console.log("Props used in my Header Component: ", props);
//     return (
//         <div className="App-header">
//             {/* <h1 style={{color: "red"}}>Amazon Cart</h1> */}
//             {/* <h1 style={h1Style}>Amazon Cart</h1> */}
//             <h1 className="h1-style">Amazon Cart created by {props.name} </h1>
//         </div>
//     )
// }

// 2) Destructuring the standar use of props. This option is better
function Header({title, name}) {
    console.log("Props used in my Header Component: ", {name});
    return (
        <div className="App-header">
            {/* <h1 style={{color: "red"}}>Amazon Cart</h1> */}
            {/* <h1 style={h1Style}>Amazon Cart</h1> */}
            <h1 className="h1-style">{title} created by {name} </h1>
        </div>
    )
}

export default Header
