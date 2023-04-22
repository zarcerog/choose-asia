import React from "react";

const Contacte = () => {
    return (
      <div name='contacte' className='w-full h-screen'>
        <div className='w-full h-[340px] bg-[url(assets/contacte.jpg)] bg-no-repeat bg-top bg-cover bg-[#CB6928]'></div>
        <section className='flex items-center flex-col justify-center w-full h-[340px] px-[30px] md:px-[160px] py-[1rem] md:py-[1.5rem] gap-8'>
          <div className="flex items-center justify-center flex-col gap-2">
            <div>
              <a href="mailto:gloria@chooseasia.info" className='underline text-gray-500 title'>gloria@chooseasia.info</a>
            </div>
            <div className="flex gap-2 md:flex-row flex-col">
              <div className="text-gray-500">(whatsapp +34 620 129 522)</div>
              <div className="text-gray-500">(telegram +855 90 975 308)</div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col gap-2">
            <div>
              <a href="mailto:chok@chooseasia.info" className="underline text-gray-500 title">chok@chooseasia.info</a>
            </div>
            <div className="text-gray-500">
              (whatsapp / telegram +855 12 212 353)
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Contacte;