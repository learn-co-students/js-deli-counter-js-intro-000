function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name)
  return 'Welcome, '+name+'. You are number '+katzDeliLine.length+' in line.'
}
function nowServing(katzDeliLine){
  return katzDeliLine.length>0?('Currently serving '+katzDeliLine.shift())+'.':'There is nobody waiting to be served!'
}
function currentLine(katzDeliLine){
  var seq = (function(){
    var str =''
    for(let i=0;i<katzDeliLine.length;i++)
      str+= (i===0?'':',')+' '+(i+1)+'. '+katzDeliLine[i]
    return str
  })()
  return 'The line is currently'+ (katzDeliLine.length>0?':'+seq:' empty.')
}
