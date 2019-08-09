function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
};

// console.log(takeANumber(['John', 'Montrezl'], 'Billy'))

let pokemon = ['Cyndaquil', 'Bulbasaur', 'Charmander', 'Squirtle'];
// let pokemon = [];

function nowServing(line) {
  if (line[0] === undefined) {
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${line.shift()}.`;
  };
};

// console.log(nowServing(pokemon));
// console.log(pokemon);

/* var testArray = ['Cat', 'Dog'];

function currentLine(line) {
  line.forEach(arrayFunction);
  function arrayFunction(item, index) {
    return `${index}. ${item}`;
  };
};

console.log(currentLine(testArray));
*/

function newPokemonArray(line) {
  for (let i = 0; i < line.length; i++) {
    line[i] = `${line.indexOf(line[i])+1}. ${line[i]}`;
  };
  return line;
};

function currentLine(line) {
  if (line[0] === undefined) {
    return "The line is currently empty.";
  } else {
      return `The line is currently: ${newPokemonArray(line).join(', ')}`;
      // return `The line is currently: ${line.join(', ')}`;
  };
};

console.log(currentLine(pokemon));
