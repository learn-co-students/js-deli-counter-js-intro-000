function takeANumber(queue, customer){
  queue.push(customer);
  return `Welcome, ${customer}. You are number ${queue.length} in line.`
}

function nowServing (queue){
  if (queue.length > 0){
    return "Currently serving " + queue.shift() + "."

  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(queue){
  var lineup = []
  if (queue.length > 0 ){
    for (var i = 0 ; i <= queue.length - 1 ; i++){
      lineup.push(` ${i+1}. ${queue[i]}`)
    }

    return "The line is currently:" + lineup
  } else {
    return "The line is currently empty."
  }
}
