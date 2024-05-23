import './About.css'

import theLegendaryPicture from '../assets/theLegendaryPicture.jpg'

function About() {
  return (
    <div className= "aboutContainer"style={{ padding: '20px', textAlign: 'left' }}>
      <h1>Sobre</h1>
      <p>
        Este projeto foi idealizado pela professora Barbara, uma educadora dedicada e inspiradora. 
        Com seu entusiasmo e paixão pelo ensino, nós criamos este jogo da memória para ajudar os 
        alunos a aprenderem de forma divertida e interativa. 
      </p>
      <p>
        A professora Barbara é conhecida por sua abordagem inovadora e seu compromisso com a 
        educação de qualidade. Ela sempre busca novas maneiras de engajar os alunos e tornar 
        o aprendizado uma experiência agradável e significativa. Este projeto é um exemplo perfeito 
        de como ela transforma ideias em realidade, sempre colocando o bem-estar e o desenvolvimento 
        dos alunos em primeiro lugar.
      </p>
      <p>
        Estamos muito gratos por ter a professora Barbara como nossa guia e mentora, e esperamos 
        que você aproveite este jogo tanto quanto nós apreciamos desenvolvê-lo sob sua orientação.
      </p>
      <img className='theLegendaryPicture' src={theLegendaryPicture} alt="foto lendária" />
    </div>
  );
}

export default About;