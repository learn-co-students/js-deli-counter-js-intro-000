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
        do
          {
            announcement = `The line is currently: 1. ${line[0]}`
          } while (i<line.length)
            {
              announcement = announcement + `, ${i+1}. ${line[i]}`
              i += 1;
            }
        return announcement;
      }
  }
