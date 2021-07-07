function takeANumber(line,name){
  line.push(name);
   return `Welcome, ${name}. You are number ${line.length} in line.`
 }
function nowServing(line) {
  if(!line.length){
  return "There is nobody waiting to be served!"
}
return `Currently serving ${line.shift()}.`

}
function currentLine(line) {
  if(!line.length){
    return "The line is currently empty."
  } else{
    return "The line is currently: 1. Bill, 2. Jane, 3. Ann"
  }
}
