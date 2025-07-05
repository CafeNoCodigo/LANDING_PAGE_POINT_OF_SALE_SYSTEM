import React from 'react'

const Resources_Payment = () => {
  return (
    <section id="resource-pay">
        <div className='md:flex'>
            <div className='w-1/2'>
                <div className='md:mt-200 mt-20'></div>
            </div>
            <div className='bg-amber-100 w-full flex items-center rounded-t-full'>
                
                <div className='md:rounded-4xl rounded-xl absolute md:w-235 text-right md:h-50 h-80 md:mt-95 md:ml-[-90px] ml-30 bg-[var(--bg-geral)]'>
                    <div className='p-2'>
                        <h1 className='h1 tracking-widest font-light pt-2'>M-Pesa</h1>
                        <h1 className='h1 tracking-widest font-light pt-5 pb-5'>E-Mola</h1>
                        <h1 className='h1 tracking-widest font-light'>Visa</h1>
                    </div>
                </div>
                <img className="absolute md:w-170 w-90 md:mt-50 md:ml-[-270px] ml-6" src="./images/resources-payment.png" alt="resource-payment" />
                <div className='grid text-right text-shadow md:pl-[50%] ml-5 mr-5'>
                    <span className='resources-payment-span'>Metodos de</span>
                    <span className='resources-payment-span'>Pagamentos Locais</span>
                    <span className='resources-payment-span'>Implementados</span>
                </div>
                
            </div>
        </div>
        
    </section>
  )
}

export default Resources_Payment