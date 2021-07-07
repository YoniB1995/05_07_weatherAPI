import React ,{useRef,useState} from 'react'

export default function TextInput(props) {
    const {count , upCount , resetNum} = props.CountState();
    const inputRef = useRef();

    const changeTheme = ()=>{
        inputRef.current.style.display="none"
    }

    return (
        <div>
            <p>{count}</p>
            <input type="text" ref={inputRef} onChange={upCount}/>
            <button onClick={resetNum}>Reset</button>
            <button onClick={changeTheme}>REMOVE</button>
        </div>
    )
}
