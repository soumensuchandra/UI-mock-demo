import React from 'react';
import Headline from './Headline';

export default {
    title: "Headline",
    component: Headline
}

export const h1 = () => <p className="h1">H1 heading</p>
export const h2 = () => <p className="h2">H2 heading</p>
export const h3 = () => <p className="h3">H3 heading</p>

