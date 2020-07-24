import React from 'react';
import { Row } from 'reactstrap';

import './VideoList.css';

function VideoList(props) {
  const { children } = props;
  return (
    <div className="VideoList">
      <h3>{props.title}</h3>
      <Row>
        {children}
      </Row>
    </div>
  );
}

VideoList.defaultProps = {
  title: 'VÍDEOS PRÓPRIOS',
};

export default VideoList;
