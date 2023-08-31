// import React, { useReducer } from 'react'
// function init(state){
//     return {
//         count: state
//     }
// }
// function countReduser(state, action){
//     if (action.type === 'INCREMENT')
//     return {count: state.count + action.payload};
//     if (action.type === 'DECREMENT')
//     return {count: state.count - 1}
//     if (action.type === 'REST')
//     return {count: 0};
//     throw new Error(action + 'is not define in count reducer');}

// export default function Count() {
//     const [state, dispatch] = useReducer(countReduser, 0, init)
//   return (
//     <div>
//         Count = {state.count}
//         <br></br>
//         <button onClick={() => dispatch({type: 'INCREMENT', payload: 2})}>increment</button>
//         <button onClick={() => dispatch({type: 'DECREMENT'})}>decrement</button>
//         <button onClick={() => dispatch({type: 'REST'})}>rest</button>

//         </div>
//   )
// }
