import React from 'react';

export const Appoiment = ({ customer: { firstName } }) => (
  <div>{firstName}</div>
);

export const AppoimentsDayView = () => (
  <div id='appoimentsDayView'>
    <ol></ol>
  </div>
);
