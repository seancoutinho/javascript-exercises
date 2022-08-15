const ftoc = function(temp) {
  div = (5/9);
  const ans = div * (temp-32);
  return parseInt(ans.toPrecision(1));
};

const ctof = function(temp) {
  div = (9/5);
  ans = (div*temp) + 32;
  return parseInt(ans.toPrecision(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
