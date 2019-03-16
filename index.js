var katzDeliLine = []

function takeANumber (lineName, name){
  lineName.push(name);
  return `Welcome, ${name}. You are number ${lineName.length} in line.`;
}

function nowServing (lineName){
  if (lineName.length === 0)
    return "There is nobody waiting to be served!";
  else
    return `Currently serving ${lineName.shift()}.`;
}
function currentLine(lineName) {
  if (lineName.length===0) {
   return "The line is currently empty.";
 }
    var line = [];
    for (var i = 0; i < lineName.length; i++) {
    line.push(i + 1 + ". " + lineName[i])
 }
   return "The line is currently: " + line.join(", ");
 }
