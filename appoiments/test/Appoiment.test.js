/*
 * Defines the test suite(set of tests):
 * First argument = name of component, funcion or module
 * Second argument = function where you define tests
 */

describe('Appoiments', () => {
  it('renders the customer first name', () => {
    // Each test can have as many expectations as you want

    expect(document.body.textContent).toMatch('Ashley');
    // expect = Expectation
    // .toMatch = Matchers(there is a few of it)
  });
});


