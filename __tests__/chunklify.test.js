const chunklify = require('../');

describe('chunklify', () => {
  it('function chunklify exists', () => {
    expect(typeof chunklify).toEqual('function');
  });

  it('splits an array of 5 elements with chunk size 1', () => {
    const arr = [1, 2, 3, 4, 5];
    const chunked = chunklify(arr, 1);

    expect(chunked).toEqual([[1], [2], [3], [4], [5]]);
  });

  it('splits an array of 9 elements with chunk size 2 while having 1 element as remainder', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const chunked = chunklify(arr, 2);

    expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9]]);
  });

  it('splits an array of 7 elements with chunk size 3', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const chunked = chunklify(arr, 3);

    expect(chunked).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });

  it('splits an array of 11 elements with chunk size 5', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const chunked = chunklify(arr, 5);

    expect(chunked).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11]]);
  });
});
