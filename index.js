var katzDeli = [];

function takeANumber (katzDeli, name) {
  katzDeli.push(name);
  var index = katzDeli.indexOf(name) + 1;
    return `Welcome, ${name}. You are number ${index} in line.`;
}

function nowServing(katzDeli) {
  if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
  var serving = katzDeli.shift();
    return `Currently serving ${serving}.`;
}
}

function currentLine(katzDeli) {
  if(katzDeli.length === 0) {
    return "The line is currently empty.";
  } else {
  var lineArray = ["The line is currently: "];
	for (var i = 0; i < (katzDeli.length -1); i++) {
  		lineArray.push( (i + 1) + ". " + katzDeli[i] + ", " );
		}
	for (var j = (katzDeli.length-1); j < katzDeli.length; j++) {
		lineArray.push((j + 1) + ". " + katzDeli[j]);
    }
	var lineString = lineArray.join('');
	return lineString;
	}
}
    
		