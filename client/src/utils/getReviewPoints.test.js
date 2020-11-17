import getReviewPoints from './getReviewPoints';

const emptyReviews = { 1: 0, 2: 0, 3: 0 };
const fiveStarReviews = { 5: 1 };
describe('getReviewPoints', () => {
  test('an array with no reviews should return an array of length 5', () => {
    expect(getReviewPoints(emptyReviews).length).toBe(5);
  });
  test('an object with no reviews should return an array of 5 zeroes', () => {
    expect(getReviewPoints(emptyReviews)).toStrictEqual([0, 0, 0, 0, 0]);
  });
  test('an object containing one five star review should return an array of 5 100s', () => {
    expect(getReviewPoints(fiveStarReviews)).toStrictEqual([
      100,
      100,
      100,
      100,
      100,
    ]);
  });
});
