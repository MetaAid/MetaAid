import React, {useState } from 'react';

function Faq() {
  const [expand1,setexpand1] = useState(false)
  const [expand2,setexpand2] = useState(false)
  const [expand3,setexpand3] = useState(false)
  const [expand4,setexpand4] = useState(false)
  const [expand5,setexpand5] = useState(false)
  
  return (
    <>
      <div className='md:mx-20 pt-24'>
        <h1 className='font-sora font-bold text-4xl sm:text-5xl md:text-6xl text-white text-center'>FAQ</h1>
        <div className='text-white mt-16'>

          <div className='mx-10 my-4'>
            <input type="checkbox" name="expand-1" id="expand-1" className='hidden peer' onClick={()=>{
              if(expand1 === true){
                setexpand1(false)
              }else{
                setexpand1(true)
              }
            }} />
            <label htmlFor="expand-1">
              <div className='flex justify-between items-center text-xl'>
                <h1>Where We Work?</h1>               
                <i className={`fas fa-chevron-down transition ${expand1===true?'rotate-180':''} ease-in-out delay-100 duration-500`}></i>
              </div>
            </label>
            <p className='max-h-0 overflow-hidden peer-checked:max-h-96 transition-all ease-in-out duration-500'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a sagittis justo, eget sodales leo. Ut justo tortor, egestas vitae sollicitudin eget, consequat eget nulla. Cras euismod mi ac nulla ornare varius. Sed tempor, sapien at dictum egestas, ligula arcu molestie est, at cursus augue mauris quis nisi. Duis tempor quam orci, nec sodales ex ultricies eget. Etiam consequat mattis erat, sed dapibus tellus cursus convallis. Ut porta pharetra magna non feugiat. Nulla eu orci nec nibh ultricies scelerisque.
            </p>
          </div>
          <hr className='text-white'></hr>
          <div className='mx-10 my-4'>
            <input type="checkbox" name="expand-2" id="expand-2" className='hidden peer' onClick={()=>{
              if(expand2 === true){
                setexpand2(false)
              }else{
                setexpand2(true)
              }
            }}/>
            <label htmlFor="expand-2">
              <div className='flex justify-between items-center text-xl'>
                <h1>Some Random Question 1</h1>
                <i className={`fas fa-chevron-down transition ${expand2===true?'rotate-180':''} ease-in-out delay-100 duration-500`}></i>
              </div>
            </label>
            <p className='max-h-0 overflow-hidden peer-checked:max-h-96 transition-all ease-in-out duration-1000'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a sagittis justo, eget sodales leo. Ut justo tortor, egestas vitae sollicitudin eget, consequat eget nulla. Cras euismod mi ac nulla ornare varius. Sed tempor, sapien at dictum egestas, ligula arcu molestie est, at cursus augue mauris quis nisi. Duis tempor quam orci, nec sodales ex ultricies eget. Etiam consequat mattis erat, sed dapibus tellus cursus convallis. Ut porta pharetra magna non feugiat. Nulla eu orci nec nibh ultricies scelerisque.
            </p>
          </div>
          <hr></hr>
          <div className='mx-10 my-4'>
            <input type="checkbox" name="expand-3" id="expand-3" className='hidden peer' onClick={()=>{
              if(expand3 === true){
                setexpand3(false)
              }else{
                setexpand3(true)
              }
            }}/>
            <label htmlFor="expand-3">
              <div className='flex justify-between items-center text-xl'>
                <h1>Some Random Question 2</h1>
                <i className={`fas fa-chevron-down transition ${expand3===true?'rotate-180':''} ease-in-out delay-100 duration-500`}></i>
              </div>
            </label>
            <p className='max-h-0 overflow-hidden peer-checked:max-h-96 transition-all ease-in-out duration-1000'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a sagittis justo, eget sodales leo. Ut justo tortor, egestas vitae sollicitudin eget, consequat eget nulla. Cras euismod mi ac nulla ornare varius. Sed tempor, sapien at dictum egestas, ligula arcu molestie est, at cursus augue mauris quis nisi. Duis tempor quam orci, nec sodales ex ultricies eget. Etiam consequat mattis erat, sed dapibus tellus cursus convallis. Ut porta pharetra magna non feugiat. Nulla eu orci nec nibh ultricies scelerisque.
            </p>
          </div>
          <hr></hr>
          <div className='mx-10 my-4'>
            <input type="checkbox" name="expand-4" id="expand-4" className='hidden peer' onClick={()=>{
              if(expand4 === true){
                setexpand4(false)
              }else{
                setexpand4(true)
              }
            }}/>
            <label htmlFor="expand-4">
              <div className='flex justify-between items-center text-xl'>
                <h1>Some Random Question 3</h1>
                <i className={`fas fa-chevron-down transition ${expand4===true?'rotate-180':''} ease-in-out delay-100 duration-500`}></i>
              </div>
            </label>
            <p className='max-h-0 overflow-hidden peer-checked:max-h-96 transition-all ease-in-out duration-1000'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a sagittis justo, eget sodales leo. Ut justo tortor, egestas vitae sollicitudin eget, consequat eget nulla. Cras euismod mi ac nulla ornare varius. Sed tempor, sapien at dictum egestas, ligula arcu molestie est, at cursus augue mauris quis nisi. Duis tempor quam orci, nec sodales ex ultricies eget. Etiam consequat mattis erat, sed dapibus tellus cursus convallis. Ut porta pharetra magna non feugiat. Nulla eu orci nec nibh ultricies scelerisque.
            </p>
          </div>
          <hr></hr>
          <div className='mx-10 my-4'>
            <input type="checkbox" name="expand-5" id="expand-5" className='hidden peer' onClick={()=>{
              if(expand5 === true){
                setexpand5(false)
              }else{
                setexpand5(true)
              }
            }}/>
            <label htmlFor="expand-5">
              <div className='flex justify-between items-center text-xl'>
                <h1>Some Random Question 4</h1>
                <i className={`fas fa-chevron-down transition ${expand5===true?'rotate-180':''} ease-in-out delay-100 duration-500`}></i>
              </div>
            </label>
            <p className='max-h-0 overflow-hidden peer-checked:max-h-96 transition-all ease-in-out duration-1000'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a sagittis justo, eget sodales leo. Ut justo tortor, egestas vitae sollicitudin eget, consequat eget nulla. Cras euismod mi ac nulla ornare varius. Sed tempor, sapien at dictum egestas, ligula arcu molestie est, at cursus augue mauris quis nisi. Duis tempor quam orci, nec sodales ex ultricies eget. Etiam consequat mattis erat, sed dapibus tellus cursus convallis. Ut porta pharetra magna non feugiat. Nulla eu orci nec nibh ultricies scelerisque.
            </p>
          </div>
        </div>
        <div className='p-24 bg-slate-900'>

        </div>
      </div>
    </>
  );
}

export default Faq;
