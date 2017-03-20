var katzDeli=[]
function takeANumber(katzDeli,people){
  var temp=[]
  if(katzDeli.length===0){
  katzDeli.push(people)
    for(let i=0;i<katzDeli.length;i++){
      temp.push(`Welcome, ${katzDeli[i]}. You are number ${i+1} in line.`)
    };
  }else{
    katzDeli.push(people)
        temp.push(`Welcome, ${katzDeli[katzDeli.length-1]}. You are number ${katzDeli.length} in line.`)
  }
  
  return temp
  
}

function nowServing(line){
  if(line.length>0){
    return `Currently serving ${line.shift()}.`
  }else{
    return 'There is nobody waiting to be served!'
  }
}


function currentLine(line){

  if(line.length>0){
    var temp='The line is currently:'
    for(let i =0;i<line.length;i++){
      if(i!=line.length-1){
        temp +=` ${i+1}. ${line[i]},`
      }else{
        temp +=` ${i+1}. ${line[i]}`
      }
    }
    return temp
  }else{
    return `The line is currently empty.`
  }
}