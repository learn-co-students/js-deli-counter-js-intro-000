function takeANumber(line,name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

function nowServing(line){
  if (line.length === 0){
    return "There is nobody waiting to be served!";
  }
  else {
    var next = line[0];
    line.shift();
    return `Currently serving ${next}.`;
  }
}

function currentLine(line){
  if (line.length === 0){
    return "The line is currently empty.";
  }
  else {
    var output = "The line is currently: ";
    let i = 0;
    while (i < line.length){
        output += `${i+1}. ${line[i]}, `;
        i += 1;
    }
  }
  return output.slice(0, output.length - 2);
}

// function currentLine(line){
//   if (line.length === 0){
//     return "The line is currently empty.";
//   }
//   else {
//     let i = 0;
//     var output = "The line is currently: ";
//     while (i < line.length){
//       if (i < line.length - 1){
//         output += `${i+1}. ${line[i]}, `;
//         i += 1;
//       }
//       else {
//         output += `${i+1}. ${line[i]}`;
//         i += 1;
//       }
//     }
//   }
//   return output;
// }
