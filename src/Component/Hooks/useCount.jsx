import { useState } from "react";

export default function useCount(){
    const [count, setCount] = useState(0);
  
    function increment(){
      setCount(s => s + 1);
    }
  
    function decrement(){
      setCount(s => s > 0 ? s - 1 : s);
    }
    return {
     count, increment, decrement
  
    }
  
  } 