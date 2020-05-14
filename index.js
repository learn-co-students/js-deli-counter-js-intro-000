function takeANumber(line,name){

line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line){
  if (line.length===0){
    return "There is nobody waiting to be served!"
  }else{
    const servee=line.shift()
    return `Currently serving ${servee}.`
  }
}

function currentLine(line){
  if (line.length===0){
    return "The line is currently empty."
  }else{
    let i=0
    var announcement=`The line is currently: `
    while (i<line.length-1) {
      announcement=announcement.concat(`${i+1}. ${line[i]}, `)
      //announcement.push(`${i+1}. ${line[i]}, `)
      i++
    }
      announcement=announcement.concat(`${i+1}. ${line[i]}`)
      return `${announcement}`
        }
      }
