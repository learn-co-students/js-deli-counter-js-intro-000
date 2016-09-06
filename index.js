var katzDeli = [];

/* deli takeANumber adds a person to the line:
ReferenceError: takeANumber is not defined */


function takeANumber(katzDeliLine, personName) {
   katzDeliLine.push(personName);
return `'Welcome, ${personName}. You are number ${katzDeliLine.length} in line.'`;
}
