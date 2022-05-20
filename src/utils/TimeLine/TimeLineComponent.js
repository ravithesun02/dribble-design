import React from 'react';
import './TimeLine.css';


const EachStep = (props) => {
    return(
        <div key={props.index} className= {"stepper-item "+ (props.active ? "active ":"")+(props.completed ? "completed ": "")} >
            <div className="step-counter"> {props.index+1} </div>
        </div>
    )
}


 const TimeLine = (props) => {
     const toltalSteps = [...Array(props.size).keys()];
    return (
        <div className="stepper-wrapper">
            {
                toltalSteps.map((step, index) => {
                    return <EachStep index={step} active={props.activeIndex === step} completed={step <= props.activeIndex} />
                })
            }
        </div>
    )
}

export default TimeLine;