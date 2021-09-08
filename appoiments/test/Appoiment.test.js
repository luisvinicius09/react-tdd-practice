import React from 'react';
import ReactDOM from 'react-dom';
import { Appoiment } from '../src/Appoiment';

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
