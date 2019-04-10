function takeANumber(joeDeli, Didi){
  joeDeli.push(Didi)
  //for(i= 0; i < joeDEli.length; i++){

  return `Welcome, ${joeDeli[joeDeli.length-1]}. You are number ${joeDeli.length} in line.`
}

function nowServing(joeDeli){
  if (joeDeli.length ===0){
    return `There is nobody waiting to be served!`
  }else{
    return `Currently serving ${joeDeli.shift()}.`
  }
}

function currentLine(joeDeli){
  let line = ""
  if (joeDeli.length ===0){

    line = "The line is currently empty."
  }else{

    let newJoeDeli = []
   for (let i = 0; i < joeDeli.length; i++){
      newJoeDeli[i] =`${i+1}. ${joeDeli[i]}`
   }
   console.log (newJoeDeli)
   line =  "The line is currently: " + newJoeDeli.join(', ')
  }
return line
}
currentLine(['hari', 'julie', 'marie'])
