import React from 'react';
import imageOne from '../assets/1.JPG';
import imageTwo from '../assets/2.JPG';
import imageThree from '../assets/3.jpeg';

const QueFem = () => {
  return (
    <div name='que-fem' className='w-full h-screen'>
      <div className='w-full h-[346px] md:h-[520px] bg-[url(assets/que-fem.jpg)] bg-no-repeat bg-center bg-cover bg-[#CB6928]'></div>
      <section className='flex lg:px-[160px] px-7 py-2 lg:py-[1.5rem]'>
          <div className='px-[1.25%]'>
            <div className='w-full py-[14px] px-[8px]'>
              <span className='text-[#ff9900] text-3xl'>Què fem</span>
            </div>
            <div className='py-[14px] px-[8px]'>
              <p className='font-light text-lg text-[#434343] leading-relaxed pb-4'>
              Oferir-vos una experiència única. La innovació del projecte recau en la identitat d'un viatge 
              d'autor fet a mida, basat en el coneixement del territori partint de zero, essent en tot moment 
              partíceps de la cultura khmer. Cambodja com a únic destí és tot un descobriment, que manté -tot 
              i les influències de les veïnes Tailàndia i Vietnam- les seves tradicions intactes.
              </p>
              <p className='font-light text-lg text-[#434343] leading-relaxed pb-4'>
              L'itinerari estrella que hem dissenyat és de 14 dies (13 nits) i comença amb l'arribada a la capital 
              de Cambodja, Phnom Penh. El recorregut puja cap al nordoest per a continuar més cap al nord, fins a 
              tocar amb la frontera tailandesa. D'allí ens desplacem cap a l'est travessant tot el país fins a les 
              províncies frontereres amb Vietnam, i seguim -sempre sense trepitjar les nostres passes- cap al centre. 
              Finalitzem a la ciutat de Siem Reap, per a meravellar-nos amb l'antiga civilització d'Angkor.
              </p>
              <p className='font-light text-lg text-[#434343] leading-relaxed pb-4'>
              Tot això amanit amb activitats que dónen suport a l'economia local, experiències totalment dissenyades 
              per a gaudir d'una Cambodja autèntica, segura i propera. Si en voleu més detalls, no dubteu a posar-vos 
              en contacte amb nosaltres.
              </p>
            </div>
            <div className='flex flex-col xl:flex-row gap-4 xl:h-[244px] justify-between'>
              <img src={imageOne} alt="Image One" />
              <img src={imageTwo} alt="Image Two" />
              <img src={imageThree} alt="Image Three" />
            </div>
          </div>
        </section>
    </div>
  );
};

export default QueFem;
