function takeANumber(katzDeliLine,name){
var curnuminline = katzDeliLine.length
katzDeliLine[curnuminline] = name
  return `Welcome, ${name}. You are number ${curnuminline + 1} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length===0) {return 'There is nobody waiting to be served!'}
  else{return `Currently serving ${katzDeliLine.shift()}.`}
}

function currentLine(katzDeliLine){
var printline = ""
var i = 0;
  if (katzDeliLine.length==0) {return "The line is currently empty."}
    else{ for (i=0;i<katzDeliLine.length;i++){
      printline = printline + ` ${i + 1}. ${katzDeliLine[i]},`  
    }
    }
        return `The line is currently: ${printline.substr(1,printline.length-2)}` 
}