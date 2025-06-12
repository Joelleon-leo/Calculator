import React, { useState } from 'react'

const Calculator = () => {

const [Input,setInput]=useState('');

function handelInput(e){
    setInput(Input+e);
}

function deleteAll(){
  setInput('');
}

function evaluate(){
    setInput(eval(Input))
}

function deleteValue(){
    setInput(Input.slice(0,-1))
}

 

  return (
    <div className='flex flex-col gap-2'>
      <h1 className='my-8 text-3xl text-center'>CALCULATOR</h1>
      <div  className='flex flex-col gap-2 border-2 border-amber-300 bg-neutral-900 rounded-3xl p-3'>
      <input value={Input} className='  border-2 border-amber-300 text-3xl bg-neutral-800 rounded-3xl text-white text-right w-full p-3 h-[70px]' type='text'/>
      <div className='grid grid-cols-4 space-x-2 space-y-3'>
        <div   onClick={deleteAll} className='text-white text-xl cursor-pointer   bg-red-600 text-xlcenter rounded-2xl px-5 py-3'>AC</div>
        <div  onClick={deleteValue} className='text-white  text-xl cursor-pointer   bg-red-600 text-center rounded-2xl px-5 py-3'>X</div>
        <div  onClick={()=>handelInput('00')} className='text-white text-xl cursor-pointer   bg-red-600 text-center rounded-2xl px-5 py-3'>00</div>
        <div  onClick={()=>handelInput('/')} className='text-white text-xl cursor-pointer   bg-red-600 text-center rounded-2xl px-5 py-3'>/</div>
        <div  onClick={()=>handelInput('7')} className='text-white text-xl cursor-pointer   bg-neutral-800 text-center rounded-2xl px-5 py-3'>7</div>
        <div  onClick={()=>handelInput('8')} className='text-white text-xl cursor-pointer   bg-neutral-800 text-center rounded-2xl px-5 py-3'>8</div>
        <div  onClick={()=>handelInput('9')} className='text-white text-xl cursor-pointer   bg-neutral-800 text-center rounded-2xl px-5 py-3'>9</div>
        <div  onClick={()=>handelInput('*')} className='text-white text-xl cursor-pointer   bg-red-600 text-center rounded-2xl px-5 py-3'>*</div>
        <div  onClick={()=>handelInput('4')} className='text-white text-xl cursor-pointer  bg-neutral-800 text-center rounded-2xl px-5 py-3'>4</div>
        <div  onClick={()=>handelInput('5')} className='text-white text-xl cursor-pointer   bg-neutral-800 text-center rounded-2xl px-5 py-3'>5</div>
        <div  onClick={()=>handelInput('6')} className='text-white text-xl cursor-pointer   bg-neutral-800 text-center rounded-2xl px-5 py-3'>6</div>
        <div  onClick={()=>handelInput('-')} className='text-white text-xl cursor-pointer   bg-red-600 text-center rounded-2xl px-5 py-3'>-</div>
        <div  onClick={()=>handelInput('1')} className='text-white text-xl cursor-pointer   bg-neutral-800 text-center rounded-2xl px-5 py-3'>1</div>
        <div  onClick={()=>handelInput('2')} className='text-white text-xl cursor-pointer   bg-neutral-800 text-center rounded-2xl px-5 py-3'>2</div>
        <div  onClick={()=>handelInput('3')} className='text-white text-xl cursor-pointer   bg-neutral-800 text-center rounded-2xl px-5 py-3'>3</div>
        <div  onClick={()=>handelInput('+')} className='text-white text-xl cursor-pointer   bg-red-600 text-center rounded-2xl px-5 py-3'>+</div>
        <div  onClick={()=>handelInput('%')} className='text-white text-xl cursor-pointer   bg-neutral-800 text-center rounded-2xl px-5 py-3'>%</div>
        <div  onClick={()=>handelInput('0')} className='text-white text-xl cursor-pointer   bg-neutral-800 text-center rounded-2xl px-5 py-3'>0</div>
        <div  onClick={()=>handelInput('.')} className='text-white text-xl cursor-pointer   bg-neutral-800 text-center rounded-2xl px-5 py-3'>.</div>
        <div  onClick={evaluate} className='text-white text-xl cursor-pointer   bg-red-600 text-center rounded-2xl px-4 py-2'>=</div>
      </div>
      </div>

    </div>
  )
}

export default Calculator