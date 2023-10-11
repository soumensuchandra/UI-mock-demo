import React from 'react';
import Form from './Form';

export default {
    title: "Form",
    component: Form,

}

const Template = args => <Form {...args} />

export const Login = Template.bind({})
Login.args = {
    name: 'login'
}


  
