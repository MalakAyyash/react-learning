import React, { useEffect } from 'react'
const randomColour = () => '#'+(Math.random()*0xFFFFFF<<0).toString(16);

export default function useDocumentBackground(){

    useEffect(() => {
      function handleColor(){
        document.body.style.background = randomColour()
      }
      window.addEventListener('mousedown',handleColor)
      return() =>{
        window.removeEventListener('mousedown',handleColor)
  
      }},[])
    
  }