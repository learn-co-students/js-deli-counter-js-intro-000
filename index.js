function takeANumber(lineStatus, name){
  lineStatus.push(name)
  
  return `Welcome, ${name}. You are number ${lineStatus.length} in line.`
}
function nowServing(lineStatus){
  if(lineStatus.length > 0){
    
    return "Currently serving " + lineStatus.shift() + ".";
  }else{
    return "There is nobody waiting to be served!"
  }
  
}
function currentLine(lineStatus){
  let output = '';
  if(lineStatus.length > 0){
    for(let i = 0; i < lineStatus.length; i++){
    
    output += (i + 1) + ". " + lineStatus[i] + ", ";
    
      }
      output = output.slice(0, -2)
      
        return `The line is currently: ${output}`
  }else{
    return "The line is currently empty."
  }

}