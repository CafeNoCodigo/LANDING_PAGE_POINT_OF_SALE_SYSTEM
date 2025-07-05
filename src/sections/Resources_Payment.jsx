import React from 'react'

const Resources_Payment = () => {
  return (
    <section className=''>
        <div className='md:flex'>
            <div className='w-1/3'>
                <div className='md:mt-200 mt-20'></div>
            </div>
            <div className='bg-amber-100 w-full flex items-center rounded-t-full'>
                <div className='grid text-right text-shadow md:pl-[50%] md:mt-50 mt-30 ml-5 mr-5'>
                    <span className='resources-payment-span'>Metodos de</span>
                    <span className='resources-payment-span'>Pagamentos Locais</span>
                    <span className='resources-payment-span'>Implementados</span>
                    <div className='mt-10 grid bg-red-400'>
                        <span className='resources-payment-span'>E-mola</span>
                        <span className='resources-payment-span'>M-Pesa</span>
                        <span className='resources-payment-span'>VISA</span>
                    </div>
                </div>
                
            </div>
        </div>
        
    </section>
  )
}

export default Resources_Payment