let katzDeliLine = [];
function takeANumber(deli, name) {
  deli.push(`${name}`);
  return (`Welcome, ${name}. You are number ${deli.length} in line.`);
}
function nowServing() {
  let i = 0;
  while(i < deli.length);
  i++;
}
if (deli.length === 0) {
  return "There is nobody waiting to be served!";
} else {
  return (`now serving ${deli.shift()}.`);
}
let line = [];
 function currentLine(deli) {
  let i = 0;
  while (i < deli.length) {
    line.push(` `+[i+1]+`. `  + deli[i])
    i++;
  }
  if (deli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}