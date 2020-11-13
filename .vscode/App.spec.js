// import { create, act } from 'react-test-renderer';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '../src/components/App';

// act(() => root = create(<App />))
// it('can render without crashing', () => {
//   expect(testInstance)
// });

// test('the component has a classname of btn', () => {
//   const root = create(<BtnGroup />).root;
//   const element = root.findByType('div');

//   expect(element.props.className.includes('btn'));
// });
// const add = (...args) => args.reduce((acc, num) => acc + num, 0);

// test('add', () => {
//   expect(add(1, 2)).toBe(3);
// });

// export { add };

// import { unmountComponentAtNode } from 'react-dom';

// let container = null;
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });
