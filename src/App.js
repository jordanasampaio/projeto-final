import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import YouTube from 'react-youtube';

import './App.css';

import Header from './components/Header';
import Sobre from './components/Sobre';
import VideoList from './components/VideoList';
import VideoItem from './components/VideoItem';
import ComoParticipar from './components/ComoParticipar';
import Rodape from './components/Rodape';

const opts = {
  height: '230px',
  width: '100%',
};

function App() {

  return (
    <div className="App">
      <Container>
        <Row>
          <Col><Header /></Col>
        </Row>

        <Row>
          <Col><img className="Banner" src="/images/banner.png" alt="banner" /></Col>
        </Row>

        <Row>
          <Col><Sobre /></Col>
        </Row>

        <Row id="videos">
          <Col>
            <VideoList title="VÍDEOS PRÓPRIOS">
              <VideoItem>
                <YouTube opts={opts} videoId="riNDE_NiSXk" />
              </VideoItem>
              <VideoItem>
                <YouTube opts={opts} videoId="SqacBhPPISY" />
              </VideoItem>
              <VideoItem>
                <YouTube opts={opts} videoId="GL8bSLP-KUw" />
              </VideoItem>
            </VideoList>
          </Col>
        </Row>

        <Row id="parceiros">
          <Col>
            <VideoList title="VÍDEOS DE PARCEIROS">
              <VideoItem>
                <YouTube opts={opts} videoId="aB5jW34bi0s" />
              </VideoItem>
              <VideoItem>
                <YouTube opts={opts} videoId="9iqKtEKggpU" />
              </VideoItem>
              <VideoItem>
                <YouTube opts={opts} videoId="fzBXqstpuSs" />
              </VideoItem>
            </VideoList>
          </Col>
        </Row>

        <Row id="participe">
          <Col><ComoParticipar /></Col>
        </Row>

        <Row>
          <Col><Rodape /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
