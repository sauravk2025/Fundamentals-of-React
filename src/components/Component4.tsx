type array_numberlist = {
    arrayList:number[];
}

function Component4({arrayList}:array_numberlist) {
  return (
    <>
        <ul>
            {arrayList.map((val,index)=>(
            <li key={index}>{val}</li>))
            }
        </ul>
    </>
  )
}

export default Component4
