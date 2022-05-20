import './App.css';
import TimeLine from './utils/TimeLine/TimeLineComponent';
import Header from './utils/Headers/HeaderComponent';
import TextInput from './utils/TextInput/TextInputComponent';
import UrlInput from './utils/UrlInput/UrlInputComponent';
import Select from './utils/Select/SelectComponent';
import { useState } from 'react';
import data from './data/data.js';
import logo from './assets/logo.png';
import tick from './assets/tick.png';

function App() {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [uiData, setUiData]= useState(data[activePageIndex]);
  const size = data.length;
  const handleClick = (e)=>{
    e.preventDefault();
    if(activePageIndex < size-1){
    setUiData(data[activePageIndex+1]);
    setActivePageIndex(activePageIndex+1);
    }
    

  }
  return (
   <form className='form-main'>
     <div className='row'>
        <div className='d-flex flex-row justify-content-center'>
          <img src={logo} alt="Logo" style={{width:'40px',height:'40px'}} />
          <h3>Eden</h3>
        </div>
        <TimeLine size={size} activeIndex={activePageIndex} />
     </div>
     <div className='row p-2'> 
     <div className='col-1'></div>
     <div className='col-10'>
       {
         activePageIndex === size -1 &&
         <img src={tick} alt="tick" style={{width:'50px',height:'50px',marginTop:'2rem',marginBottom:'2rem'}} />
       }
     {
       uiData.data.map((pageData,index)=>{
         if(pageData.type === "Header") 
              return <Header data = {pageData} />
          else if(pageData.type === "TextInput")
              return <TextInput data={pageData} />
          else if(pageData.type === "UrlInput")
              return <UrlInput data={pageData} />
          else if(pageData.type === "Select")
              return <Select data={pageData} />
       })
     }
        <div className='row mt-3 px-1'>
          <button onClick={(e)=> handleClick(e)} class="btn mt-2 ml-1 btn-md btn-block button-style"> {activePageIndex === size -1 ? "Launch Eden " : "Create Workspace"} </button>
        </div>
     </div>
     </div>

   </form>
  );
}

export default App;
