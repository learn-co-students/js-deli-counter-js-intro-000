var katzDeliLine = [];

var takeANumber = function(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

var nowServing = function(line){
  if (line.length === 0) return "There is nobody waiting to be served!"
  else {
    var next = line[0];
    line.shift();
    return `Currently serving ${next}.`
  }
}

var currentLine = function(line){
  if (line.length === 0) return "The line is currently empty."
  else {
    var response = "The line is currently:"
    for (var i = 0; i < line.length; i++) {
      if (i === 0) response += ` ${i+1}. ${line[i]}`;
      else {response += `, ${i+1}. ${line[i]}`};
    }
    return response
  }
}
