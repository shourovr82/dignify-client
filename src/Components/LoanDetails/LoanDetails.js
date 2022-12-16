import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const LoanDetails = ({ handleSubmit, register, setOpenTab, reset: hookReset }) => {



  const handleSubmitAllDetails = (data, e) => {
    // console.log(e);
    if (data) {
      fetch('http://localhost:8080/applyloan', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(result => {
          toast.success('Your Loan Application Successfully Sent.', {
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#713200',
            },
            iconTheme: {
              primary: '#713200',
              secondary: '#FFFAEE',
            },
          });
          hookReset()
          e.target.reset();
          setOpenTab(4)
        })

    }


  }


  return (
    <div>
      <form
        onSubmit={handleSubmit(handleSubmitAllDetails)}
        className='flex flex-col gap-3 w-4/5 mx-auto'>

        {/* Loan */}
        <div className='flex justify-center gap-3'>
          {/* Loan Amount and Interest Rate */}

          <div className='w-full '>
            <label htmlFor="loanamount" className='text-white font-thin'>Loan Amount</label>

            <input {...register("loanamount")} required type="number" placeholder="Type Your Loan Amount" className="w-full input input-bordered border-[#00defc59] focus:border-transparent rounded-lg input-primary  bg-[#0072721a] focus:text-white text-slate-300" />
          </div>

          {/* Interest Rate */}
          <div className='w-full '>
            <label htmlFor="interestrate" className='text-white font-thin'>Interest Rate</label>
            <input {...register("interestrate")} required type="number"
              placeholder="Type Your Interest Rate" className="w-full input input-bordered border-[#00defc59] focus:border-transparent rounded-lg input-primary  bg-[#0072721a] focus:text-white text-slate-300" />
          </div>
        </div>



        {/* other Details*/}
        <div className='flex justify-center gap-3'>
          {/* Loan Tenure */}
          <div className='w-full '>
            <label htmlFor="loadntenure" className='text-white font-thin'>Your Loan Tenure</label>
            <input required {...register("loadntenure")} type="text" placeholder="Type Your Loan Tenure" className="w-full input input-bordered border-[#00defc59] focus:border-transparent rounded-lg input-primary  bg-[#0072721a] focus:text-white text-slate-300" />
          </div>
          {/* Why Loan */}

        </div>
        <div className='flex justify-center gap-3'>
          {/* Loan Tenure */}
          <div className='w-full '>
            <label htmlFor="whyloan" className='text-white font-thin'>Tell us why you are applying for Loan</label>
            <textarea className="textarea  h-24 textarea-info w-full input  border-[#00defc59] focus:border-transparent rounded-lg bg-[#0072721a] focus:text-white text-slate-300" placeholder="Bio"></textarea>


          </div>

        </div>


        {/* next or back */}


        <div className='flex pt-10 justify-center gap-3 px-2 mx-auto  w-full '>
          <p onClick={() => {
            setOpenTab(2);
          }} className="btn border-0 focus:border-transparent rounded-lg w-1/2 bg-gradient-to-r from-cyan-500 to-blue-900  focus:text-white text-slate-300">Back</p>
          <button type='submit' className="btn border-0 focus:border-transparent rounded-lg  w-1/2   bg-gradient-to-l from-cyan-500 to-blue-900  focus:text-white text-slate-300">Submit</button>
        </div>



      </form>


    </div>
  );
};

export default LoanDetails;