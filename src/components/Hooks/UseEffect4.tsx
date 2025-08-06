import { useState,useEffect } from "react"


function UseEffect4() {

    const [count,setCount] = useState(0)

    useEffect(()=>{
        // console.log("depends on count variable");

        let intervalId = setInterval(()=>{
            setCount(count+1);
            // console.log("Updates count after every 4 seconds")
        },10000);

        return ()=>{
            clearInterval(intervalId);
            // console.log("inside clean up function")
        }

    },[count])

  return (
    <>
      <h1>Counter after 4 seconds: {count}</h1>
      {/* <button onClick={()=>setCount(count+1)}>Last UseEffect</button> */}
    </>
  )
}

export default UseEffect4
