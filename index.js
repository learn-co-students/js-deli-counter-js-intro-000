function takeANumber(line,name){
  line.push(name);
  var n = line.indexOf(name)+1;
  return `Welcome, ${name}. You are number ${n} in line.`
};

function nowServing(line){
  if (line.length===0){
    return "There is nobody waiting to be served!"
}else{
  var shifted = line.shift();
  return "Currently serving "+shifted+"."
}
}

function currentLine(line){
var current = "The line is currently: ";
if (line.length===0){
  return "The line is currently empty."
}else{
  for (var i=0;i<line.length;i++){
    if (i<line.length-1){
      current+=i+1+". "+ line[i]+ ", ";
}else{
      current+=i+1+". "+ line[i];
}
  }
}    return current;
}
