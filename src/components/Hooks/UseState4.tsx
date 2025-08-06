import React, { useState } from "react"

function UseState4() {

    type setArrObjType = {
        p_id:number,
        p_name:string
    }
    const [arrobj, setArrObj] = useState<setArrObjType[]>([{p_id:1,p_name:"Cristiano Ronaldo"}])
    const [pname, setPName] = useState<string>("");
    const [id, setId] = useState<number>();

    function handleName(e:React.ChangeEvent<HTMLInputElement>)
    {
        setPName(e.target.value)
       
    }
    function handleId(e:React.ChangeEvent<HTMLInputElement>)
    {
        setId(parseInt(e.target.value));
    }
    function handleAdd()
    {
        if(id){
            const newObj:setArrObjType = {
            p_id:id,
            p_name:pname
        }
        setArrObj((prev)=>([...prev,newObj]));
        setId(id+1);
        setPName("");
    }
    }


    return (
    <>
      <h2>Goat: {arrobj[0].p_name}</h2>
      <ul>
        {arrobj.map((val,index)=>(
            <li key={index}>
                {val.p_id} is {val.p_name}
            </li>
        ))}
      </ul>
      <input onChange ={ handleId }  placeholder="enter id" value={id}></input>
      <input onChange ={ handleName }  placeholder="enter name" value={pname}></input>
      <button onClick={ handleAdd }>Click to Add</button>
    </>
  )
}

export default UseState4
