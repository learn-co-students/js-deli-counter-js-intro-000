function takeANumber(queue, name) {
  queue.push(name)
  var position = queue.indexOf(name)
  return `Welcome, ${name}. You are number ${position + 1 } in line.`
}

function nowServing(queue) {
  if (queue.length > 0) {
    var current = queue.shift()

    return `Currently serving ${current}.`
  }
  else {
    return 'There is nobody waiting to be served!'
  }
}

function currentLine(queue){
  if (queue.length > 0){
    var lineStatus = []
    for (let i = 0; i < (queue.length); i++) {
       lineStatus.push(` ${i+1}. ${queue[i]}`)
    }
    return `The line is currently:${lineStatus}`
  }
  else {
    return 'The line is currently empty.'
  }

}
