import { useState } from "react"
function UseState3() {

    type setObjType = {
        name:string,
        age:number
    }

    const [obj, setObj] = useState<setObjType>({name:"",age:0});

    function handleName()
    {
        setObj((prev)=>({
            ...prev,
            name:"saurav",
        }))
    }

    function handleAge()
    {
        setObj((prev)=>({
            ...prev,
            age:22,
        }))
    }
  return (
    <>
      <h2>{obj.name} is {obj.age} years old</h2>
      <button onClick={handleName}>Name</button>
      <button onClick={handleAge}>Age</button>

    </>
  )
}

export default UseState3
