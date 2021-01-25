function chunklify(array, size) {
  let arr = [];

  for (let i = 0; i < array.length; i += size) {
    let chunk = array.slice(i, i + size);
    arr.push(chunk);
  }

  return arr;
}

module.exports = chunklify;
