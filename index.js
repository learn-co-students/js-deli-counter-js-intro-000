
function takeANumber(katzDeliLine, name){
katzDeliLine.push(name)
  return ("Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.")
}
function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else if (katzDeliLine.length > 0){
    return "Currently serving " + katzDeliLine.shift() + "."
  }
}
function currentLine(line){
  if (line.length > 0){
    var sentences = []
    sentences.push("The line is currently:")
    var i = 0
    for (i = 0; i < line.length; i++){
      sentences.push((i + 1) + ". " + line[i])
    }
    sentences[0] = sentences[0] + " " + sentences[1] +", " + sentences[2] + ", " + sentences[3]
 return sentences[0]}
 else if (line.length === 0){
    return "The line is currently empty."
  }
}
