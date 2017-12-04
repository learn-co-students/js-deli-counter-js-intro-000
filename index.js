let katzDeli = [];

function takeANumber(array, name ) {
    //here I am having it pass an array and a name
    //I am telling it to push the name into the line that is there.
    //the length will always be one more than the index
    //return a message with the name and the length of the line bc it got pushed last
    array.push(name)
    return ('Welcome, '+ name + '. You are number ' + array.length + ' in line.')
}

function nowServing(array) {
  if (!array.length) {
    return("There is nobody waiting to be served!")
  } else {
      return ('Currently serving ' + array.shift() + '.')
    }
}


function currentLine(array) {
  if(!array.length) {
    return ("The line is currently empty.")
  } else {

  }
}


function currentLine(line) {
  if(!line.length) {
    return('The line is currently empty.')
  }
    let total = []
    for(let i = 0; i < line.length; i++) {
    total.push(i+1 + ". " + line[i])
  }
    //console.log ('The line is currently: ' + total.join(', '))
    //console.log ('The line is currently: ' + total)
  //  I have to join them by the comma bc they are individual strings not one 
    return ('The line is currently: ' + total.join(', '))
    //return total
    //return('The line is currently: ' + line[i].length + '.' + ' ' + line[i])

}
