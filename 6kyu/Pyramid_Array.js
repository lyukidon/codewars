// https://www.codewars.com/kata/515f51d438015969f7000013/train/javascript

function pyramid(n) {
  let answer=[];
  for (let i=1;i<=n;i++){
    answer.push('1'.repeat(i).split('').map(c=>+c))
  }
  return answer;
}

