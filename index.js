function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  var index = katzDeliLine.indexOf("newName");
  index += 1;
  return index; // postiion in the line
}
