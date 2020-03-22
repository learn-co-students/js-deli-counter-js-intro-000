function takeANumber (line, name){
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing (line){
  var firstPerson = line[0]
  if (line.length === 0){
    return "There is nobody waiting to be served!"
  }
  else {
    line.shift()
    return `Currently serving ${firstPerson}.`
    }
  }

  function currentLine (line){
      var statement = "The line is currently: "
    if(line.length === 0){
      return "The line is currently empty."
    }
    else {
      for (let i = 0; i < line.length; i++){
        if (i === 0){
          statement += [i+1] + ". " + line[i]
        }
        else {
          statement += ", " + [i+1] + ". " + line[i]
        }

        }
      }
          return statement
    }
