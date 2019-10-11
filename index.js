
var katzDeliLine = [];

function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  let next = line[0];
  line.shift();
  return `Currently serving ${next}.`;
}


function currentLine( line){

  let sfx = (line.length === 0) ? " empty." : `: ${enumLine()}`;
  return `The line is currently${sfx}`;

  function enumLine() {
    var store = "";
    for (let i=0; i < line.length; i++) {
      let pfx = ((store === "") ? "" : ", ");
      store +=  `${pfx}${i + 1}. ${line[i]}`
    }
    return store;
  }
}
