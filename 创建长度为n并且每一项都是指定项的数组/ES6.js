function x(n, fill) {
  var array = Array.from({ length: n });
  return array.map(v => fill);
  //上面两句话等价于 rreturn Array.form({length:n}).fill(fill)
}
console.log(x(6, 6)); //[6, 6, 6, 6, 6, 6]

