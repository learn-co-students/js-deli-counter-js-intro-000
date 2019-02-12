function takeANumber(line, name) {
 return `Welcome, ${name}. You are number ${line.push(name)} in line.`; 
}


function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
    } else { 
      return `Currently serving ${katzDeliLine.shift()}.`;
      }
}


function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
     var string = "The line is currently: ";
     for (var i = 0; i < line.length; i++) {
       if (i < line.length - 1) {
         string = string + (i + 1) + ". " + line[i] + ", ";
       } else {
          string = string + (i + 1) + ". " + line[i];
       }
    }
    return string;
  }
}








