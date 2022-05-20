import React from 'react';

const UrlInput = (props) => {
    const data = props.data;
    return (
        <div className='row mt-1'>
            <label style={{textAlign:'left',fontWeight:'bold'}} for="url" > {data.labelText} </label>
            <div className='col-5 p-0'>
            <input type="text" id="url" disabled placeholder={data.disabledPlaceholder} className='form-control mt-1' />
            </div>
            <div className='col-7 m-0 p-0'>
            <input type="text" id={data.textId} placeholder= {data.textPlaceholder} className='form-control mt-1' />
            </div>
        </div>
    )
}

export default UrlInput;