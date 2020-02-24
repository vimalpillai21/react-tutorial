import React from 'react'
import  './Mystyles.css'
function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>Hello Stylesheet</h1>
        </div>
    )
}

export default Stylesheet;
