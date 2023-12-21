export default function make2DArray(rows, columns, value) {
  return Array(rows)
    .fill(null)
    .map(() => Array(columns).fill(value));
  //   let twoDArray = [];
  //   for (let i = 0; i < rows; ++i) {
  //     let newArr = [];
  //     for (let j = 0; j < columns; ++j) {
  //       newArr.push(value);
  //     }
  //     twoDArray.push(newArr);
  //   }
  //   twoDArray[0][0] = 1;
  //   return twoDArray;
}
