import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h3>Update the count and edit src/App.tsx, state is preserved</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>Count - {count}</button>
    </div>
  )
}
