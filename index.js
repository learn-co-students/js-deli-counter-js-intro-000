function takeANumber(deli, name){
	deli.push(name);
	return `Welcome, ${name}. You are number ${deli.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
  return "Currently serving " + katzDeliLine.shift(katzDeliLine[0]) + ".";

}
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
  	return "The line is currently empty."
  } else {
  	var currLine = [];
  for (var i = 0; i < katzDeliLine.length; i++) {
     currLine.push(` ${i+1}. ${katzDeliLine[i]}`);
 	}
   return "The line is currently:" + currLine ;
  }
}
