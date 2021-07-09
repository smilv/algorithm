/*
 * @Description: 深度优先、广度优先
 * @Autor: zhaobin <zhaobin@googutspirits.com>
 * @Date: 2021-07-06 15:14:51
 * @LastEditors: zhaobin
 * @LastEditTime: 2021-07-09 11:16:53
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
    const map = function(item, stack = []) {
      Object.keys(item).forEach(key => {
        stack.push(key);
        if (Object.prototype.toString.call(item[key]) === "[object Object]") {
          map(item[key], stack);
        }
        if (stack.length > 1) {
          let obj = { sku: element.sku, place: stack[0], companyType: stack.pop(), qty: item[key] };
          item[key] !== 0 && result.push(obj);
        } else {
          stack.pop();
        }
      });
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
