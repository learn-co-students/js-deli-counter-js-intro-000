var katzDeliLine = [];
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)

  return "Welcome, " + name + ". You are number " + katzDeliLine.length +" in line."
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length>0) {
    var name = katzDeliLine[0]
      katzDeliLine.shift()
    return "Currently serving "+ name + "."

  }
  else return "There is nobody waiting to be served!"


}
function currentLine(katzDeliLine) {
  if(katzDeliLine.length>0) {

    /*let sentence = "The line is currently: "
    let j = 1
    sentence = sentence + j
    return sentence }
    */
  let sentence = "The line is currently: "
    for(let i=0;i<katzDeliLine.length-1;i++) {

      let j=i+1
      sentence = sentence + j + ". "+katzDeliLine[i] +", "
    }
    sentence = sentence + katzDeliLine.length + ". "+katzDeliLine[katzDeliLine.length-1]
    return sentence
}
else {return "The line is currently empty."}

}
