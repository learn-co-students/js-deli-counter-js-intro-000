const takeANumber = (line, name) =>{
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
};

const nowServing = (line) =>{
  if(line.length == 0)
    return 'There is nobody waiting to be served!';
  else {
    let ret = line[0];
    line.shift();
    return `Currently serving ${ret}.`;
  }
};

const currentLine = line =>{
  let ret = "The line is currently"
  if(line.length == 0)
    return ret + " empty.";
  ret += ": ";
  for(let i = 1; i <= line.length; i++)
  {
    ret+= `${i}. ${line[i-1]}`
    if(i+1 < line.length + 1)
      ret += ", ";
  }
  return ret;
};
