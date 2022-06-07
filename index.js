function scuberGreetingForFeet(){
return (feet>2500)? 'No can do.': (feet <=400)? 'This one is on me!': 'I will glady take your thirty bucks.;'  
}

function ternaryCheckCity(){
  return (city === 'NYC')? 'ok,sounds good.' :'No global.';
}  

function switchOnCharmFromTip(){
  switch(tip) {
    case 'generous';
     return 'Thank you so much.';
    case 'not as generous';
     return 'Thank you.';
    case 'thanks for everything'
     return 'Bye';
  } 
}