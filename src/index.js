module.exports = function zeros(expression) {
  let buf = [];
  let buf_size = 0;
  let final = BigInt(1);
  element = [];
  var counerFact = 0;
  var number;
  var result = 1;
  let res = [];
  var counter = 0;
  for (let i = 0; i <= expression.length; i++) {
    if (expression[i] == "*" || expression.length == i) {
      for (let j = 0; j < buf_size; j++) {
        if (buf[j] == "!") counerFact++;
        else element += buf[j];
      }
      res.push(Main(element, counerFact));
      element = [];
      buf = [];
      buf_size = 0;
      counerFact = 0;
    } else {
      buf += expression[i];
      buf_size++;
    }
  }

  function Main(numRes, nFact) {
    number = Number(numRes);

    result = BigInt(result);

    if (nFact == 2 && number % 2 == 1) {
      for (m = BigInt(1); m <= number; ) {
        result = result * m;
        m = BigInt(m) + BigInt(2);
      }
    }
    if (nFact == 2 && number % 2 == 0) {
      for (m = BigInt(2); m <= number; ) {
        result = result * m;
        m = BigInt(m) + BigInt(2);
      }
    } else {
      if (nFact == 1) {
        for (m = BigInt(1); m <= number; ) {
          result = result * m;
          m = BigInt(m) + BigInt(1);
        }
      }
    }

    return BigInt(result);
  }
  final = res.reduce((a, b) => a * b);
  res = String(res).split("");
  for (let i = res.length - 1; i > 0; i--) {
    if (res[i] == "0") counter++;
    else break;
  }

  return counter;
};
