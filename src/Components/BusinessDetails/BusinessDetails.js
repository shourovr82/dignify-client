import React, { useState } from 'react';

const BusinessDetails = ({ setOpenTab, handleSubmit, register }) => {

  const handleBusinessDetails = (data) => {
    if (data) {
      setOpenTab(3)
    }
  }



  return (
    <div>
      <form
        onSubmit={handleSubmit(handleBusinessDetails)}
        className='flex flex-col gap-3 w-4/5 mx-auto'>

        {/* Applicant Business Name  */}
        <div className='flex justify-center gap-3'>
          {/* Business Name */}

          <div className='w-full '>
            <label htmlFor="businessname" className='text-white font-thin'>Business Name</label>

            <input {...register("businessname")} required type="text" placeholder="Type Your Business Name" className="w-full input input-bordered border-[#00defc59] focus:border-transparent rounded-lg input-primary  bg-[#0072721a] focus:text-white text-slate-300" />
          </div>

          {/* Gst Number */}
          <div className='w-full '>
            <label htmlFor="gstnumber" className='text-white font-thin'>GST NumberName</label>
            <input {...register("gstnumber")} required type="number"
              placeholder="Type Your GST Number" className="w-full input input-bordered border-[#00defc59] focus:border-transparent rounded-lg input-primary  bg-[#0072721a] focus:text-white text-slate-300" />
          </div>
        </div>



        {/* Email and Phone Number */}
        <div className='flex justify-center gap-3'>
          {/* Email */}
          <div className='w-full '>
            <label htmlFor="businessadress" className='text-white font-thin'>Your Business Adress</label>
            <input required {...register("businessadress")} type="text" placeholder="Type Your Business Adress" className="w-full input input-bordered border-[#00defc59] focus:border-transparent rounded-lg input-primary  bg-[#0072721a] focus:text-white text-slate-300" />
          </div>
          {/* Phone Number */}
          <div className='w-full '>
            <label htmlFor="companyphone" className='text-white font-thin'>Your Phone Business Phone Number</label>
            <input required {...register("companyphone")} type="number" placeholder="Your Business Phone Number" className="w-full input input-bordered border-[#00defc59] focus:border-transparent rounded-lg input-primary  bg-[#0072721a] focus:text-white text-slate-300" />
          </div>
        </div>


        {/* next or back */}

        <div className='flex pt-10 justify-center gap-3 px-2 mx-auto  w-full '>
          <p onClick={() => {
            setOpenTab(1);
          }} className="btn border-0 focus:border-transparent rounded-lg w-1/2 bg-gradient-to-r from-cyan-500 to-blue-900  focus:text-white text-slate-300">Back</p>
          <button type='submit' className="btn border-0 focus:border-transparent rounded-lg  w-1/2   bg-gradient-to-l from-cyan-500 to-blue-900  focus:text-white text-slate-300">Next</button>
        </div>
      </form>


    </div>
  );
};

export default BusinessDetails;