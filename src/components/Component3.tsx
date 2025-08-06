
type person_lname = {
    plname:string;
}



function Component3({plname}:person_lname) {
  return (
    <div>
      <h1>{plname}</h1>
    </div>
  )
}

export default Component3
