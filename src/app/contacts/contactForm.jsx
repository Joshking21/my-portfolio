export default function ContactForm(){
    return(
        <form className="flex flex-col  w-full  items-center mb-[2rem]">
               {contactFormDetails.map((items,index) =>(
                <div key={index} className=" w-[40%]">
                    {items.placeholder==="YOUR MESSAGE"?<input type={items.type} placeholder={items.placeholder} 
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
        placeholder:"ENTER YOUR NAME"
    },
    {
       type:"email",
        placeholder:"ENTER YOUR EMAIL"
    },
    {
        type:"text",
        placeholder:"PHONE NUMBER"
    },
    {
       type:"text",
        placeholder:"YOUR MESSAGE"
    }
]
