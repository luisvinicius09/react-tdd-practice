import React from 'react';
import ReactDOM from 'react-dom';
import { Appoiment, AppoimentsDayView } from '../src/Appoiment';

/*
 * Defines the test suite(set of tests):
 * First argument = name of component, funcion or module
 * Second argument = function where you define tests
 */

describe('Appoiments', () => {
  // Be careful of variables on the describe scope, they are not cleared between tests.
  let customer;
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = (component) => ReactDOM.render(component, container);

  it('renders the customer first name', () => {
    customer = { firstName: 'Ashley' };

    // document.body.appendChild(container); // Append the container(div) to the document ❓❔

    render(<Appoiment customer={customer} />);

    // Each test can have as many expectations as you want
    expect(container.textContent).toMatch('Ashley');
    // expect = Expectation
    // .toMatch = Matchers(there is a few of it)
  });

  it('renders another customer first name', () => {
    customer = { firstName: 'Jordan' };

    render(<Appoiment customer={customer} />);

    expect(container.textContent).toMatch('Jordan');
  });
});

describe('AppoimentsDayView', () => {
  let container;
  const today = new Date();
  const appoiments = [
    {
      startsAt: today.setHours(12, 0),
      customer: { firstName: 'Ashley' },
    },
    {
      startsAt: today.setHours(13, 0),
      customer: { firstName: 'Ashley' },
    },
  ];

  beforeEach(() => {
    container = document.createElement('div');
  });

  const render = (component) => ReactDOM.render(component, container);

  it('renders a div with the right id', () => {
    render(<AppoimentsDayView appoiments={[]} />);

    expect(container.querySelector('div#appoimentsDayView')).not.toBeNull();
  });

  it('renders multiple appoiments in an ol element', () => {
    render(<AppoimentsDayView appoiments={appoiments} />);
    expect(container.querySelector('ol')).not.toBeNull(); // Interesting, first check if the component is there, null or not
    expect(container.querySelector('ol').children).toHaveLength(2); // Then check the length of it, by counting the childrens
  });

  it('renders each appoiment in an li', () => {
    render(<AppoimentsDayView appoiments={appoiments} />);
    expect(container.querySelectorAll('li')).toHaveLength(2);
    expect(container.querySelectorAll('li')[0].textContent).toEqual('12:00');
    expect(container.querySelectorAll('li')[1].textContent).toEqual('13:00');
  });

  it('initially shows a message saying there are no appoiments today', () => {
    render(<AppoimentsDayView appoiments={[]} />);
    expect(container.textContent).toMatch(
      'There are no appoiments scheduled for today.'
    );
  });

  it('selects the first appoiment by default', () => {
    render(<AppoimentsDayView appoiments={appoiments} />);
    expect(container.textContent).toMatch('Ashley');
  });
});
