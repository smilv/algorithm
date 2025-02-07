const arr = ["1.1.12", "1.0.22", "10.8.1", "1.0.1", "1.0.2"];

arr.sort((a, b) => fn(a.split("."), b.split(".")));

function fn(a, b) {
  const len = Math.max(a.length, b.length);
  for (let i = 0; i < len; i++) {
    let num_a = Number(a[i]) || 0,
      num_b = Number(b[i]) || 0;
    if (num_a > num_b) return 1;
    if (num_a < num_b) return -1;
  }
  return 0;
}
console.log(arr);
