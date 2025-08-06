import { useState } from "react"
function UseState2() {
    
    const [count,setCount] = useState<number>(0);
    const [alphabet, setAlphabet] = useState<number>(100);

    const [arr, setArr] = useState<number[]>([1,2,3,4]);
    const [strArr, setstrArr] = useState<string[]>(["a","b","c"]);
    

    function handleArrAdd()
    {
        setArr([...arr , count]); 
        //or
        //setArr((prev)=> ([...prev, count]))
    }
    function handleArrRemove()
    {
        setArr( arr.filter((val)=>( val!=count)) ) 

    }

    function handleAddChar()
    {
        setAlphabet(alphabet+1) //alphabet value is same as alphabet (not alphabet+1)
        addNewChar();
        
    }
    function addNewChar()
    {
        console.log("value of alphabet in add is:",alphabet) //alphabet value is same as alphabet (not alphabet+1)
        setstrArr([...strArr,String.fromCharCode(alphabet)])
    }
    console.log("value of alphabet in add outside is:",alphabet); 

    function handleRemoveChar()
    {
        
        setAlphabet(alphabet-1);
        removeNewChar()
        
    }
    function removeNewChar()
    {
        console.log("value of alphabet in remove is:", alphabet);
        setstrArr( strArr.filter((val)=>( String.fromCharCode(alphabet-1)!= val)) )
    }
    return (
    <>
        <h1>{count}</h1>
        <h2>Array elements are:</h2>
        <ul>
            {arr.map((val,index)=>(
                <li key={index}>
                    {val}
                </li>
            ))}
        </ul>
        <button onClick={ ()=> setCount(count+1) }>Inc</button>
        <button onClick={ ()=> setCount(count-1) }>Dec</button>
        <button onClick={ handleArrAdd }>Add</button>
        <button onClick={ handleArrRemove }>Remove</button>

        <h1>Next Character: {String.fromCharCode(alphabet)}{alphabet}</h1>
        <h2>String array elements are:</h2>
        <ul>
            {strArr.map((val,index)=>(
                <li key={index}>
                    {val}
                </li>
            ))}
        </ul>
        <button onClick={ handleAddChar }> Add Char</button>
        <button onClick={ handleRemoveChar }>Remove Char</button> 
    </>
  )
}

export default UseState2
