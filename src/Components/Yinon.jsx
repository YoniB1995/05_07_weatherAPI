import React,{useState,useRef,useReducer} from 'react'
import { useEffect } from 'react';
import TextInput from './TextInput';

// const state = 0;
// const reducer=(state , action)=>{
//     switch(action){
//         case "up":
//             return state="UP";
//         case "down":
//             return state="DOWN";
//         case "reset":
//             return state="RESET";
//         default:
//             return state;
//     }
// }

// const state = 0;
// const reducer =(action,state)=>{
//     switch(action){
//         case "up":
//             return state =state+1;
//         case "down":
//             return state = state-1;
//         case "reset":
//             return state=0;
//         default:
//             return state;
//     }
// }

export default function Yinon() {

    // const [count,dispatch] = useReducer(reducer ,state)
    const buttonColor = useRef();
    const inputRef = useRef();



    useEffect(()=>{
//  inputRef.current.focus();

    },[])
    const Handler=(e)=>{
        inputRef.current.focus();
    }
    function getInput(){
      buttonColor.current.innerHTML = "<div>Hello World</div>"
inputRef.current.value = "yitzhak"
    }
    // const [count,dispatch] = useReducer(reducer,state)
    
    
    
    return (
        <div>
            <div ref={buttonColor} >This is paragraph</div>
            <input type="text"  ref={inputRef} />
            <button onClick={getInput}>useRef</button>
            {/* <p>{count}</p>
            <button onClick={()=>dispatch("up")}>UP</button>
            <button onClick={()=>dispatch("down")}>DOWN</button>
            <button onClick={()=>dispatch("reset")}>RESET</button>
            <TextInput CountState={CountState}/> */}
            
        </div>
    )
}




// function useCounter(){

    //     const [count,setCount] = useState(0);
    //     const inputRef = useRef();
    //     const inc = () => {
    //         setCount(count+1)
    //     }

    //     const reset = () =>{
    //         setCount(0)
    //     }


    //     return{count , inc , reset , inputRef}
    // }
