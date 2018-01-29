var katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  var lineNumber = katzDeliLine.length;
  return('Welcome, ' + name + '. You are number '+ lineNumber + ' in line.');

}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length !=0){
    var say = ('Currently serving '+ katzDeliLine[0] + '.');
    katzDeliLine.shift();
    return (say)
  }else{
    return('There is nobody waiting to be served!')
  }

}

function currentLine(katzDeliLine) {
  //console.log(katzDeliLine);
  if(katzDeliLine.length != 0){
    for (var i = 0; i < katzDeliLine.length; i++) {
      katzDeliLine[i] = (' ' + (i+1) + '. ' + katzDeliLine[i]);
    }
    return('The line is currently:' + katzDeliLine)
  }else {
    return('The line is currently empty.')
  }
}
