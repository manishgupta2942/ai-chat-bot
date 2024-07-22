import { createContext, useState } from "react";
import run from "../config/gemini";
export const  Context = createContext();
const ContextProvider = (props)=>{
  const [input,setinput]= useState("");
  const[recentPrompt,setrecentPrompt]=useState("");
  const [prevPrompts,setPrevPrompts]=useState([]);
  const[showResult,setShowResult]=useState(false);
  const [loading,setloading]=useState(false);
  const [resultData,setResultData]=useState("");
  const delaypara =(index,nextword)=>{
    setTimeout(function()  {
      setResultData(prev=>prev+nextword);
      
    }, 75*index);
  }
  const onSent= async(prompt)=>{
    setResultData("");
    setloading(true);
    setShowResult(true);
    setrecentPrompt(input);
    setPrevPrompts(prev=>[...prev,input]);
   const response= await run(input);
   let responsearray= response.split("**");
   let newarray="";
   for(let i=0;i<responsearray.length;i++){
    if(i%2!==1){
      newarray+=responsearray[i];
    }
    else{
      newarray+="<b>"+responsearray[i]+"</b>" ;

    }
   }
   let newarray2=newarray.split("*").join("</br>");
   let newarray3=newarray2.split(" ");
   for(let i=0;i<newarray3.length;i++){
    let nextword=newarray3[i];
    delaypara(i,nextword+" ");

   }

 
   setloading(false);
   setinput("");


  }
  // onSent("what is sex");
  const ContextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setrecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setinput
  };
  return (
    <Context.Provider  value = {ContextValue}>
      {props.children}
    </Context.Provider>
  )
}
export default ContextProvider;

