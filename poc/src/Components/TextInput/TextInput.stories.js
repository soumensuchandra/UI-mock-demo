import React from 'react';
import TextInput from './TextInput';

export default {
    title: "TextInput",
    component: TextInput
}

export const Small = () => <input size='small' placeholder='Small size' />
export const Medium = () => <input size='medium' placeholder='Medium size' />
export const Large = () => <input size='large' placeholder='Large size' />