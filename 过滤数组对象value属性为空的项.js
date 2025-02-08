const data1 = [
  {
    id: 0,
    name: "北京",
    value: "",
  },
  {
    id: 1,
    name: "上海",
    value: [],
  },
  {
    id: 1,
    name: "深圳",
    value: {},
  },
  {
    id: 3,
    name: "广州",
    value: [
      {
        id: 0,
        name: "北京",
        value: "",
      },
      {
        id: 1,
        name: "上海",
        value: [],
      },
      {
        id: 1,
        name: "广州",
        value: "123",
      },
    ],
  },
];
function fn(data) {
  return data.filter((item) => {
    const itemValueType = Object.prototype.toString.call(item.value);

    if (itemValueType === "[object String]" && !item.value) {
      return false;
    }
    if (itemValueType === "[object Object]" && Object.keys(item.value).length === 0) {
      return false;
    }
    if (itemValueType === "[object Array]") {
      if (item.value.length === 0) {
        return false;
      }
      item.value = fn(item.value);
    }
    return true;
  });
}
console.log(fn(data1));
