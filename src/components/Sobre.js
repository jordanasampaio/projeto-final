import React from 'react';

import './Sobre.css';

function Sobre() {
  return (
    <div className="Sobre">
      <div className="Sobre__Left">
        <div>
          <img
            alt="Crianças"
            className="Sobre__Image"
            src="/images/professora.jpg"
          />
        </div>
      </div>
      <div className="Sobre__Right">
        <h3>SOBRE</h3>

        <p>Olá, sou Ivonete Sampaio, professora de educação infantil a 28 anos. Ser professora  foi uma escolha cada dia mais encantadora ao passar dos anos, na interação com os pequenos.
        Mas tempos difíceis chegaram e foi preciso se reinventar. Pensando em contribuir com desenvolvimento das crianças de forma participativa, mesmo que à distancia, abro este espaço de 
        compartilhamento de atividades online, pois continuo acreditando que quando ensino aprendo. As portas estão abertas para profissionais da educação que também desejam partilhar suas experiências.</p>
      </div>
    </div>
  );
}

export default Sobre;
