var line = [];// 'Ada', 'Grace', 'Kent' ];

function takeANumber(line, name){
  line.push(name)
//  var position = (line.indexOf(name))+1
//  return (`Welcome, ${name}. You are number ${position} in line.`)
  return (`Welcome, ${name}. You are number ${line.length} in line.`)
}

function nowServing(line) {
  if (!line.length) {return ('There is nobody waiting to be served!')
  } 
  else { return(`Currently serving ${line.shift()}.`)
  }
}

function currentLine(line) {
  if (!line.length) {return ("The line is currently empty.")
  }
  else { 
    const placeAndName = []
    
    for (let i = 0, l = line.length; i < l; i++) {
    placeAndName.push(`${i + 1}. ${line[i]}`)
    }
    
    return `The line is currently: ${placeAndName.join(', ')}`
  }   
}

