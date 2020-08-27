
function takeANumber(line,name){
line.push(name)
  return(`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(line){
  if(line.length === 0){
    return("There is nobody waiting to be served!")
  }
  else{
    return (`Currently serving ${line.shift()}.`)
  }
}

function currentLine(line){
  if (line.length === 0){
    return("The line is currently empty.")
  }
  else{
    //var result = ('The line is currently:')
    var Q = []
    for (let i=0; i < line.length; ++i){
    Q[i] = [` ${i+1}. ${line[i]}`]
    //result = result+` ${i+1}. ${line[i]},`
    }
    //return(result)
    return('The line is currently:'+Q)
  }
}
