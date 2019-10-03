import React, { useState } from 'react'
import Material from './Material'
// import Simple from './Simple'
import './App.css'

export default function App() {
  const [values, setValues] = useState()
  return (
    <div>
      <Material onSubmit={setValues} />
      <code>
        {JSON.stringify(values, null, 2)}
      </code>
    </div>
  )
}
