import React,{useState,useRef} from 'react'
import TextInput from './TextInput';

export default function Yinon() {

    function CountState(){
    const [count,setCount] = useState(0);

    function upCount(){
        setCount(count+1)
    }

    function resetNum(){
        setCount(0)
    }
    return {count , upCount , resetNum}
    }
    
    
    return (
        <div>

            <TextInput CountState={CountState}/>
            
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
