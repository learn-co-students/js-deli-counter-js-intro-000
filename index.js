function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  let next = "There is nobody waiting to be served!"
  if(line.length>0) {
    next = `Currently serving ${line[0]}.`;
    line.shift();
  }
  return next;
}

function currentLine(line){
  let whozup = " empty."
  let names = ":";
  for(let i=0; i<line.length; i++) {
    names = names + ` ${i+1}. ${line[i]}${i<line.length-1 ? "," : ""}`;
    if(i===line.length-1){
      whozup = names;
    }
  }
  return `The line is currently${whozup}`;
}
