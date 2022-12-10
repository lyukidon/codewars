// https://www.codewars.com/kata/617ae2c4e321cd00300a2ec6

function isConstructable(a){
  if (Math.sqrt(a)===parseInt(Math.sqrt(a))){
    return true;
  }else{
    let i=1;
    while(a>Math.pow(i,2)){
      let squared=Math.pow(i,2)
      if (Math.sqrt(a-squared) === parseInt(Math.sqrt(a-squared))){
        return true;
      }
      i++;
    }
    return false;
  }
}