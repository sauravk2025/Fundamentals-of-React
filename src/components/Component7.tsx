type anyCarobj={
    carName:string,
    model:number,
    brand:string
}

type typeofCarObj = {
    setobj:anyCarobj;
}

function Component7({setobj}:typeofCarObj) {
  return (
    <>
      <h2>{setobj.carName}</h2>
      <h2>{setobj.model}</h2>
      <h2>{setobj.brand}</h2>
    </>
  )
}

export default Component7
