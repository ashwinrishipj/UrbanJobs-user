import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function ErrorDisplay(props) {
  const [show, setShow] = useState(true);

  alert(ErrorDisplay);
  if (show) {
    return (
      <Alert variant="danger" align="center" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{props.data}</Alert.Heading>
      </Alert>
    );
  }
}

export default ErrorDisplay;