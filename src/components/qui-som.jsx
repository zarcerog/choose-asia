import React from 'react';
import OunChock from '../assets/oun-chock.jpg';
import Gloria from '../assets/gloria.jpg';

const QuiSom = () => {
  return (
    <div name='qui-som' className='w-full h-screen'>
      <div className='w-full h-[346px] md:h-[520px] bg-[url(assets/qui-som.jpg)] bg-no-repeat bg-center bg-cover'></div>
      <div>
        <section className='flex lg:px-[160px] px-7 py-2 lg:py-[1.5rem]'>
          <div className='lg:px-[1.25%] px-2'>
            <div className='w-full py-[14px] px-[8px]'>
              <span className='text-[#ff9900] text-3xl'>Qui som</span>
            </div>
            <div className='py-[14px] px-[8px]'>
              <p className='font-light text-lg text-[#434343] leading-relaxed'>
              Una catalana afincada al país des de 2009 i un guia local professional que parla, 
              entre d'altres llengües, el català. La mescla perfecta per a endinsar-nos en la Cambodja 
              profunda gaudint de l'exotisme del sudest asiàtic, sense luxes. Benvinguts al país dels 
              somriures de la mà dels artífexs d'un itinerari únic.
              </p>
            </div>
          </div>
        </section>
        <section className='flex lg:px-[160px] px-7 lg:py-[1.5rem] py-2 w-screen'>
          <div className='lg:px-[1.25%] px-2 w-full'>
            <div className='flex flex-col items-center md:items-start md:flex-row md:justify-evenly lg:gap-7 gap-2 w-full'>
              <div className='flex flex-col gap-4 max-w-full lg:max-w-[450px] h-max items-center'>
                <div className='lg:h-72 max-w-sm'>
                  <img src={OunChock} alt='Oun Chock' />
                </div>
                <span className='name font-extralight text-lg text-[#ff9900]'>Oun Chock</span>
                <p className='name font-light text-sm'>
                En Chock és guia oficial des de 2005, i posseeix llicència per a actuar en totes les zones 
                del país. La seva inquietut per aprendre d'altres cultures i la seva facilitat per als idiomes, 
                sense oblidar la seva gràcia natural característica, l'ha convertit en un experimentat professional 
                de gran personalitat.
                </p>
              </div>
              <div className='flex flex-col gap-4 max-w-full lg:max-w-[450px] h-max items-center'>
                <div className='lg:h-72 max-w-sm'>
                  <img src={Gloria} alt='Gloria' />
                </div>
                <span className='name font-extralight text-lg text-[#ff9900]'>Glória</span>
                <p className='name font-light text-sm'>
                La Glòria té una relació molt especial amb Cambodja des de 2007. En arribar-hi ho va tenir clar: 
                continuar la seva tasca com a formadora d'idiomes per als guies locals d'Angkor. Anys més tard es 
                va introduir al món del Turisme començant a treballar per a importants tour operadors asiàtics, cosa 
                que li donà una visió tècnica i professional que, afegida al seu coneixement del terreny i el gran 
                afecte per la seva gent, la converteix en una perfecta acompanyant i coordinadora.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuiSom;
