import React from 'react'
import "./TextInput.css"

function TextInput(props) {
    console.log('props', props)
    const { size = 'medium', name, ...rest } = props
    return (
        <input type="text" name={name} className={`input ${size}`} {...rest} />
    )
}
export default TextInput;
