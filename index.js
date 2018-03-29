var takeANumber = function(line, name) {
  line.push(name);

  return `Welcome, ${line[line.length - 1]}. You are number ${line.length} in line.`;
};

var nowServing = function(line) {
  if (line.length > 0) {
    var customer = line.shift();
    return `Currently serving ${customer}.`;
  }

  return 'There is nobody waiting to be served!';
};

var currentLine = function(line) {
  return line.length === 0 ? 'The line is currently empty.'
    : line.reduce(function(string, name, index) {
      return string += index === 0 ? `${index + 1}. ${name}` : `, ${index + 1}. ${name}`;
    },'The line is currently: ');
};
