var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
}

function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);
}

function currentLine (katzDeli) {
  var str = `The line is currently: `;
  var newLine  = [];
  if (katzDeli.length === 0) return "The line is currently empty."
  else {
    for (var i = 0; i < katzDeli.length; i++) {
      newLine[i] = `${[i+1]}. ${katzDeli[i]}`; 
    }
    str += newLine.join(`, `)
    return str
  }
}