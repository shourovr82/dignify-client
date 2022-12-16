import React, { useState } from 'react';
import './Home.css'
import { useForm } from 'react-hook-form';
import PersonalInfo from '../personalInfo/PersonalInfo';
import BusinessDetails from '../BusinessDetails/BusinessDetails';
import LoanDetails from '../LoanDetails/LoanDetails';
import Success from '../Success/Success';


const Home = () => {
  const [openTab, setOpenTab] = useState(1)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();


  return (
    <div className='home-bg flex justify-center items-center'>
      <>
        <div className='md:w-4/5 mx-auto p-10'>
          <div className="flex px-5 table-bg  flex-wrap">
            <div className="w-full p-10">
              <ul
                className="flex   mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                role="tablist"
              >
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 1
                        ? "text-white border border-[#079cc259]"
                        : "hidden")
                    }
                    onClick={() => {
                      setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    Personal Details
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 2
                        ? "text-white bg-cyan-700"
                        : "hidden")
                    }
                    onClick={() => {
                      setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    Business Details
                  </a>
                </li>

                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 3
                        ? "text-white bg-cyan-700"
                        : "hidden")
                    }
                    onClick={() => {
                      setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                  >
                    Loan Application Details
                  </a>
                </li>

                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                      (openTab === 4
                        ? "text-white bg-cyan-700"
                        : "hidden")
                    }
                    onClick={() => {
                      setOpenTab(4);
                    }}
                    data-toggle="tab"
                    href="#link4"
                    role="tablist"
                  >
                    Success
                  </a>
                </li>




              </ul>


              <div className="relative flex  flex-col min-w-0 break-words  w-full mb-6 ">
                <div className="px-4 py-5 flex-auto">
                  <div className="tab-content tab-space">

                    {/* personal Information */}

                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">

                      <PersonalInfo
                        register={register}
                        handleSubmit={handleSubmit}
                        setOpenTab={setOpenTab}

                      ></PersonalInfo>


                    </div>

                    {/*  business Details */}
                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">



                      <BusinessDetails
                        register={register}
                        handleSubmit={handleSubmit}
                        setOpenTab={setOpenTab}

                      >

                      </BusinessDetails>

                      {/*  Loan Details */}

                    </div>
                    <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                      <LoanDetails
                        register={register}
                        handleSubmit={handleSubmit}
                        setOpenTab={setOpenTab}
                        reset={reset}
                      >

                      </LoanDetails>


                    </div>
                    {/*  success page */}
                    <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                      < Success></Success>

                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </>



    </div >
  );
};

export default Home;