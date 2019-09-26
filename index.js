function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return 'Welcome, ' + name + '. You are number ' + (katzDeliLine.length) + ' in line.'
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    return 'Currently serving ' + deliLine.shift() + '.';
  } else {
       return 'There is nobody waiting to be served!'
     }
  }

function currentLine(line) {
  let order = []
   if (line.length > 0) {

   for (let i = 0; i < line.length; i++) {
     var element = `${(line.indexOf(line[i]) +1)}. ${line[i]}`;
     order.push(element)
   } return 'The line is currently: ' + order.join(', ');
} return 'The line is currently empty.'
}
