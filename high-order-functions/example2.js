
function print(values, fn) {
  values.forEach(value => {
    console.log('* Value is', fn(value));
  });
}

function multiplyBy2(value) {
  return value * 2;
}

function applyFee(fn) {
  return fn;
}

function ride(transform, run) {
  const distance = [...Array(10).keys()];
  run(distance, transform);
}

ride(applyFee(multiplyBy2), print);