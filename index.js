/*takeANumber - add their name to an array, the position of that array + 1 is their number in the line.
If the array is > 0 then there must be someone in the queue.
Return whatever value is in that position.
*/


function takeANumber(line, name){
  line.push(name) // Adds their name to the end of the array
  return (`Welcome, ${name}. You are number ${line.length } in line.`) // Returns a welcome, and the length of the array(don't know how to make it find their name)
}

function nowServing(line){
  if (line.length > 0) {
    return("Currently serving " + line.shift() + ".");
  } else {
    return "There is nobody waiting to be served!"
  }
}



function currentLine(line){
  if (line.length > 0) { // If there is 1 or more
    var lineNum = [] // Create an array of the names & punctuation
    for (var i = 0; i < line.length; i++) {
      lineNum.push(" " + [i + 1] + ". " + line[i]) //Push a space and number and . before their name 
      }
      return ("The line is currently:" + lineNum)
  } else {
    return "The line is currently empty."
  }
}
