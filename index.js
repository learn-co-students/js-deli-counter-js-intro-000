var katzDeliLine = [];
var otherDeli = ["Steven", "Blake", "Avi"];

function takeANumber(line,name) {
  line[line.length] = name
  return `Welcome, ${name}. You are number ${line.length} in line.`
  }
  
  
function nowServing(line) {

  if (line.length>0) {
    var person = line[0]
    line.shift()
    return `Currently serving ${person}.`; }
  else { return "There is nobody waiting to be served!" }  
  
  
}
  

function currentLine(line) { 
    var str = "The line is currently: "
    if (line.length>0) {
      for (let i = 0; i < line.length; i++) {
        str += `${i+1}. ${line[i]}`
        if (i + 1 < line.length) { str += ", "}
        
      }

    return str
    }
    
    
    
   else { return "The line is currently empty." }  
  
  
}



console.log(currentLine(otherDeli))
console.log(currentLine(katzDeliLine))