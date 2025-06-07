'use client'
import { useState } from 'react';
export default function ContactForm(){
//      const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//      setFormData(prev => ({
//       ...prev,
//       [name]: value,  // update only the changed field
//     }));
//   };
  const handleSubmit = (event) => {
    // event.preventDefault(); 
    alert('Message Sent!');  }
//    setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       message: ''
//     }); 
     
  



    return(
        <form onSubmit={handleSubmit}  className="flex flex-col  w-full  items-center mb-[2rem]">
               {contactFormDetails.map((items,index) =>(
                <div key={index} className=" lg:w-[40%]  w-full">
                    {items.placeholder==="YOUR MESSAGE"?<input  type={items.type} placeholder={items.placeholder} 
                    className="  pb-[7rem] w-full  border-l-solid border-l-[2px] border-b-solid border-b-[2px] focus:outline-none mb-[2rem]" ></input>:<input 
                     type={items.type} placeholder={items.placeholder} className=" mb-[1.5rem] focus:outline-none pb-[0.7rem] placeholder:text-[0.8rem] placeholder:font-semibold w-full   border-l-solid border-l-[2px] border-b-solid border-b-[2px]"></input>}
                </div>
               ))}
               <button type="submit"className="border-l-solid border-l-[1px] border-r-solid border-r-[1px] p-[2px] pl-[2rem] pr-[2rem] font-bold text-[0.7rem] hover:opacity-70" >SUBMIT</button>
        </form>

    )
}

const contactFormDetails = [
    {
        type:"text",
        placeholder:"ENTER YOUR NAME",
        formData:"formData.name",
    },
    {
       type:"email",
        placeholder:"ENTER YOUR EMAIL",
        formData:"formData.email",
    },
    {
        type:"text",
        placeholder:"PHONE NUMBER",
        formData:"formData.phone",
    },
    {
       type:"text",
        placeholder:"YOUR MESSAGE",
        formData:"formData.message",
    }
]
