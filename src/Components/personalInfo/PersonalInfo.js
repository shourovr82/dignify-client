import React, { useState } from 'react';

const PersonalInfo = ({ register, handleSubmit, setOpenTab }) => {
  const [termCheck, setTermCheck] = useState(true);

  const handlePersonalDetails = (data, e) => {
    if (data) {
      setOpenTab(2)
    }
  }




  return (
    <div >
      <form
        onSubmit={handleSubmit(handlePersonalDetails)}
        className='flex flex-col gap-3  w-full md:w-4/5 mx-auto'>

        {/* Name */}
        <div className='md:flex justify-center gap-3'>
          {/* First Name */}

          <div className='w-full '>
            <label htmlFor="firstname" className='text-white font-thin'>First Name</label>

            <input {...register("firstName")} required type="text" placeholder="Type Your First Name" className="w-full input input-bordered border-[#00defc59] focus:border-transparent rounded-lg input-primary  bg-[#0072721a] focus:text-white text-slate-300" />
          </div>

          {/* Last Name */}
          <div className='w-full '>
            <label htmlFor="lastname" className='text-white font-thin'>Last Name</label>
            <input {...register("lastname")} required placeholder="Type Your Last Name" className="w-full input input-bordered border-[#00defc59] focus:border-transparent rounded-lg input-primary  bg-[#0072721a] focus:text-white text-slate-300" />
          </div>
        </div>



        {/* Email and Phone Number */}
        <div className='flex justify-center gap-3'>
          {/* Email */}
          <div className='w-full '>
            <label htmlFor="email" className='text-white font-thin'>Your Email</label>
            <input required {...register("email")} type="email" placeholder="Type Your Email" className="w-full input input-bordered border-[#00defc59] focus:border-transparent rounded-lg input-primary  bg-[#0072721a] focus:text-white text-slate-300" />
          </div>
          {/* Phone Number */}
          <div className='w-full '>
            <label htmlFor="phonenumber" className='text-white font-thin'>Your Phone Number</label>
            <input required {...register("phonenumber")} type="number" placeholder="Type Your Phone Number" className="w-full input input-bordered border-[#00defc59] focus:border-transparent rounded-lg input-primary  bg-[#0072721a] focus:text-white text-slate-300" />
          </div>
        </div>

        {/* Age and Location */}
        <div className='flex justify-center gap-3'>
          {/* Age*/}
          <div className='w-full '>
            <label htmlFor="age" className='text-white font-thin'>Your Age</label>
            <input required  {...register("age")} type="number" placeholder="Type Your Age" className="w-full input input-bordered border-[#00defc59] focus:border-transparent rounded-lg input-primary  bg-[#0072721a] focus:text-white text-slate-300" />
          </div>
          {/* Address */}
          <div className='w-full '>
            <label htmlFor="phonenumber" className='text-white font-thin'>Where are you from?</label>
            <input required {...register("address")} type="text" placeholder="Type Your Address" className="w-full input input-bordered border-[#00defc59] focus:border-transparent rounded-lg input-primary  bg-[#0072721a] focus:text-white text-slate-300" />
          </div>
        </div>



        {/* Birth Date */}
        <div className='flex justify-center gap-3'>
          {/* Age*/}
          <div className='w-full '>
            <label htmlFor="birthdate" className='text-white font-thin'>Your Birth Date</label>
            <input required  {...register("birthdate")} type="date" placeholder="Type Your Birth Date" className="w-full input input-bordered  border-[#00defc59] focus:border-transparent rounded-lg input-primary  bg-[#0072721a] focus:text-white text-slate-300" />
          </div>
          {/* Address */}
          <div className='w-full '>

            <label htmlFor="maritalstatus" className='text-white font-thin'> Your Marital Status</label>

            <select className="select select-info w-full    border-[#00defc59] focus:border-transparent rounded-lg   bg-[#0072721a] focus:text-cyan-600 text-slate-300 ">

              <option {...register("maritalstatus")} defaultValue>Not Prefer to say</option>
              <option>Single</option>
              <option>Married</option>
              <option>Devorced</option>
            </select>
          </div>
        </div>


        {/* privacy policy */}
        <div className='flex justify-center gap-3'>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-slate-300 font-thin">Your Personal Data Will be used to process your loan, suppport your experience throughout this website, and for other purposes described in our <span className='text-blue-400 underline-offset-4 cursor-pointer underline'>privacy policy.</span> </span>
            </label>
            <div className="form-control">
              <label className="label text-start cursor-pointer  flex justify-start gap-3">
                <input onClick={() => setTermCheck(!termCheck)} type="checkbox" className="checkbox checkbox-primary  " />
                <span className="label-text text-slate-300 font-thin ">I have read and agree to the website.</span>
              </label>
            </div>
          </div>
          <div>
          </div>
        </div>



        <div className='flex justify-center md:justify-end'>
          <button type='submit' disabled={termCheck} className={`btn disabled:text-slate-600 text-slate-300 border-0 focus:border-transparent rounded-lg  w-full bg-gradient-to-r from-cyan-500 to-blue-900 md:max-w-xs focus:text-white `} >next</button>
        </div>

      </form>






    </div >
  );
};

export default PersonalInfo;