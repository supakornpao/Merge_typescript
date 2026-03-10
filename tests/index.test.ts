import { merge } from '../src/index';

describe('Test case 1', () => {
  test('collection_1 = [1,2,4,6] collection_2 = [2,6,7,9] collection_3 = [9,6,3,1]', () => {
    expect(merge([1,2,4,6],[2,6,7,9],[9,6,3,1])).toStrictEqual([1, 1, 2, 2, 3, 4, 6, 6, 6, 7, 9, 9]);
  });
});


describe('Test case 2', () => {
  test('collection_1 = [1,4,6,7,8,12] collection_2 = [2,5,6,9,20] collection_3 = [32,16,14,10]', () => {
    expect(merge([1,4,6,7,8,12],[2,5,6,9,20],[32,16,14,10])).toStrictEqual([ 1,  2,  4,  5,  6,  6,  7,  8,  9, 10, 12, 14, 16, 20, 32]);
  });
});

