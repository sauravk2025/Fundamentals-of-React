import { useState } from "react"

function UseState5() {

    type setTypeObj = {
        username:string,
        hobbies:{
            reading:boolean,
            football:boolean,
            coding:boolean
        },
        phone:number
    }
    const [obj,setObj] = useState<setTypeObj>({

        username:"",
        hobbies:{
            reading:false,
            football:false,
            coding:false
        },
        phone:0
    })
    
    function handleChange(e:React.ChangeEvent<HTMLInputElement>)
    {
        console.log(e.target.value); //displays the value in target
        console.log(e.target.name); //display the name property of target
        console.log(e.target.checked); //true of false for target checkboxes
        console.log(e.target.type); //display the type of value of the target(number,text,checbox)
        
        setObj((prev)=>({
            ...prev,
            hobbies:{
                ...prev.hobbies,
                [e.target.name]:e.target.checked,
            },
            [e.target.name] : e.target.value
        }))

    }

  return (
    <>

        <h1>
            Name:{obj.username}
            <br/> Hobbies
            <br/>{ obj.hobbies.reading ? "Reading":""}   <br/>{obj.hobbies.football ? "Football":""}<br/>   {obj.hobbies.coding ? "Coding":""}
            <br/>Phone:{obj.phone}
        </h1>
        <input type="text"  placeholder="username"value={obj.username} onChange={handleChange} name="username"></input>
        <label>Reading</label>
        <input type="checkbox"  onChange={handleChange} name="reading"></input>
        <label>Football</label>
        <input type="checkbox" onChange={handleChange} name="football"></input>
        <label>Coding</label>
        <input type="checkbox" onChange={handleChange} name="coding"></input>
        <input type="number" placeholder="number" value={obj.phone} onChange={handleChange} name="phone"></input>
     
        
    </>
  )
}

export default UseState5
