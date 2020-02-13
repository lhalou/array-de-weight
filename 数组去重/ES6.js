//set对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用

var a = [1, 2, 5, 4, 5, "4", 3, 2, 1, 3, { name: "object" }];

function uniq(array) {
  return Array.from(new Set(array));
  //等价于[...new Set(array)]
}
//new Set(array)得到的是对象，所以Array.form将对象变为数组
console.log(uniq(a)); //[1, 2, 5, 4, "4", 3, {…}]
