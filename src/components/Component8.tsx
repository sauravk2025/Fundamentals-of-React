type setValues = {
    male?:string,
    height?:number,
    weight:number
}

function Component8({male ="yes",height = 120,weight}:setValues) {
  return (
    <>
      <h3>Male:{male}</h3>
      <h3>Height:{height}</h3>
      <h3>Weight:{weight}</h3>
    </>
  )
}

export default Component8
