import { useState } from "react"
function UseState1() {

    const [count, setCount] = useState<number>(0);
    const [pname, setpName] = useState<string>("Saurav")

    function handleInc()
    {
        console.log(`count before: ${count}`);
        setCount(count+1);
        setCount(count+1); // here everytime count tries to update it, it updates only the previous state values and not updated one by previous setCount(count+1) value
        setCount(count+1);
       console.log(`count after: ${count}`);
    }

    console.log(`count outside: ${count}`); //count is updated only after it leaves the function


    function handleAddName()
    {
        pname =="Cristiano Ronaldo" ? setpName("Saurav Krishnan") : setpName("Cristiano Ronaldo")
    }

  return (
    <>
        <h1>{count}{pname}</h1>
        <button onClick={ handleInc }> Inc++ </button>
        <button onClick={ ()=> setCount(0) }> Set 0 </button>
        <button onClick={ ()=>(count > 0 ? setCount(count-1) : setCount(0))}> Dec-- </button>
        <button onClick={ ()=> { console.log("checking rendering");
                                 console.log("wow") }}>
                CheckRender</button>
        <button onClick={ handleAddName }>Add Name</button>
    </>
  )
}

export default UseState1
