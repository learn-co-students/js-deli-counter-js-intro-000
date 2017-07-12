var katzDeli = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
};

function nowServing(katzDeliLine){
  if (!katzDeliLine.length){
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${katzDeliLine.shift()}.`
}

function currentLine(katzDeliLine){
  if (!katzDeliLine.length){
    return "The line is currently empty."
} else {
  var results = "The line is currently: "
  for (var i = 0; i < katzDeliLine.length; i++) {
    results += (i + 1) + ". " + katzDeliLine[i]
    if (i != katzDeliLine.length - 1) {
      results += ", "
    }
  }
  return results
}
}
