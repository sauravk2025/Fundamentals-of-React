import { useEffect,useState} from "react"

function UseEffect2() {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("run only on mounting, ie:once")
    },[]);

    console.log("runs on every render outside return")

  return (
    <>
      <h1>Component run once</h1>
      <h2>{count}</h2>
      { console.log("runs on every render inside return") }
      <button onClick={()=>setCount(count+1)}>CLick</button>
      

    </>
  )
}

export default UseEffect2
