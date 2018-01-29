var katzDeliLine =[];


function takeANumber(katzDeliLine, person){
  katzDeliLine.push(`${person}`);
  return (`Welcome, ${person}. You are number ${katzDeliLine.length} in line.`)//"Welcome, Ada. You are number 1 in line."
}


function nowServing(line){
  if(line.length===0){
    return "There is nobody waiting to be served!"
  }else{
    var currentServing = line[0];
    var newLine = line.shift();
    return `Currently serving ${currentServing}.`
  }

}







function currentLine(line){
  if(line.length==0){
    return "The line is currently empty."
  }else{
  var newArray = [];
  for (var i=0; i<line.length; i++){
    if(i===0){
      newArray.push(`${i+1}. ${line[i]}`);
    }else{
      newArray.push(` ${i+1}. ${line[i]}`);
    }


    }
    return (`The line is currently: ` + newArray);

}
  }
