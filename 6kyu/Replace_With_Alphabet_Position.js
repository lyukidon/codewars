// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  let answer=[];
  for (let i in text){
    const num = text.charCodeAt(i)
    if (num>=97 && num<=122){
      answer.push(num - 96);
    } else if (num>=65 && num<=90){
      answer.push(num - 64)
    }
  }
  return answer.join(' ')
}

