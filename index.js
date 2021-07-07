var katzDeli = [];

function takeANumber(line, name){
  line.push(name)
  line
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){

  if (!line.length){
      return "There is nobody waiting to be served!";
    } else {
      var n = line[0]
      line.shift()
      return `Currently serving ${n}.`;
    }

}

function currentLine(line){

  if (!line.length) {
    return "The line is currently empty.";
  }else {
    var s = "The line is currently:"
    var c = 1;
    for (var i = 0; i < line.length; i++) {

      s += ` ${i+1}. ${line[i]}`;
      if(c < line.length){
      s+= (",");
      c++;
  }
      }
    
    return s;
}
}
