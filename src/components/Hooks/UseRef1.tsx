import { useState, useRef,useEffect } from "react"

function UseRef1() {

    const [count, setCount] = useState(0);
    //const [refcount, setRefCount] = useState(0)
    const ref = useRef<number>(0);

    console.log("outside useEffect");
    useEffect(()=>{
        // setRefCount(refcount+1);
        ref.current+=1;
        console.log("inside useEffect");
    })

    console.log("runs on rendering")

  return (
    <>

      <h1>helloo {ref.current}</h1>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>click</button>
    </>
  )
}

export default UseRef1
