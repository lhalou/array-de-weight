//Array.prototype.find 找到第一个符合条件的对象就停止查找
//Array.prototype.filter过滤出所有符合条件的对象
var a = [
  { name: "a1", age: 80 },
  { name: "a2", age: 18 },
  { name: "a3", age: 18 }
];

console.log(a.find(item => item.age === 18)); //{name:'a2',age:18}
console.log(a.filter(item => item.age === 18)); //{{name:'a2',age:18},{name: 'a3',age:18}}
