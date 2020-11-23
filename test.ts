import {hello} from "./hello";

test('1+2 === 3', () => {
  expect(1 + 2).toMatchSnapshot();
})

test('a+b === ab', () => {
  expect('a' + 'b').toMatchSnapshot();
})

test('array', () => {
  const array1 = [1, 2];
  const array2 = [3, 4];
  expect([...array1, ...array2]).toMatchSnapshot();
})

test('function', () => {
  expect(hello).toMatchSnapshot();
})

test('snapshot in loop', () => {
  const array = ['aaa', 'bbb', 'ccc'];
  for (const item of array) {
    expect(item).toMatchSnapshot(item);
  }
})
