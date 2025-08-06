type array_stringList = {
    new_Array:string[];
}


function Component5({new_Array}:array_stringList) {
  return (
    <>
      <ul>
        {new_Array.map((val,index)=>(
            <li key={index}>
                {val}
            </li>
        ))
        }
      </ul>
    </>
  )
}

export default Component5
