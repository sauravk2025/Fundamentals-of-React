type setUnknownobjarray = {
    item?:{id:number,cname:string}[]
}


function Component10({item = [{id:1, cname:"Jose Mourinho"}]}:setUnknownobjarray) {
  return (
    <>
      <ul>
        {item.map((val,index)=>{
            return(
                <li key={index}>{val.id}{val.cname}</li>
            )
        })}
      </ul>
    </>
  )
}

export default Component10
