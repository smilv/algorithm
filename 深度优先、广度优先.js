/*
 * @Description: 深度优先、广度优先
 * @Autor: zhaobin <zhaobin@googutspirits.com>
 * @Date: 2021-07-06 15:14:51
 * @LastEditors: zhaobin
 * @LastEditTime: 2021-07-06 17:11:57
 */

const data = [
  {
    sku: "bj11111",
    prod_name: "茅台红星2016年53度500ml",
    stock_map: {
      liang: {
        gd: 10,
        ym: 8,
        gr: 7,
        zw: 22
      },
      buliang: {
        gd: 0,
        ym: 0,
        gr: 7,
        zw: 0
      },
      fei: {
        gd: 1,
        ym: 0,
        gr: 0,
        zw: 0
      }
    }
  }
];

/**
 * @description: 深度优先
 * @param {type}
 * @return {type}
 */

const res = {
  sku: "bj11111",
  place: "liang",
  companyType: "ge",
  qty: 10
};
function deepFirstSearch(node) {
  const result = [];
  node.forEach(element => {
    let stack = [];
    const map = function(item) {
      for (let key in item) {
        if (item.hasOwnProperty(key)) {
          stack.push(key);
          if (Object.prototype.toString.call(item[key]) === "[object Object]") {
            map(item[key]);
          }
          let obj = { sku: element.sku, place: stack[0], companyType: stack.pop(), qty: item[key] };
          if (stack.length !== 0) {
            result.push(obj);
          }
        }
      }
    };
    map(element.stock_map);

    // for (let a in item.stock_map) {
    //   if (item.stock_map.hasOwnProperty(a)) {
    //     for (let b in item.stock_map[a]) {
    //       if (item.stock_map[a].hasOwnProperty(b)) {
    //         let obj = { sku: item.sku, place: a, companyType: b, qty: item.stock_map[a][b] };
    //         result.push(obj);
    //       }
    //     }
    //   }
    // }
    console.log(result);
  });
}
deepFirstSearch(data);
