import { useEffect, useState} from "react"


function UseEffect1() {

  const [count,setCount] = useState(0);

  useEffect(()=>(
    console.log("useEffect runs after every render")
  ))
  
  
  console.log("re-render outside return")

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>click</button>
      {console.log("re-render inside return")}
    </>
  )
}

export default UseEffect1
