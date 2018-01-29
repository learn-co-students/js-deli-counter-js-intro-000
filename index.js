function takeANumber(line, name) {
  line.push(name);
  return "Welcome, " + name + ". You are number " + line.length + " in line.";
}

function nowServing(line) {
  if (line.length>0) {
    var temp = line[0];
    line.shift();
    return "Currently serving " + temp + ".";
  }else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(line) {
  if(line.length > 0){
    var a = [];
    for (var i = 1; i-1 < line.length; i++) {
      a.push(i + ". " + line[i-1]);
    }
    var string = "The line is currently: "
    var i = 0;
    while (i<a.length) {
      string += a[i];
      if(i+1 < a.length){
        string += ", ";
      }
      i++;
    }
    return string;
  }else{
    return "The line is currently empty.";
  }
}
