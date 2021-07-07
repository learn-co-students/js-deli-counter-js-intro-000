var katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var number = katzDeliLine.indexOf(name) + 1;
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!";
  }
  var newArr = katzDeliLine.slice(0);
  katzDeliLine.shift();
  return `Currently serving ${newArr[0]}.`;
}

function currentLine(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty.";
  }
  else{
    var result = '';
    for(var i = 0; i < katzDeliLine.length; i++){
      var person = ` ${i + 1}. ${katzDeliLine[i]},`;
      result = result + person;
    }
    result = result.slice(0, -1);
    return "The line is currently:" + result;
  }
}
