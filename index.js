function takeANumber (line, name) {

  line.push(name);

  let length = line.length;

  return `Welcome, ${name}. You are number ${length} in line.`

}


function nowServing (line) {

  if (line.length === 0) {return 'There is nobody waiting to be served!'}
  else {
    let first = line[0];
    line.shift();
    return `Currently serving ${first}.`;
  }
  }

  function currentLine (line) {

    if (line.length === 0) {return `The line is currently empty.`}

    let str  = `The line is currently: `;

    for (let i = 0; i < line.length; i++) {

      i === line.length-1 ? str += `${i+1}. ${line[i]}` : str += `${i+1}. ${line[i]}, ` }

    return str;
    }
