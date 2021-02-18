function takeANumber(line, name) {
	line.push(name)
    let number = line.length
    return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length != 0) {
  	let name = katzDeliLine[0]
  	katzDeliLine.shift()
  	return `Currently serving ${name}.`;
  } else {
    return `There is nobody waiting to be served!`;
  };
}

function currentLine(katzDeliLine) {
  let newLine = [];
 if (katzDeliLine.length != 0) {
  for (var i = 0; i < katzDeliLine.length; i++) {
  	 newLine.push(`${i + 1}. ${katzDeliLine[i]}`);
   } 
   return `The line is currently: ${newLine.join(", ")}`;
 } else {
  	return `The line is currently empty.`;
  }
}