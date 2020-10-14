var katzDeliLine = [];

function takeANumber (katzDeliLine, name) {
  var temp_name = name;
  katzDeliLine.push(`${name}`);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(temp_name) + 1} in line.`;
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return "Currently serving " + katzDeliLine.shift() + ".";
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  var line = "";
  for(let i = 0; i < katzDeliLine.length; i++) {
    if(i < katzDeliLine.length - 1){
      line += (` `+[i+1]+`. ` + katzDeliLine[i] + `,`);
    }
    else {
      line += (` `+[i+1]+`. ` + katzDeliLine[i]);
    }
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  else {
    return (`The line is currently:` + line);
  }
}
