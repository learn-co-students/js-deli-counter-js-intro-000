
function takeANumber(katzLine, name){
katzLine.push(name)
  return `Welcome, ${name}. You are number ${katzLine.length} in line.`

}

function currentLine(line) {
   var lineNum = [];
   if (line.length == 0) {
     return "The line is currently empty.";
   }
   for (var i = 0; i < line.length; i++) {
     lineNum.push(` ${i+1}. ${line[i]}`);
 	}
   return "The line is currently:" + lineNum;

 }

function nowServing(katzLine) {
  if (katzLine.length > 0){
    var firstInLine = katzLine.shift()
    return "Currently serving " + firstInLine + "."

} else {
  return 'There is nobody waiting to be served!'
}
}
