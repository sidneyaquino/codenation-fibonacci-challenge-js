const _ini = [0, 1];
const _max = 350;

const isInt = number => number == parseInt(number);

const inSequence = number =>
  [1, -1].map((signal) =>
    isInt((5 * number ** 2 + signal * 4 * (-1) ** number) ** .5)).includes(true);

const getSequence = (limit, sequence = _ini) => {
  const next = sequence.slice(-2).reduce((total, current) => total + current);
  if (next <= limit) {
    sequence.push(next);
    getSequence(limit, sequence);
  }
  return sequence;
}

module.exports = {
  isFibonnaci: inSequence,
  fibonacci() { return getSequence(_max) }
}