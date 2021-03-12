  
module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix === null) {
  return [];}
  let array = [];
  for (let i = 0; i < matrix.length; i++) {
	if (i % 2 != 0) matrix[i].reverse();
    for (let k = 0; k < matrix[i].length; k++) {
      array.push(matrix[i][k]);
    }
  }
  return array;
}