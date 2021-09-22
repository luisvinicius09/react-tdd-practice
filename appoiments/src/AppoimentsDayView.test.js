import React, { useState } from 'react';

const appoimentTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  return `${h}:${m}`;
};

export const Appoiment = ({ customer: { firstName } }) => (
  <div>{firstName}</div>
);

export const AppoimentsDayView = ({ appoiments }) => {
  const [selectedAppoiment, setSelectedAppoiment] = useState(0);
  return (
    <div id='appoimentsDayView'>
      <ol>
        {appoiments.map((appoiment, index) => (
          <li key={appoiment.startsAt}>
            <button type='button' onClick={() => setSelectedAppoiment(index)}>
              {appoimentTimeOfDay(appoiment.startsAt)}
            </button>
          </li>
        ))}
      </ol>
      {appoiments.length === 0 ? (
        <p>There are no appoiments scheduled for today.</p>
      ) : (
        <Appoiment {...appoiments[selectedAppoiment]} />
      )}
    </div>
  );
};
