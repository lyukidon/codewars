// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

function high(x){
  const array = x.split(' ');
  const arrayMap = array.map(c => c.split('').reduce(
        (save, alphabet) => save + alphabet.charCodeAt()
      ,0)
    )
  return array[arrayMap.indexOf(Math.max.apply(null, arrayMap))]
}

