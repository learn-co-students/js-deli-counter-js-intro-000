var katzDeliLine = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person);
  return `Welcome, ${katzDeliLine[katzDeliLine.length -1]}. You are number ${katzDeliLine.length} in line.`;
};


function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
  else {
    return "There is nobody waiting to be served!";
  }
};

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var result = "The line is currently:";
    for (var i = 0; i < katzDeliLine.length; i++) {
      result += ` ${i+1}. ${katzDeliLine[i]}`;
      result += katzDeliLine.length -1 === i? "" : ",";
    }
    return result;
  }
  else {
    return "The line is currently empty.";
  }

};
