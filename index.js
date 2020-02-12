function takeANumber(line, name){
   line.push(name);
    return (`Welcome, ${name}. You are number ${line.length} in line.`)
  
    return array
}

function nowServing(line){
  if (line.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    var name = line.shift()
  return `Currently serving ${name}.`
}
}

function currentLine(line){
  if (line.length < 1) {
    return "The line is currently empty.";
      } else {
        var names = [];
        for (var index = 0; index < line.length; index++) {
            names.push(`${index+1}. ${line[index]}`)
        }
          return "The line is currently: " + names.join(", ")
          
          
          //  return `The line is currently: 1. ${line[0]}, 2. ${line[1]}, 3. ${line[2]}`
      }
      } 
 
 
 
   /* function currentLine(line){
      
      if (line.length = array.length) {
      `The line is currently: 1.${name}, 2. ${name}, 3. ${name}`
      } else {
         (line.length <=1); {
        "The line is currently empty." ||  `Currently serving ${name}.`
        }
      }
*/
    