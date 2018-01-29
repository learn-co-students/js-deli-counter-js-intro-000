var katzDeli = [];

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  let x = katzDeliLine.indexOf(name);
  x = x + 1
  return "Welcome, " + name + ". You are number " + x + " in line.";
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length!=0){
  let x = katzDeliLine[0]
  katzDeliLine.splice(0,1);
  return "Currently serving " + x + ".";
  }
  else{
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line){
  if(line.length == 0){
    return "The line is currently empty."
  }
  else{
    for(let i = 0;i < line.length;i++){
      let x = line[i];
      let y = i+1;
      x = " " + y +". "+x;
      line[i] = x;
    }
  }
  return "The line is currently:" + line;
}
