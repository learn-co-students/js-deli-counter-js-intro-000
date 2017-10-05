

var katzDeli = []
function takeANumber(katzDeli, newPerson) {
  katzDeli.push(newPerson);
  return `Welcome, ${newPerson}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    return `Currently serving ${katzDeli.shift()}.`
  }else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeli) {
  if (katzDeli.length > 0) {
    // return `The line is currently: `
    for (var i = 0; i < katzDeli.length; i++) {
      return `The line is currently: ${katzDeli.indexOf(katzDeli[i]) + 1}. ${katzDeli[i]}`
    }
  }else {
    return 'The line is currently empty.'
  }
}


function currentLine(katzDeli) {
  if (katzDeli.length > 0) {
    var newArry = [];
    for (var i = 0; i < katzDeli.length; i++) {
	     newArry.push(` ${katzDeli.indexOf(katzDeli[i]) + 1}. ${katzDeli[i]}`)
    } return `The line is currently:${newArry}`
  }else {
    return 'The line is currently empty.'
  }
}
