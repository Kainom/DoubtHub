import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='gap-10 border-b  rounded-lg bg-amber-900 mt-20 mx-auto w-1/2 h-64 flex  justify-center items-center'>
      <p onClick={()=>{setCount(count + 1)}} className='text-amber-500 bg-black p-2.5 cursor-pointer border-b rounded-xl' >Hello World</p>
      <p className='text-amber-500' >Contador: {count}</p>
    </div>
    </>
  )
}

export default App
