import { useState, useEffect } from "react"

function UseEffect3() {

    const [count,setCount] = useState(0);
    const [year,setYear] = useState(1994);

    useEffect(()=>{
        console.log("runs when count value changes, count:"+ count);
    },[count])

    

  return (
    <>
      <h1>{count}   {year}</h1>
      <button onClick={()=>setCount(count+1)}>Count</button>
      <button onClick={()=>setYear(year+1)}>Year</button>

    </>
  )
}

export default UseEffect3
