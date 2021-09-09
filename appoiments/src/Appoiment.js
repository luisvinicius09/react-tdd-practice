import React from 'react';

const appoimentTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  return `${h}:${m}`;
};

export const Appoiment = ({ customer: { firstName } }) => (
  <div>{firstName}</div>
);

export const AppoimentsDayView = ({ appoiments }) => (
  <div id='appoimentsDayView'>
    <ol>
      {appoiments.map((appoiment) => (
        <li key={appoiment.startsAt}>
          {appoimentTimeOfDay(appoiment.startsAt)}
        </li>
      ))}
    </ol>
  </div>
);
