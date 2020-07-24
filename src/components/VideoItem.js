import React from 'react';
import { Col } from 'reactstrap';

import './VideoItem.css';

function VideoItem(props) {
  const { children } = props;
  return (
    <Col className={VideoItem}>
      {children}
      {/* <h4 className="VideoItem__Title">{num} - {title}</h4> */}
    </Col>
  );
}

export default VideoItem;
