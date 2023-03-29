import React from "react";
import Question from "./Question";

const QueCalSaber = ({nav}) => {
    return (
      <div name='que-cal-saber' className='w-full h-screen'>
        <div className='w-full h-[340px] bg-[url(assets/que-cal-saber.jpg)] bg-no-repeat bg-center bg-cover bg-[#CB6928]'></div>
        <section className='py-16 mx-auto w-full px-4 max-w-4xl'>
            <div className='w-full py-[14px] px-[8px]'>
              <span className='text-[#ff9900] text-3xl'>Què cal saber</span>
            </div>
            <div
              className={
                nav
                ? 'hidden'
                : ''
              }
            >
              <Question question="És un país segur?" answer="És molt segur, amb uns índex mínims de criminalitat; òbviament, com a tot arreu, tingueu cura de les vostres pertenences per evitar petits furts, però no hi ha motiu de preocupació." />
              <Question question="Encara hi queden mines anti-persona?" answer="Cambodia fa molts anvs que està desminant el país. Recentment es fa amb rates que han estat entrenades a l'Africa. Tot el nostre recorregut es troba lliure de perill i, de fet, són
  zones que travessem sempre amb guies locals i coneixedors del terreny." />
              <Question question="Quin temps hi fa?" answer="Ens trobem en un país de monzons amb dues estacions principals, la plujosa i la seca. Tindrem pluges que van en augment des de juny fins a finals d'octubre, per aleshores gaudir del
  millor clima durant l'any, amb temperatures agradables fins al mes de març, quan la calor és més intensa a l'espera que comenci a ploure a finals de maig." />
              <Question question="Quines vacunes són obligatories i quines recomanades?" answer="Fins abans de la pandèmia no hi havia cap vacuna obligatòria, però sí recomanades. Els vostres centres de salut us n'informaran. Actualment és necessari el certificat de vacunació
  de la Covid." />
              <Question question="Quina moneda s'accepta?" answer="Cambodja té la seva prôpia moneda, el riel khmer, però també el dòlar americà és moneda co-oficial. Un dòlar equival aproximadament a uns 4000 riels, depenent d'on els
  bescanviem" />
              <Question question="Mesures Covid-19" answer="Actualment és necessari el certificat de vacunació de la Covid. En aquest moment no existeixen altres requeriments ni proves PCR." />
              <Question question="Visats" answer="El visat de turista a l'arribada, per a persones vacunades de la Covid, torna a ser vigent. Us demanaran una fotografia i l'abonament de 30 $ en efectiu, millor si ja porteu dölars
  americans. És molt important que el passaport tingui validesa almenvs 6 mesos i que contingui dues pâgines en blanc. Aquest visat té una durada de 30 dies. De tota manera, si es
  vol estalviar temps d'espera, es pot demanar on-line amb antel·lació a la web: https://www.evisa.gov.kh/" />
            </div>
        </section>
      </div>
    );
  };
  
  export default QueCalSaber;