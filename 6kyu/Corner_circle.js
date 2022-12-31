// https://www.codewars.com/kata/5898761a9c700939ee000011

const cornerCircle = r => {
  return Math.round((r*Math.sqrt(2)-r)/(1+Math.sqrt(2))*100)/100
}