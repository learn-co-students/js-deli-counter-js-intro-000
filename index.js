function takeANumber(line, name){
  //Pushes name into the array line
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line){
  if(line.length > 0){
    var next = line[0]
    line.shift()
    return `Currently serving ${next}.`
  }else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var string = ["The line is currently:"];

    for (var i = 0; i < katzDeliLine.length; i++) {
      var spot = i + 1;
      var name = katzDeliLine[i];

      if (i === katzDeliLine.length - 1) {
        string.push(spot + ". " + name);
      } else {
        string.push(spot + ". " + name + ",");
      }
    }
    return string.join(" ");
  }
}
