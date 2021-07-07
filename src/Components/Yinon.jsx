import React,{useState,useRef} from 'react'
import TextInput from './TextInput';

export default function Yinon() {

    function useCounter(){

        const [count,setCount] = useState(0);
        const inputRef = useRef();
        const inc = () => {
            setCount(count+1)
        }

        const reset = () =>{
            setCount(0)
        }


        return{count , inc , reset , inputRef}
    }

    return (
        <div>
            <TextInput useCounter={useCounter}/>
            
        </div>
    )
}
