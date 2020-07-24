import React from 'react';
import { Button } from 'reactstrap';
import { Facebook, Instagram, Youtube } from 'react-feather';

import './Rodape.css';

function Rodape(props) {
  return (
    <div className="Rodape">
      <Button color="link" className="Social-Button">
        <Youtube />
      </Button>
      <Button color="link" className="Social-Button">
        <Facebook />
      </Button>
      <Button color="link" className="Social-Button">
        <Instagram />
      </Button>
    </div>
  );
}

export default Rodape;
