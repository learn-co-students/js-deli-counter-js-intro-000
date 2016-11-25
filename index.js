
function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length ==0){
    return "There is nobody waiting to be served!"
  }else{
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}

function currentLine(katzDeliLine){
  var report = "The line is currently: "
  var i = 0
  if(katzDeliLine.length==0){
    return "The line is currently empty."
  }else{
    do{
      console.log(i + ":" + report + ":" + katzDeliLine[i])
      report = report.concat(`${i + 1}. ${katzDeliLine[i]}, `);
      i++
    }while (i<katzDeliLine.length);
    return report.slice(0,report.length-2)
  }
}
