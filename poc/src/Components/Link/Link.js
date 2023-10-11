import React from 'react'
import "./Link.css"

function Link(props) {
    const { color = 'normal', ref = 'https://www.google.com/', ...rest } = props
    return (
        <a className={`link ${color}`} {...rest} href={ref}>{color}</a>
    )
}
export default Link;