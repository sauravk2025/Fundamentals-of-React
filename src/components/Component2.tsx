
type person_fname = {
  pfname:string;
}


function Component2({pfname}:person_fname) {
  return (
    <>
     <h1>{pfname}</h1> 
    </>
  )
}

export default Component2
