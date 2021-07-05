var katzDeli = [];

function takeANumber(lineOfPeople, newName) {
    lineOfPeople.push(newName);
    return `Welcome, ${newName}. You are number ${lineOfPeople.length} in line.`
  }

takeANumber(katzDeli, 'Ada');
takeANumber(katzDeli, 'Grace');
takeANumber(katzDeli, 'Kent');

// function functionName() {
//
// }
function nowServing(lineOfPeople) {
  if (lineOfPeople.length < 1) {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${lineOfPeople.shift()}.`;
  }
}

function currentLine(lineOfPeople) {
  if (lineOfPeople.length < 1) {
    return 'The line is currently empty.'
  } else {
    var line = '';
    for (let i = 0; i < lineOfPeople.length; i++) {
      line = line + `${i + 1}. ${lineOfPeople[i]}`;
      if (i < lineOfPeople.length - 1) {
        line = line + ', ';
      }
    }
    return `The line is currently: ${line}`;
  }
}

currentLine(katzDeliLine);
