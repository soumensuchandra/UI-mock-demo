import React from 'react'
import "./Image.css"
import avatar from './img/img_avatar.png';

function Image(props) {
    console.log('props', props)
    const { size = 'thumbnail', ...rest } = props
    return (
        <img src={avatar} className={`image ${size}`} {...rest} />
    )   
}
export default Image;
