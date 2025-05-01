import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const SosOtpVerification = (props) => {

  const inputRefs = useRef([]);
  
  //move to next input field
  const handleChange = (index , e) => {
    const value = e.target.value;

    if(value.length > 1){
        return ;
    }

    if(value && index < inputRefs.current.length - 1){
        inputRefs.current[index+1].focus();
    }
  };
  
  //moe to previous input field
  const handleKeyDown = (index , e) => {
    
    if(e.key === 'Backspace' && index > 0 && !e.target.value){
        inputRefs.current[index-1].focus();
    }
  }
  
  return (
    <div>
        <h2 className='text-xl font-bold text-center'>To stop SOS enter the safety PIN</h2>

        <div className='flex justify-center gap-2 m-4'>
        {Array.from({ length: 4 }).map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className="border h-10 w-10 text-center text-xl font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            ref={(el) => (inputRefs.current[index] = el)}
          />
        ))}
        </div>
        <button onClick={() => {props.setSosOtpVerification(false) , props.setSosTrigger(false)}} className='w-[80%] bg-orange-400 rounded-lg flex justify-center text-xl text-white m-7'>
            Submit
        </button>
    </div>
  )
}

export default SosOtpVerification