// Program to Print Floyd's Triangle

// Floyd's triangle is a triangle with first natural numbers.

// 1
// 2     3
// 4     5     6
// 7     8     9     10
// 11     12     13     14     15

// const printFloydsTriangle = (n) => {
//     const res = [];
//     let k=1;
//     for(let i=1;i<=n;i++){
//         const rows = [];
//         for(let j=0;j<i;j++){
//             rows.push(k++);
//         }
//         res.push(rows)
//     }
//     return res;
// }

const printFloydsTriangle = (n) => {
  let k = 1;
  return Array.from({ length: n }, (_, i) => 
    Array.from({ length: i + 1 }, () => k++)
  );
};

console.log(printFloydsTriangle(5));
console.log(printFloydsTriangle(2));

export { printFloydsTriangle };
