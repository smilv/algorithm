let arr = [1, 2, [3], [4, [5]]];

//指定要提取嵌套数组的结构深度，默认值为 1。
console.log(arr.flat(Infinity));

function fn(arr, res = []) {
  for (let item of arr) {
    if (Array.isArray(item)) {
      res = res.concat(fn(item, []));
    } else {
      res.push(item);
    }
  }
  return res;
}

function fn(arr, res = []) {
  for (let item of arr) {
    if (Array.isArray(item)) {
      fn(item, res);
    } else {
      res.push(item);
    }
  }
  return res;
}

function fn(arr) {
  return arr.reduce((prev, cur) => prev.concat(Array.isArray(cur) ? fn(cur) : cur), []);
}

console.log(fn(arr));
