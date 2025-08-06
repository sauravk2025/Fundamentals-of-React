type setValueType = {
    value:boolean
    text:string
}


function ConditionalRendering({value,text}:setValueType) {
  return (
    <>

    {value ? <h1>{text}</h1> : <h1>This is false statement of conditional rendering by ternary operator in the Component</h1>}
    {value && <h1>This is Conditional Rendering by AND Clause in the Component</h1>}
    {value || <h1>This is Conditional Rendering by OR Clause in the Component</h1>}
    </>
  )
}

export default ConditionalRendering
