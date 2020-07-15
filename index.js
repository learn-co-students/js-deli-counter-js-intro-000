function takeANumber(line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}
function nowServing(line){
  if(line.length > 0){
    var next = line[0]
    line.shift()
    return `Currently serving ${next}.`
  }else {
    return 'There is nobody waiting to be served!'
  }
}
function currentLine(line){
  if (line.length > 0){
    var inc = `The line is currently: `
      for (let i = 0; i < line.length; i++){
         inc += `${i+1}. ${line[i]}`
          if (i != line.length-1){
           inc += `, `;
          }
        }
      } else {
    inc = 'The line is currently empty.'
    }
  return inc
  }
