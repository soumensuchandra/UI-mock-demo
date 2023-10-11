import React from 'react';
import Link from './Link';

export default {
    title: "Link",
    component: Link
}


export const Normal = () => <a href='#' className='normal'>Normal</a>
export const Visited = () => <a href='#' className='visited'>Visited</a>
export const Hover = () => <a href='#' className='hover'>Hover</a>