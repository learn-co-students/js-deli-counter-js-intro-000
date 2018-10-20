function takeANumber(array, customer){
  array.push(customer)
  return (`Welcome, ${customer}. You are number ${array.length} in line.`)
}
function currentLine(array){
  if (array && array.length>=1) return (`The line is currently: 1. ${array[0]}, 2. ${array[1]}, 3. ${array[2]}`)
  else return "The line is currently empty."
}
function nowServing (array){
  if (array && array.length >=1){ var placeholder = [array[0]]
  array.shift()
    return(`Currently serving ${placeholder[0]}.`)
  } else return "There is nobody waiting to be served!"
}