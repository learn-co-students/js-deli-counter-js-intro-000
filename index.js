var katzDeli = [];
var katzDeliLine=[];

function takeANumber(katzDeliLine, Name){
  katzDeliLine.push(Name)
  return (`Welcome, ${Name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing(katzDeliLine){
  var message;
  if (katzDeliLine.length>0){
    message=`Currently serving ${katzDeliLine[0]}.`
    }else{
    message="There is nobody waiting to be served!"
      }

  katzDeliLine.shift()
  return message
}

function currentLine(katzDeliLine){
  var message="The line is currently: ";

  if (katzDeliLine.length>0){
    for (var i=0;i<katzDeliLine.length;i++){

        message=message+(`${i+1}. ${katzDeliLine[i]}, `)
      }
      message=message.slice(0,message.length-2 )
    }else{

    message="The line is currently empty."
      }



  return message

}
