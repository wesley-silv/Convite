// Styles imports
import './banner.sass';

// Icons imports
import {ImWhatsapp} from 'react-icons/all';
import {ImLocation} from 'react-icons/all';
import {GiPresent} from 'react-icons/all';
import {RiHeartsFill, BsFillSuitHeartFill, BsFillPinMapFill} from 'react-icons/all';
import {FaRegHandPointDown} from 'react-icons/all';


const Banner = () => {

  const profile = {
    imagem: '../imagens/Mel & Wes.png.jpg',
  }
  const links = {
    localization: 'https://www.google.com.br/maps/place/Av.+Dom+Jos%C3%A9+Andr%C3%A9+Coimbra,+1520+-+Marciano+Brand%C3%A3o,+Patroc%C3%ADnio+-+MG,+38740-000/@-18.9446518,-47.0045441,15z/data=!3m1!4b1!4m5!3m4!1s0x94afba6190720015:0x1c1d6cc851af332d!8m2!3d-18.944652!4d-46.9957893',
    contact: 'https://wa.me/553492540828?text=Olá Meliny e Wesley, obrigado pelo convite, venho confirmar a minha presença no casamento de voçês.',
    presents: '',
    targetPage: 'blank',

  }

  return (
    <div className='banner'>
      <img src={profile.imagem} alt='Fotografia de perfil dos noivos' /> 
      
      <main className='main'>
      <section className='simbol'>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <RiHeartsFill className='infinite' size={90} />
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      </section>
      <h4 className='subtitle'>
        "Se tardar espera-o, porque certamente virá, não tardará"
      </h4>
      <h1 className='title'>
        Meliny Sara  <br/> & <br/> Wesley Silva
      </h1>
      <p className='text'>
        Convidam para cerimônia de seu casamento em um culto de glorificação a Deus
      </p>
      <p className='text'> A realizar-se no dia:</p>
      <h1 className='igreja'>
        28 / Outubro / 2023
      </h1>
      <h2>
        Às 19:30 horas
      </h2>
      <h1 className='title'>
        Igreja Cristã Maranata
      </h1>
      <h2>
        O Senhor Jesus Vem 
      </h2>
      <p className='text'>
        Toque para acessar
      </p>
      <FaRegHandPointDown className='FaRegHandPointDown' size={40}/>
      <div className="links_container">
        <a href={links.localization} alt='Icon Point_Maps' title='Localização' target={links.targetPage}>
          <BsFillPinMapFill size={32} />
          <br /> Localização
        </a>
        <a href={links.contact} alt='Icon Whatsapp' title='Confirmação de presença' target={links.targetPage}><ImWhatsapp size={32}/>  <br /> Confirmar</a>
      </div>
      <a href='' alt='Icons Present' title='Presentear' target={links.targetPage}>
        <GiPresent size={39}/>
        <br /> Presentear
      </a>
      <p className='versicleBible'>
        "Então, a nossa boca se encheu de riso, e a nossa língua, de cânticos; então, se dizia entre as nações: Grandes coisas fez o Senhor a estes. Grandes coisas fez o Senhor por nós, e, por isso, estamos alegres." <br /> Salmos 126:2
      </p>
      </main>
    </div>
  )
}

export default Banner