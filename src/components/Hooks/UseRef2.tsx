import React, { useRef,useState } from "react"
function UseRef2() {

    const [name,setName] = useState("");

    const inputRef = useRef<HTMLInputElement>(null);

    function handleName(e:React.ChangeEvent<HTMLInputElement>)
    {
       setName(e.target.value)

    }
    function handleFocus()
    {
        console.log(inputRef.current) //shows the element where ref={} is set
        inputRef.current && inputRef.current.focus()
        
    }

  return (
    <>
      <input  ref={inputRef}  placeholder="enter something" value={name} onChange={handleName}></input>
      <button onClick={handleFocus}>Focus</button>
    </>
  )
}

export default UseRef2
