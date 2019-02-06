function SPfee(value) {
  const fee = 1.3;
  return value * fee;
}

function calculateFee(fn, value) {
  return fn(value);
}

const totalValueSP = calculateFee(SPfee, 4);

console.log(totalValueSP);