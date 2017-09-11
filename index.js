
function takeANumber(katzDeliLine, person) {
  for (var i = katzDeliLine.length + 1; i <= person.length; i++) {
      katzDeliLine.push(person)
   return (`Welcome, ${person}. You are number ${i} in line.`)
  }
}



function nowServing(katzDeliLine) {
  for (var i = 0; i <= katzDeliLine.length; i++) {
    var array = [];
    if (katzDeliLine.length < 1) {
      array.push(`There is nobody waiting to be served!`);
      return array;
    } else if (katzDeliLine.length >= 1) {
      array.push(`Currently serving ${katzDeliLine[i]}.`);
      katzDeliLine.shift();
      return array;
    }
  }
}

function currentLine(line) {
  for (var i = 0, j = 1; i <= line.length; i++){
    var array = [];
    if (line.length < 1) {
      array.push(`The line is currently empty.`);

    } else if (line.length >= 1) {
      array.push(`The line is currently: ${j}. ${line[i]}, ${j+1}. ${line[i+1]}, ${j+2}. ${line[i+2]}`)
      return array;
    }
    return array;
  }
}
