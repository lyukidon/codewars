// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript

function score( dice ) {
    let obj= {};
    const point = {'1':1000,'2':200,'3':300,'4':400,'5':500,'6':600}
    for(let i=0;i<dice.length;i++){
      if (obj[dice[i]]){
        obj[dice[i]]+=1;
      }else{
        obj[dice[i]]=1;
      }
    }
    let total=0;
    for (let key in obj){
      if (obj[key]>=3){
        if(key==1||key==5){
          if(key==1){
            total+=point[key]+(obj[key]-3)*100
          }else{
            total+=point[key]+(obj[key]-3)*50
          }
        }else{
          total+=point[key];
        }
      }else{
        if (key==1||key==5){
          if(key==1){
            total+=obj[key]*100;
          }else{
            total+=obj[key]*50;
          }
        }
      }
    }
    return total;
  }