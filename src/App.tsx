import './App.css';

import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import Component4 from './components/Component4';
import Component5 from './components/Component5';
import Component6 from './components/Component6';
import Component7 from './components/Component7';
import Component8 from './components/Component8';
import Component9 from './components/Component9';
import Component10 from './components/Component10';

import ConditionalRendering from './components/ConditionalRendering';

import ReactEvents from './components/ReactEvents';

import AddCss from './components/AddCss';

import { Route,Routes } from 'react-router-dom';

import AddRoute from './components/AddRoute';
import NewRoute from './components/NewRoute';

import AddHooks from './components/AddHooks';

import UseState1 from './components/Hooks/UseState1';
import UseState2 from './components/Hooks/UseState2';
import UseState3 from './components/Hooks/UseState3';
import UseState4 from './components/Hooks/UseState4';
import UseState5 from './components/Hooks/UseState5';

import UseEffect1 from './components/Hooks/UseEffect1';
import UseEffect2 from './components/Hooks/UseEffect2';
import UseEffect3 from './components/Hooks/UseEffect3';
import UseEffect4 from './components/Hooks/useEffect4';

import UseRef1 from './components/Hooks/UseRef1';
import UseRef2 from './components/Hooks/UseRef2';
import UseRef3 from './components/Hooks/UseRef3';

import UseContext1 from './components/Hooks/UseContext1';


function App() {

  let fname:string = "Saurav";
  let arrNumber:number[] = [1,2,3,4,5];
  let objCar = {name:"saurav",age:22}

  let arrObj = [{id:1,pname:"Cristiano Ronaldo"},
                {id:2,pname:"Leonal Messsi"},
                {id:3,pname:"Neymar Jr"}]

  let conditon = false;

  return (
  <>

  <Routes>
    <Route path='/' element={
      <>
        <Component1/>
        <h1>Hello App Component</h1>  
        <Component2 pfname = {fname}/> 
        <Component3 plname = {"Krishnan"}/> 
        <Component4 arrayList = {arrNumber} />
        <Component5 new_Array = {["saurav","vaibhav","xyz"]}/>
        <Component6 newobj = {objCar}/>
        <Component7 setobj = {{carName:"Nissan GTR",model:2021,brand:"Nissan"}}/>
        <Component8 height = {100} weight = {100}/> {/*if i did not pass value it will take intial value for male */}
        <Component9 item = {arrObj} category = {"football"}/>
        <Component10/>
        <Component10 item = {[{id:2,cname:"Pep Guardiola"}]} />
        {conditon ? <ConditionalRendering value={true} text={"This is conditional rendering by ternary operator in APP.tsx"}/     >:<h1>Failed Rendering in App.tsx</h1>}
        <ReactEvents />
        <AddCss />
        <AddRoute/>
        <AddHooks/>
      </>
    }>
    </Route>

    <Route path='/route' element = { <NewRoute/> }></Route>


    <Route path='/hooks' element = {
      <>
        <UseState1/>
        <UseState2/>
        <UseState3/>
        <UseState4/>
        <br/><br/>
        <UseState5/>
        <UseEffect1/>
        <UseEffect2/>
        <UseEffect3/>
        <UseEffect4 />
        <UseRef1/>
        <br/>
        <UseRef2/>
        <br/>
        <UseRef3/>
        <br/>
        <UseContext1/>
      

      </>
      }>
     </Route>
    
    

    </Routes>
      
    </>
  )
}

export default App
