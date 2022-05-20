import React from 'react';
import './Header.css';

const Header = (props) => {
    const data = props.data;
    return (
        <>
            <h2 className='heading'> {data.heading} </h2>
            <p className='subHeading'> {data.subheading} </p>
        </>
    )
}

export default Header;