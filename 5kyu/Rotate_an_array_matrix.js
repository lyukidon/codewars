// https://www.codewars.com/kata/525a566985a9a47bc8000670

function rotate(matrix, direction) {
    let answer = [];
    if (direction === 'clockwise'){
      for (let i=0;i<matrix[0].length;i++){
        let temp = [];
        for (let j=matrix.length-1;j>=0;j--){
          temp.push(matrix[j][i]);
        }
        answer.push(temp)
      }
    }else{
      for (let i=matrix[0].length-1;i>=0;i--){
        let temp = [];
        for (let j=0;j<matrix.length;j++){
          temp.push(matrix[j][i]);
        }
        answer.push(temp);
      }
    }
    return answer;
  }