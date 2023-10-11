import React from 'react';
import Image from './Image';

export default {
    title: "Image",
    component: Image,

}

const Template = args => <Image {...args} />

export const Thumbnail = Template.bind({})
Thumbnail.args = {
    size: 'thumbnail',
}

export const Large = Template.bind({})
Large.args = {
    size: 'large',
}

  
