var takeANumber = function(line, name) {
  line.push(name);

  return `Welcome, ${name[length - 1]}. You are number ${line.length} in line.`;
};

var nowServing = function() {};

var currentLine = function(line) {
  return line.length === 0 ? 'The line is currently empty.'
    : line.reduce(function(string, name, index) {
      return string += index === 0 ? `${index + 1}. ${name}` : `, ${index + 1}. ${name}`;
    },'The line is currently: ');
};
