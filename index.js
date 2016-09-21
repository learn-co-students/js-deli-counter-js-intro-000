function takeANumber(katzDeli, person) {
	katzDeli.push(person)
	return ("Welcome, " + person + `. You are number ${katzDeli.length} in line.`)
}

function nowServing(katzDeli) {
	if (katzDeli.length === 0) {
		return "There is nobody waiting to be served!"
	} else {
		return `Currently serving ${katzDeli.shift()}.`
	}
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {
    var lineStatus = "The line is currently: "
    for (let i = 0; i < line.length - 1; i++) {
      lineStatus = lineStatus + `${i+1}. ${line[i]}, `
    }
    lineStatus = lineStatus + `${line.length}. ${line[line.length - 1]}`
    return lineStatus
  }
}
