import React, { useRef, useState, useEffect } from 'react';

const Resources_Payment = () => {
    
  const cardRef = useRef(null);
  const sectionRef = useRef(null);
  const [marginLeft, setMarginLeft] = useState('-70%');
  const [opacity, setOpacity] = useState('0');

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !cardRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      setOpacity(isVisible ? '1' : '0');
      setMarginLeft(isVisible ? '-10%' : '-70%');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  return (
    <section ref={sectionRef} id="resource-pay">
        <img 
        src="/images/bg-element-yellow.png"
        className='element-decoration rotate-55 md:ml-0 ml-[-80px]
            md:hover:rotate-255 transition-all duration-750 ease-in-out' 
        alt="Element decoration yellow" />

        <img src="/images/bg-element-blue.png" 
        alt="Element decoration blue"
        className='element-decoration rotate-245 md:ml-70 ml-60 mt-30
            md:hover:rotate-45 transition-all duration-750 ease-in-out' />
      <div className="md:flex">
        <div className="w-1/2">
          <div className="md:mt-150 mt-20"></div>
        </div>

        <div className="bg-amber-100 
                w-full 
                flex flex-col md:flex-row items-center 
                rounded-t-full 
                px-4">
          <div
            ref={cardRef}
            className="md:rounded-4xl
                md:absolute
                md:w-235 text-right
                md:h-50 md:mt-95 px-2
                md:bg-[var(--bg-geral)]
                transition-all duration-2000 ease-in-out"
            style={ window.innerWidth >= 768 ? {marginLeft: marginLeft} :  {opacity: opacity} }>
            <div className="pb-10 relative">
              <h1 className="h1 resources-payments-h1 pt-2 bg-red-400 md:bg-[var(--bg-geral)]">M-Pesa</h1>
              <h1 className="h1 resources-payments-h1 pt-5 pb-5 bg-orange-400 md:bg-[var(--bg-geral)]">E-Mola</h1>
              <h1 className="h1 resources-payments-h1 bg-blue-700 text-center md:text-right md:bg-[var(--bg-geral)]">Visa</h1>
            </div>
          </div>
          <img
            className="w-90 md:w-170
                md:z-0 
                md:mt-50 md:ml-[-270px] ml-6"
            src="./images/resources-payment.png"
            alt="resource-payment"
          />
          <div
            className="text-right
                md:text-right text-shadow 
                mt-6 md:mt-[-150px] ml-2 md:ml-[-70px] mr-2
                hidden md:block"
          >
            <span className="block resources-payment-span">Metodos de</span>
            <span className="block resources-payment-span">Pagamentos Locais</span>
            <span className="block resources-payment-span">Implementados</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources_Payment;