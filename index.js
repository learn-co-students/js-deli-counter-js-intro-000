function takeANumber(katzDeli, name){
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeliLine){

  if(katzDeliLine.length>0){
    return `Currently serving ${katzDeliLine.splice(0,1)}.`;

  }
  else{
    return 'There is nobody waiting to be served!';
    }
  }


function currentLine(line){

  if(line.length === 0){
    return 'The line is currently empty.';
    }

  else if(line.length > 0){
    let i = 1;
    let numLine = [];
    while(i <= line.length){
    numLine.push(` ${i}. ${line[i-1]}`);
    i++;
    }
  return `The line is currently:${numLine}`;
  }
}
