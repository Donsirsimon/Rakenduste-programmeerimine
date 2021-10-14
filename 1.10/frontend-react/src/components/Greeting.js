import React from "react"

const Greeting = ({ name, age }) => {
  return (
    <>
      <h1>Greeting { name }</h1>
      <p>Vanus { age }</p>
    </>
  )
}

export default Greeting