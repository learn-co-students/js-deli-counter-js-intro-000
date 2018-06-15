var katzDeli = [];

function takeANumber (katzDeli, name) {
  var position = katzDeli.length + 1;
  katzDeli.push(name);
 var response = "Welcome, " + name + ". You are number " + position + " in line.";
  return response;
}

function nowServing(katzDeli) {
  let i = 0;
  while (i < katzDeli.length) {
    i++;
  }
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else 
  return (`Currently serving ${katzDeli.shift()}.`);
}

function currentLine (line) {
  for (let i = 0; i < katzDeli.length; i++) {
    line.push(` ` +[i+1]+`.` + katzDeli[i])
  }
if (katzDeli.length === 0) {
  return "The line is currently empty.";
} else
return ("The line is currently:" + line);
}