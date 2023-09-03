// import React, { useEffect, useRef, useState } from 'react'

import { useCallback } from "react";

// export default function FunctionComponent() {
//     const [fName , setFName] = useState('');
//     const [lName , setLName] = useState('');
//    const fNameRef = useRef();
//    const lNameRef = useRef();
//    const saveRef = useRef();


//    useEffect(() =>{
//     fNameRef.current.focus()
//    }, [] );

//    function onFirstInputKey(e){
//     if(e.key === 'Enter'){
//         lNameRef.current.focus()
 
//     }

//    }
//    function onLastInputKey(e){
//     if(e.key === 'Enter'){
//         saveRef .current.focus()
 
//     }

//    }

//     function run(){
//      console.log({fName, lName})
//     }
    
  
//     return (
//     <div>FunctionComponent
//         <input ref={fNameRef} onKeyDown={onFirstInputKey} placeholder='first name' value={fName}  onChange={(e) => setFName(e.target.value)}/>
//         <input ref={lNameRef} onKeyDown={onLastInputKey} placeholder='last name'  value={lName} onChange={(e) => setLName(e.target.value)}/>
//         <button ref={saveRef} onClick={run}>save</button>
//     </div>
//   )
// }

// ====================use memo==================
// to make a cash 

// import React, { useState, useMemo } from 'react'

// const randomColour = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);

// export default function FunctionComponent() {
 
//     const [fName , setFName] = useState('');
//     const [lName , setLName] = useState('');
//     const [age , setAge] = useState('');

//  const FullName = useMemo(() =><div style={{color:randomColour()}}>{fName} {lName}</div> , [fName,lName])
//     return (
//             <div>
//                 {FullName}
//                 <br />
//                 age : {age}
//                 <br />

//                 <input   placeholder='first name' value={fName}  onChange={(e) => setFName(e.target.value)}/>
//                 <input   placeholder='last name'  value={lName} onChange={(e) => setLName(e.target.value)}/>
//                 <input  type='number' placeholder='age'  value={age} onChange={(e) => setAge(e.target.value)}/>
//             </div>
//           )
//         }

// ========================useCallback===========
import React from 'react'
 const randomColour = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);

 function FunctionComponent(props) {
  return (
    <div>
        <button style={{background: randomColour()}} onClick={props.onClick}>
            {props.children}
        </button>
    </div>
  )
}

export default React.memo(FunctionComponent);
