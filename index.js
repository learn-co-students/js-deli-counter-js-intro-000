let katzDeli = [];

function takeANumber(line, name){
  line.push(name);
  let position = line.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
};

takeANumber(katzDeli, "Roisin");


function nowServing(line){
  if (line.length == 0){
    return "There is nobody waiting to be served!";
  }
  return `Currently serving ${line.shift()}.`;
};

nowServing(katzDeli);

katzDeli = new Object();
console.log(katzDeli);

function currentLine(line){
  if (line.length == 0){
    return "The line is currently empty.";
  }
  const numbersAndNames = []

  for (let i = 0, l = line.length; i < l; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`)
  }

  return `The line is currently: ${numbersAndNames.join(', ')}`
};

currentLine(katzDeli);
