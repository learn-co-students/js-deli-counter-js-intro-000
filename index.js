function takeANumber(ary, name){
  ary.push(name)
  return `Welcome, ${name}. You are number ${(ary.indexOf(name)+1)} in line.`
}

function nowServing(ary, name){
  var words = ""
  if(ary.length <= 0){
    words = "There is nobody waiting to be served!"
  } else {
    words =  `Currently serving ${ary[0]}.`
    ary.shift()
  }
  return words
}

function currentLine(ary){
  var words = ""
  if(ary.length <= 0){
    words = "The line is currently empty."
  } else {
    words = "The line is currently: "
    for(var i=0; i<ary.length; i++){
      words += `${(ary.indexOf(ary[i]))+1}. ${ary[i]}, `
    }
  }
  if(words.includes("The line is currently: ")){
    words = words.slice(0, -2)
  }
  return words
}
