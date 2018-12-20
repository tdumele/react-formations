import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';

it('Renders Without Crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar counter={5}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
