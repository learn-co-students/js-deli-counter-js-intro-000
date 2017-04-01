var katzDeliLine = [];
var count = 0;

function takeANumber(katzDeliLine, name) {
  var count = 0;
  katzDeliLine.push(name);
  count = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${count} in line.`

}

function nowServing(katzDeliLine) {
  var current;
  if (katzDeliLine.length >=1) {
    current =`Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift();
  }
  else {
    current = "There is nobody waiting to be served!";
  }
return current;
}

function currentLine(katzDeliLine) {
  var currentLine="The line is currently:";

    if (katzDeliLine.length >=1) {
      for (let i=0;i<katzDeliLine.length; i++){
        currentLine = `${currentLine} ${i+1}. ${katzDeliLine[i]},`
      }
    }
    else {
      currentLine = "The line is currently empty. ";
    }
  return currentLine.slice(0, -1);;
}
