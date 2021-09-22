import React from 'react';
import ReactDOM from 'react-dom';
import { AppoimentsDayView } from './AppoimentsDayView';
import { sampleAppoiments } from './sampleData';

ReactDOM.render(
  <AppoimentsDayView appoiments={sampleAppoiments} />,
  document.getElementById('root')
);
