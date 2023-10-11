import React from 'react';
import Button from './Button';

export default {
    title: "Button",
    component: Button
}


const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    variant: 'primary',
    children: 'Primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
    variant: 'secondary',
    children: 'Secondary'
}

export const Success = Template.bind({})
Success.args = {
    variant: 'success',
    children: 'Success'
}

export const Danger = Template.bind({})
Danger.args = {
    variant: 'danger',
    children: 'Danger'
}