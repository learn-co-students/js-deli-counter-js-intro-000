var katzDeli = [];

function takeANumber(line, name){
  var lineL = line.push(name);
    return `Welcome, ${name}. You are number ${lineL} in line.`
}

function nowServing(line){
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'

  } else {
	return `Currently serving ${line.shift()}.`
}
}

function currentLine(names){
  if (names.length === 0 ){
  return "The line is currently empty."
}

  var line = []
  for (var i = 0; i < names.length;){
      line.push(' ' + [i + 1] + '. ' + names[i++])

  }
  return `The line is currently:${line}`
}
