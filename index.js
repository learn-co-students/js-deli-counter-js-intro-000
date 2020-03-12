function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0){
    return `Currently serving ${katzDeliLine.shift()}.`;

  }
  return "There is nobody waiting to be served!";

}

function currentLine(katzDeliLine){
  var string = ``;
  var list = [];

  if(katzDeliLine.length === 0){
    return `The line is currently empty.`;
  } else{

    for(var i = 0; i <katzDeliLine.length; i++){
      list.push(`${i + 1}. ${katzDeliLine[i]}`);
  	};
  }

  return `The line is currently: ${list.join(`, `)}`;
};
