function x(n, fill) {
  var array = Array.from({ length: n });
  return array.map(v => fill);
}
console.log(x(6, 6)); //[6, 6, 6, 6, 6, 6]

function x(n, fill) {
  return new Array(n + 1).join(fill).split("");
}
console.log(x(6, 6)); //["6", "6", "6", "6", "6", "6"]
