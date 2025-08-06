import { useContext } from "react"
import { setContext } from "./UseContext1"

function UseContext4() {

  const context = useContext(setContext)
  return (
    <>
  
      <h1>UseContext4 {context}</h1>
    </>
  )
}

export default UseContext4

