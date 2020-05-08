

function takeANumber(line, name) {
    line.push(name)
   
    let meg = `Welcome, ${name}. You are number ${line.length} in line.`
    return meg

}

function nowServing(line) {
    
    if (line.length === 0) {
       return "There is nobody waiting to be served!";
    } 
       return `Currently serving ${line.shift()}.`;
}
function currentLine(line) {
    if (!line.length) {
       return "The line is currently empty.";
    }
      const numbersAndNames = [];

      for (let i = 0, l = line.length; i < l; i++) {
        numbersAndNames.push(`${i + 1}. ${line[i]}`);
      }
      return `The line is currently: ${numbersAndNames.join(", ")}`;

}
