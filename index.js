var takeANumber = (line, name) =>
  {
    line.push(name);
    return `Welcome, ${name}. You are number ${line.length} in line.`
  }
var nowServing = line =>
  {
    if (line.length===0)
      {
        return "There is nobody waiting to be served!";
      }
    else
      {
        let announcement = `Currently serving ${line[0]}.`;
        line.shift();
        return announcement;
      }
  }
var currentLine = line =>
  {
    let announcement = "The line is currently empty.";
    if (line.length === 0)
      {
        return announcement;
      }
    else
      {
        let i = 1;
        announcement = `The line is currently: 1. ${line[0]}`
        do
          {
            announcement = announcement + `, ${i+1}. ${line[i]}`
            i += 1;
          } while (i<line.length)
        return announcement;
      }
  }
