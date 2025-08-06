type setArrObj = {

    item:{id:number, pname:string}[],
    category:string
}

function Component9({item,category}:setArrObj) {
  return (
    <>
    <ul>
        {item.map((val,index)=>(
            <li key={index}>{val.id}{val.pname}</li>
            
        ))}
    </ul>
    <h4>Category:{category}</h4>
    </>
  )
}

export default Component9
