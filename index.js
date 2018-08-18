function takeANumber(line,name) {
line.push(name);
return 'Welcome, '+ name+ '. You are number ' + line.length +' in line.'

}

function nowServing (katzDeliLine) {

  var nobody;
if (katzDeliLine.length === 0) {
    nobody = "There is nobody waiting to be served!"
}else{
  nobody = "Currently serving "+ katzDeliLine[0] +".";
  katzDeliLine.shift()
}
  return nobody;
}

 function currentLine(line) {
    if (line.length === 0) {
      return "The line is currently empty."
    }
    var result = [];

    for (var i = 0; i < line.length; i++) {
      result.push( (i+1) + ". " + line[i])
    }

    var finalAnswer = result.join(', ')

    var string = 'The line is currently: ';

    return string + finalAnswer;

 }
