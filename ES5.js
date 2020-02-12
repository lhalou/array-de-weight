var a = [1, 2, 5, 4, 5, 3, 2, 1, 3];

function uniq(array) {
  var result = [];
  var hash = {};
  for (var i = 0; i < array.length; i++) {
    hash[array[i]] = true; //把数组的值作为对象的key，存储起来，并且赋值true，相同的数值不进行多次处理
  }
  console.log(hash);
  for (let key in hash) {
    result.push(key); //把hash对象的key push到数组里
  }
  return result;
}

console.log(uniq(a)); //['1','2','3','4','5']

/*
缺点：
1： 返回的新数组里面的数字不是真实的数字，是字符串数字，因为在ES6之前，对象的属性名只能是字符串
2. 无法区别原数组中的数字和字符串数字，比如'4'和4,会被认为是一个
3. 无法统计对象，比如[1,2,3,{name:object}] //返回的新数组是["1", "2", "3", "[object Object]"]
*/
