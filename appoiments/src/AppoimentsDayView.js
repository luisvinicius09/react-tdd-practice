import React, { useState } from 'react';

const appoimentTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(':');
  return `${h}:${m}`;
};

export const Appoiment = ({
  startsAt,
  customer: { firstName, lastName, phoneNumber, stylist, service, notes },
}) => (
  <>
    <div>
      <h2>The appoiment starts at {startsAt}</h2>
    </div>
    <table>
      <tr>
        <td>First Name</td>
        <td>{firstName}</td>
      </tr>
      <tr>
        <td>Last Name</td>
        <td>{lastName}</td>
      </tr>
      <tr>
        <td>Phone Number</td>
        <td>{phoneNumber}</td>
      </tr>
      <tr>
        <td>Stylist</td>
        <td>{stylist}</td>
      </tr>
      <tr>
        <td>Service</td>
        <td>{service}</td>
      </tr>
      <tr>
        <td>Notes</td>
        <td>{notes}</td>
      </tr>
    </table>
    <div>{firstName}</div>
  </>
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
