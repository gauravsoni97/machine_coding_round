import React, { useContext } from 'react'
import MyContext from './context/context'

const App = () => {

const {value} =   useContext(MyContext)


  return (
    <div>{value}</div>
  )
}

export default App