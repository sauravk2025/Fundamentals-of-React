type anyObj ={
    name:string,
    age:number;
}

type typeofobj = {
    newobj:anyObj
}
function Component6({newobj}:typeofobj) {
  return (
    <>
      <h2>{newobj.name}</h2>
      <h2>{newobj.age}</h2>
    </>
  )
}

export default Component6
