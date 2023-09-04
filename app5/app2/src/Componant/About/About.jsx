import React, { useContext } from 'react'
import { UserContext } from '../..'

export default function About() {
  const {value, setValue} = useContext(UserContext)

  return (
    <>
    <div className='card w-50 m-auto my-5'>
    <h2 className='m-auto my-5'>{value}</h2>
    <button className='btn bg-success mt-5' onClick={() => setValue('I changed!')}>change the name</button>
    </div>
    </>
    )
}
