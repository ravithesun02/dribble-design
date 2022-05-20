import React, { useState } from 'react';
import './TextInput.css';

const TextInput = (props)=> {
    const data = props.data;
    const [value, setValue] = useState('');
    return (
        <div className='row mt-1'>
            <label className='label-text' for={data.textId} > {data.displayLabel} </label>
            <input type="text" id={data.textId} placeholder={data.placeholder} className='form-control mt-1' />
        </div>
    )
}

export default TextInput;