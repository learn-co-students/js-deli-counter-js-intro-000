var katzDeli = [];

function takeANumber(katzDeli, name){
  if(katzDeli.length === 0){
    katzDeli.push(name);
    return `Welcome, ${name}. You are number 1 in line.`
  }else{
    katzDeli.push(name);
    return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
  }
}

function nowServing(katzDeli){
  if(katzDeli.length === 0){
    return 'There is nobody waiting to be served!'
  }else{
    let newObject = Object.assign({}, katzDeli);
    katzDeli.shift();
    return "Currently serving " + newObject[0] + ".";

  }
}

function currentLine(katzDeli){
  if(katzDeli.length === 0){
    return 'The line is currently empty.'
  }else{
    let str = 'The line is currently: ';
    for(let i = 0; i < katzDeli.length; i++){
      str = str + `${i+1}. ${katzDeli[i]}, `
    }

    str = str.substring(0, str.length-2);
    return str;
  }
}
