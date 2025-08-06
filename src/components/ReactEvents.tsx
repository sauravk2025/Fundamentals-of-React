
function ReactEvents() {

  function handleClick(e:React.MouseEvent<HTMLButtonElement>){
    console.log("inside button single click")
    console.log(e);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
}
  function handleDblClick(e:React.MouseEvent<HTMLButtonElement>){
    console.log("inside button double click");
    console.log(e);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
}
//   function handleDivClick1(e:React.MouseEvent<HTMLElement>){
//     console.log("inside the ancestor of button")
//     console.log(e);
//     console.log(e.target);
//     console.log(e.currentTarget);
//     console.log(e.type);
// }
  function handleDivClick3(e:React.MouseEvent<HTMLElement>){
    console.log("Inside the parent of Button")
    console.log(e);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
    e.stopPropagation();
    //e.preventDefault();
}
  function handleInput(e:React.ChangeEvent<HTMLInputElement>){
    console.log("inside the ancestor of button")
    console.log(e);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
    console.log(e.target.value)
}
  function handleFocus(e:React.FocusEvent<HTMLInputElement>){
    console.log("inside the ancestor of button")
    console.log(e);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
}
  function handleBlur(e:React.FocusEvent<HTMLInputElement>){
    console.log("inside the ancestor of button")
    console.log(e);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
}
  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    console.log("inside the ancestor of button")
    console.log(e);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
    console.log(e.target.value)
}
  function handleMouseOut(e:React.MouseEvent<HTMLElement>){
    console.log("inside the ancestor of button")
    console.log(e);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
}
  function handleMouseOver(e:React.MouseEvent<HTMLElement>){
    console.log("inside the ancestor of button")
    console.log(e);
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
}


  return (
    <>
    <div onMouseOut={handleMouseOut}>
      Mouse Out
      <div onMouseOver={handleMouseOver}>
        Mouse Over
        <div onClick={handleDivClick3}>
          handleDivClick
          <button onClick={handleClick}>Single Click</button>
          <button onDoubleClick={handleDblClick}>Double Click</button>
          <input onInput={handleInput} placeholder="input event"></input>
          <input onFocus={handleFocus} placeholder="focus event"></input>
          <input onChange={handleChange} placeholder="change event"></input>
          <input onBlur={handleBlur} placeholder="blur event"></input> 
        </div>
      </div>
    </div>
    </>
  )
}

export default ReactEvents
