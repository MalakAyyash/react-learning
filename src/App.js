// import React, { useCallback, useState } from 'react'
// import FunctionComponent from './Component/FunctionComponent'

// export default function ClassComponent() {

// const [count, setCount] = useState(0);
  
//   function increment(){
//     setCount(s => s + 1);
//   }

//   const incrementCallback = useCallback(increment, [])

//   return (
//     <>
//     count: {count}
//     <FunctionComponent onClick={incrementCallback}> increment</FunctionComponent>
//     </>

//   )
// }

// ==========================custom hooks=========================
import React, { useEffect, useState } from 'react'
import useDocumentBackground from './Component/Hooks/useDocumentBackground';
import useCount from './Component/Hooks/useCount';


 
export default function App() {
  const {count, increment, decrement} = useCount();
  useDocumentBackground()
  return (
    <div>
      count: {count}
      <br></br>
      <button onClick={increment} > increment</button>
      <button onClick={decrement} > decrement</button>

    </div>

  )
}
// ======
// ===========================use reduser =========================
// import React from 'react'
// import Count from './Component/Count/Count'

// export default function App() {
//   return (
//     <div>
//       <Count />
//     </div>
//   )
// }
// ========================use set state==================
// import React from 'react';

// const INITIAL_LIST = [
//   {
//     id: '0',
//     title: 'React with RxJS for State Management Tutorial',
//     url:
//       'https://www.robinwieruch.de/react-rxjs-state-management-tutorial/',
//   },
//   {
//     id: '1',
//     title: 'React with Apollo and GraphQL Tutorial',
//     url: 'https://www.robinwieruch.de/react-graphql-apollo-tutorial',
//   },
// ];

// function App() {
//   const [list, setList] = React.useState(INITIAL_LIST);
//   function onRemoveItem(id) {
//     const newList = list.filter(item => item.id !== id);
//     setList(newList);  }


//   return (
//     <ul>
//       {list.map(item => (
//         <li key={item.id}>
//           <a href={item.url}>{item.title}</a>
//           <button type="button" onClick={() => onRemoveItem(item.id)}>
//             Remove
//           </button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default App;
// ==========================use effect=========================
// import React from 'react';

// function App() {
//   const [isOn, setIsOn] = React.useState(false);
//   const [timer, setTimer] = React.useState(0);
//   React.useEffect(() => {
//     console.log('effect runs');
//     let interval;
//     if (isOn) {
//       interval = setInterval(() => setTimer(timer + 1), 1000);
//     }    return () => clearInterval(interval);
//   },[isOn]);
//   return (
//     <div>
//       {timer}
//       {!isOn && (
//         <button type="button" onClick={() => setIsOn(true)}>
//           Start
//         </button>
//       )}

//       {isOn && (
//         <button type="button" onClick={() => setIsOn(false)}>
//           Stop
//         </button>
//       )}
//     </div>
//   );
// }

// export default App;