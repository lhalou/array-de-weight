//ES5 得到一个长度为5的数组，但是没有任何下标

a = new Array(5);
console.log(a); //[empty × 5]

// ES6创建长度为5，但是有下标的数组

a = Array.from({ length: 5 });
console.log(a); //[undefined, undefined, undefined, undefined, undefined]

//ES5近似实现方法

a = Array.apply(null, { length: 5 });
console.log(a); //[undefined, undefined, undefined, undefined, undefined]
