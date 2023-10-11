import React from 'react';
import Card from './Card';

export default {
    title: "Card",
    component: Card,

}

const Template = args => <Card {...args} />

export const Layout1 = Template.bind({})
Layout1.args = {
    name: 'layout1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
}


  
