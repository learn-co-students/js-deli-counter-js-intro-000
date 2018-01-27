var katzDeliLine = [];

//shoud return their position in line start with 1
function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ` + katzDeliLine.length +' in line.'
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length > 0) {
    var slice = katzDeliLine.slice(0,1)
    katzDeliLine.shift();
    return `Currently serving ${slice}.`;
  } else{
    return "There is nobody waiting to be served!"
  }
}



function currentLine(katzDeliLine){
  if (katzDeliLine.length > 0) {
    var lineNow = "";
    for (let i = 0 ; i < katzDeliLine.length ; i++){
      if(katzDeliLine[katzDeliLine.length - 1] === katzDeliLine[i]){
        lineNow += ` ${i + 1}. ${katzDeliLine[i]}`
      }
      else {
        lineNow += ` ${i + 1}. ${katzDeliLine[i]+','}`
      }
      // return `The line is currently....`
    }
return `The line is currently:${lineNow}`
  }else {
    return 'The line is currently empty.'
  }

}
