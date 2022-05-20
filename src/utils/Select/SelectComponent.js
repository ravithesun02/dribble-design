import React, { useState } from 'react';
import './Select.css';

const Select = (props) => {
  const data = props.data.options;
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleSelection=(e,index)=>{
    console.log(e,index);
    e.preventDefault();
    setSelectedIndex(index);
  }


  return(
    <div className='container'>
    <div className='row justify-content-around mt-1'>
      {
        data.map((option,index)=>{
          return(
          <div key={index} onClick={(e)=> handleSelection(e,index)} className={'col-5 '+(selectedIndex === index ? ' box-border-active' : 'box-border ')}>
            <p className='mb-0 mt-1 heading'> {option.heading} </p>
            <p className='subheading'> {option.subheading} </p>
          </div>
        )
        })
      }
    </div>
    </div>
  )
}

export default Select;

