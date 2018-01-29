var katzDeli = [];


function currentLine(line) {
  if (!line.length) {
    return `The line is currently empty.`
  };
  const numbersAndNames = []
  for (let i=0, 1=line.length; i<1; i++) {
    numbersAndNames.push(`${i+1}. ${line[i]}`)
  };
  return `The line is currently: ${numbersAndNames.join(',')}`
};

function nowServing(line) {
  if (!line.length) {
    return `There is nobody waiting to be served!`
  } else {
    return `Currently serving ${line.shift()}.`
  };
};

function takeANumber(curentLine, name) {
  line.push(name)
  return `Welcome, ${name}.  You are number ${line.length} in line.`
};
