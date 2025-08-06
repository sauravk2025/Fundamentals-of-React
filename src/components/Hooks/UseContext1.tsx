import { createContext } from "react"
import UseContext2 from "./UseContext2"


export const setContext = createContext<string>("")

function UseContext1() {
  return (
    <>
    <h1>UseContext1</h1>
        <setContext.Provider value="saurav">
            <UseContext2/>
        </setContext.Provider>
    </>
  )
}

export default UseContext1
