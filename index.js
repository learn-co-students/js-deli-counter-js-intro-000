function takeNumber(lineStatus, name){
  lineStatus.push(name)
  lineStatus = lineStatus.lenght + 1
  return `Welcome ${name}. You are ${lineStatus}`
}