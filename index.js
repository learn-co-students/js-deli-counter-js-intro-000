function takeANumber(currentLine,newPerson) {
  currentLine.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${currentLine.length} in line.`;
}

var nowServing = (thisLine) => {
  var howMany = thisLine.length;
  var person = thisLine.shift();
  return howMany === 0 ? "There is nobody waiting to be served!" : `Currently serving ${person}.`;
  //if (howMany === 0 ) {
    //return "There is nobody waiting to be served!";
  //} else {
    //return `Currently serving ${person}.`;
  //}
}

var currentLine = (nowLine) => {
var phrase = "The line is currently: ";
  if(nowLine.length === 0) {
    return "The line is currently empty.";
  } else {
  for (let i=0;i<nowLine.length;i++) {
    phrase = `${phrase}${i+1}. ${nowLine[i]}${i===nowLine.length-1 ? "" : ", "}`;
  }
  return phrase;
}
}
