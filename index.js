
function takeANumber (katzDeli, name) {
  katzDeli.push(name)
  let number = katzDeli.indexOf(name) + 1
  return `Welcome, ${name}. You are number ${number} in line.`
  }
function nowServing(katzDeli) {
  if (katzDeli.length > 0) {
    return "Currently serving " + katzDeli.shift() + ".";
  } else {
    return "There is nobody waiting to be served!";
  }
}
function currentLine(katzDeli) {
  let line = []
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
    } else {
    for (let i =0; i < katzDeli.length; i++) {
      line += (i+1)+ `. `+ katzDeli[i]+ ", "
    }
    line = line.slice(0,line.length-2)
      return "The line is currently: " + line
  }
}
