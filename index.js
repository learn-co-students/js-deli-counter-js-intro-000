var katzDeli = [];

function takeANumber(katzDeli, name) {
  katzDeli.push(name);
  return `Welcome, ` + name + `. You are number ` + katzDeli.length + ` in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
    var current = katzDeli[0]
    katzDeli.shift()
    return `Currently serving ` + current + `.`;
    }
  }
function currentLine(katzDeli) {
  if (katzDeli.length === 0) {
    return `The line is currently empty.`
  } else {
    for (let i = 1; i < katzDeli.length; i++) {
    var yum = katzDeli.push(i + katzDeli[i])
    }
    return `The line is currently: ` + yum;
  }
}
