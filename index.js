/*var deliLine = ['Melly', 'Namsu', 'Jiyeon'];
var array = [];

function takeANumber(katzDeliLine, name) {
katzDeliLine.push(name)
return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var nowServing = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${nowServing}.`;
  }
  else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(katzDeliLine) {
if (katzDeliLine.length === 0) {
  return `The line is currently empty.`;
} else
var array = [];
for (let i = 0; i < katzDeliLine.length; i++) {
  array.push(`${i+1}. ${line[i]}`);
}
  return "The line is currently:" + array;
}*/

//current line as a string
var katzDeliLine = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var nowServing = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${nowServing}.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}

function currentLine(array) {
  if (array.length === 0) {
    return (`The line is currently empty.`)
  } else {
    var line = []
    for (let i = 0; i < array.length; i++) {
      line.push(` ${i + 1}. ${array[i]}`);
    }
    return (`The line is currently:${line}`);
  }
}
