function takeANumber(line, name) {
  var message = `Welcome, ${name}. You are number ${line.length + 1} in line.`;
  line.push(name);
  return message;
}
 function nowServing(line){
   var firstPerson = line.shift();
   var message = "";
   if (line.length === 0) {
     message = "There is nobody waiting to be served!";
   } else {
     message = `Currently serving ${firstPerson}.`;
   }
   return message;
 }

function currentLine(line) {
  var message = "";
  if (line.length === 0) {
    message = "The line is currently empty.";
  } else {
    message = "The line is currently: "
  }
  for (let i = 0; i < line.length; i++) {
    message += `${i+1}. ${line[i]}`;
    if (i < line.length - 1) {
      message += ", ";
    }
  }
  return message;
}
