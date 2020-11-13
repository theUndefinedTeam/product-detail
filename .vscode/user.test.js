// import { add } from './App.spec';
const add = jest.fn(() => 6);
const total = (num) => `$${num}`;
test('total', () => {
  expect(total(add(1, 2, 3))).toBe('$6');
  expect(add).toHaveBeenCalledTimes(1);
  expect(add).toHaveBeenCalledWith(1, 2, 3);
});
