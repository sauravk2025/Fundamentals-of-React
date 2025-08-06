import { useState, useRef, useEffect } from "react"

function UseRef3() {

    const [name,setName] = useState("");
    const prevNameRef = useRef<string>("");

    useEffect(()=>{
        prevNameRef.current = name;
        console.log("Rendered inside useEffect.Value of name after useEffect but inside is ",name)
        console.log("Rendered inside useEffect.Value of name after useEffect but inside is ",name)
    })
    console.log("between useEffect and handleName.Value of name between setName and useEffectis ",name);
    function handleName(e:React.ChangeEvent<HTMLInputElement>)
    {
        setName(e.target.value);
        console.log("inside function handleName.Value of name after setName function is ",name) ;

    }   

  return (
    <>
      <input value={name} onChange={handleName} placeholder="inside useRef3"></input>
      <h1>{prevNameRef.current}</h1>
    </>
  )
}

export default UseRef3
