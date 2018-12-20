import React from 'react';
import ReactDOM from 'react-dom';
import ButtonGroup from './ButtonGroup';

it('Renders Without Crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonGroup />, div);
  ReactDOM.unmountComponentAtNode(div);
});
