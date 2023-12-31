import React from 'react'
import "./Button.css"

function Button(props) {
    console.log('props', props)
    const { variant = 'primary', children, ...rest } = props
    return (
        <button className={`button ${variant}`} {...rest}>
            {children}
        </button>
    )
}
export default Button;
