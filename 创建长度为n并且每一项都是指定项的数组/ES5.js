function x(n, fill) {
  return new Array(n + 1).join(fill).split("");
}
console.log(x(6, 6)); //["6", "6", "6", "6", "6", "6"]
