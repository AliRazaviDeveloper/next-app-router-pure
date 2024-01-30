import { useState } from "react"

export default function Home() {

  const [count, setCount] = useState(0);

  return (
    <div className='container max-w-screen mx-auto'>
      <h1 className="text-rose-900">
        Hello World !
      </h1>
      <p className="">
        Hello World !
      </p>
      <p className="">
        Hello World !
      </p>

      <p>
        {count}
      </p>
      <button onClick={() => setCount(count => count + 1)}>

        Click
      </button>
    </div>
  )
}
