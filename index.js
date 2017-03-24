var line = [];// 'Ada', 'Grace', 'Kent' ];

function takeANumber(name){
  line.push(name)
  //var position = (line.indexOf(name))+1
  //return (`Welcome, ${name}. You are number ${position} in line.`)
  return (`Welcome, ${name}. You are number ${line.lenght} in line.`)
}

//y = (x.indexOf(4))+1

function nowServing() {
    if (line === []) {return ('There is nobody waiting to be served!')
  } else { return(`Currently serving ${line[0]}.`)
       line.shift()};
    }

function currentLine(line) {
  
}

