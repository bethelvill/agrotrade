import React from "react";
import {Poppins} from 'next/font/google'
import { FaPhone } from "react-icons/fa";

const poppinsRegular = Poppins({
    subsets:['latin'],
    weight:'600'
});


export function TallyCounter() {
   const [tally, setTally] = React.useState(0);

   React.useEffect(() => {
    setTimeout(() => alert('Your information is fully loaded'),2000)
   },[tally])


   return (
      <div className={`${poppinsRegular}w-full flex flex-col justify-center items-center py-20`}>
<FaPhone className="text-7`x1 text-teal-500"/>

         <h1 className="text-3x1">Your current count is  {tally}</h1>

         <div className="flex flex-row gap-2">
            <button 
            onClick={() => setTally(tally - 1)}
            className="h-[48px] px-2 flex justify-center items-center bg-black text-white">
               -
            </button>
            <button
            onClick={() => setTally(tally + 1)}
             className="h-[48px] px-2 flex justify-center items-center bg-black text-white">
               +
            </button>
        
         </div>
      </div>
   );
}
