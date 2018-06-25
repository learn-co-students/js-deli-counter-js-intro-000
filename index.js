function takeANumber (katzDeliLine, personName) {
  katzDeliLine.push(personName);
  console.log(`Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`);
  return `Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`;
}

takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");

function nowServing (katzDeliLine) {
  if (!katzDeliLine.length) {console.log("There is nobody waiting to be served!");
  return "There is nobody waiting to be served!";}
  else {
  return `Currently serving ${katzDeliLine.shift()}.`;}
}
nowServing(katzDeliLine);

function currentLine(line){
  if(!line.length) {
    return "The line is currently empty.";
  }
  var lineNamesandNumbers = [];

  for(var i=0; i<line.length; i++) {
    lineNamesandNumbers.push(i+1 + ". "+ line[i]);
  }
  console.log("The line is currently: " + lineNamesandNumbers)
  return "The line is currently: " + lineNamesandNumbers.join(', ');
}
