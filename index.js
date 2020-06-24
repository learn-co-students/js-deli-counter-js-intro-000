var takeANumber =(line,newName) => {
  line.push(newName)
  return(`Welcome, ${newName}. You are number ${line.length} in line.`)
}

var nowServing = (line) => {
 if (line.length !== 0) {
 var now = line.shift()
 return `Currently serving ${now}.`
} else {
return 'There is nobody waiting to be served!'
}
}
var currentLine = (katzDeliLine) =>{
  var current = 'The line is currently:'
  if (katzDeliLine.length !==0){
    for(let i=0;i<katzDeliLine.length;i++){
      if (i!== katzDeliLine.length-1){
      current = `${current} ${i+1}. ${katzDeliLine[i]},`
    }else{
      current = `${current} ${i+1}. ${katzDeliLine[i]}`

    }}
  } else {
    return 'The line is currently empty.'
  }
  return current
}
