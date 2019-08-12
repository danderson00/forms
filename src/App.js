import React, { useState } from 'react'
import Item from './Item'
import './App.css'

export default function App() {
  const [values, setValues] = useState()
  return (
    <div>
      <Item onSubmit={setValues} />
      <code>
        {JSON.stringify(values, null, 2)}
      </code>
    </div>
  )
}
