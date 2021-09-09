import React from 'react';

const appoimentTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  return `${h}:${m}`;
};

export const Appoiment = ({ customer: { firstName } }) => (
  <div>{firstName}</div>
);

export const AppoimentsDayView = ({ appoiments }) => {
  return (
    <div id='appoimentsDayView'>
      <ol>
        {appoiments.map((appoiment) => (
          <li key={appoiment.startsAt}>
            {appoimentTimeOfDay(appoiment.startsAt)}
          </li>
        ))}
      </ol>
      {appoiments.length === 0 ? (
        <p>There are no appoiments scheduled for today.</p>
      ) : (
        <Appoiment {...appoiments[0]} />
      )}
    </div>
  );
};
