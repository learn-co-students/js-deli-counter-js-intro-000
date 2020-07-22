function takeANumber(line,name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line){
  if(line.length==0){
    return "There is nobody waiting to be served!"
  }
  return `Currently serving ${line.shift()}.`
}
function currentLine(line){
  if(line.length==0){
    return "The line is currently empty."
  }
  let i=0
  var str="The line is currently:"
  while(++i<=line.length){
    str=str+`${i==1? ` ${i}`:`, ${i}`}. ${line[i-1]}`
  }
  return str
}
