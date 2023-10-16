// lab_5.3
// Гринчук Тарас
// Лабораторна робота № 5.3
//  Функції, що містять розгалуження та цикли з рекурентними співвідношеннями
// Варіант №4

let p_start, p_end, n, m;

p_start = parseFloat(prompt("p_start = "));
p_end = parseFloat(prompt("p_end = "));
n = parseFloat(prompt("n = "));

let dp = (p_end - p_start) / n;

let p = p_start;

console.log(`--------------------------------------------------`);
console.log(`|           p           |     |         m         |`);
console.log(`--------------------------------------------------`);

while (p <= p_end) {
   m = z(p * p + 1) - z(p * p - 1) + 2 * z(p);
   console.log(`|    ${String(p).padEnd(15)}    |    |    ${String(m).padEnd(15)}    |`);
   p += dp;
}

function z(x) {
   if (Math.abs(x) >= 1) {
      return (Math.sin(x) + 1) / (Math.cos(x) * Math.cos(x) + Math.exp(x));
   } else {
      let k = 0;
      let S = 0;
      let a = 1;
      S = a;
      do {
         k++;
         let R = (2 * x) / k;
         a *= R;
         S += a;
      } while (k < 6);
      return ((1 / Math.exp(x * x)) * S);
   }
}
console.log(`----------------------------------------------------`);

module.exports = z;
