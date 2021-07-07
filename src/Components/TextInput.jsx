import React from 'react'

export default function TextInput(props) {
    const {count , inc , reset , inputRef} = props.useCounter();
    function myReset(){
        reset();
        inputRef.current.style.background = "black"
    }
    return (
        <div>
            <p>{count}</p>
            <input type="text" name="" id="" onChange={inc} ref={inputRef} />
            <button onClick={myReset}>RESET</button>
        </div>
    )
}
