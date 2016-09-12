var takeANumber = (line, name) => {
  line.push(name);
  let position = line.length;
  return `Welcome, ${name}. You are number ${position} in line.`;
}

var nowServing = (line) =>{
  if(!line.length){
    return 'There is nobody waiting to be served!';
  }else{
    return `Currently serving ${line.shift()}.`
  }
}

var currentLine = (line) =>{
  if(!line.length){
    return "The line is currently empty.";
  }else{
    let list = [];
    line.forEach(function(name, index){
        list.push(`${index+1}. ${name}`);
    });
    return `The line is currently: ${list.join(', ')}`
  }
}
