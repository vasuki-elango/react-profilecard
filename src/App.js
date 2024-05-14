import './App.css'

import { Headers } from "./copmonents/Headers";
import { ChildComponents } from './copmonents/ChildComponents';
import { Student } from './copmonents/Student';
import {ArraySample} from './copmonents/ArraySample';
import { FunctionSample } from './copmonents/FunctionSample';
import { Multitupe } from './copmonents/Multitupe';
import { Sample } from './copmonents/Sample';

function App() {

  const items=[
    {id:1,name:"iem1"},
    {id:2,name:"iem2"}
  ];
  const handleClick = () => {
    alert("clicked");
  };
  return (
    <>
   
    <Headers/> 
    <Student name="vasu" age={18} mark={8.5}/>
    <Student name="sathya" age={21} mark={8.5}/>
    <Student age={20}/>
    
    <ChildComponents>
      <p>Child Element</p>
    </ChildComponents>

    <ChildComponents>
      <p>Child </p>
    </ChildComponents> 

    <ArraySample items={items}/>

    <Sample color="blue"/>
    <Multitupe value="Heloo"/>
    <Multitupe value={23}/>
    

    <FunctionSample handleClick = {handleClick}/>

    </>

  );
}

export default App;
