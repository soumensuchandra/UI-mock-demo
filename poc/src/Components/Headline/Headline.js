import React from 'react'
import "./Headline.css"

function Headline(props) {
    const { variant = 'h1', children, ...rest } = props
    return (
        <p className={variant}>{children}</p>
    )
}
export default Headline;