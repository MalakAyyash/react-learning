import React, { useContext } from 'react'
import { UserContext } from '../..'

export default function Contact() {
  const {value, setValue} = useContext(UserContext)

  return (
    <h2>{value}</h2>
  )
}
