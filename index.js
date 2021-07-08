// customer enters the deli
function takeANumber(people, name) {
  people.push(name); // add person to the line
  return `Welcome, ${name}. You are number ${people.length} in line.`;
}

// serve the first person in line
function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!"; // nobody in line
  }
  
  return `Currently serving ${katzDeliLine.shift()}.`; // ${katzDeliLine[0]}
}

function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty.";
  }
  
  let prompt = `The line is currently:`;
  let i = 0
  while (i < line.length) {
    if (i === line.length - 1) {
      prompt += ` ${i+1}. ${line[i]}`;
    } else {
      prompt += ` ${i+1}. ${line[i]},`;
    }
    i++;
  }
  
  return prompt;
}