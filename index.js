function takeANumber(room, person) {
  room.push(person)
  return `Welcome, ${person}. You are number ${room.length} in line.`
};
function nowServing(room) {
  if(!room.length) {
    return "There is nobody waiting to be served!"
  }
    return `Currently serving ${room.shift()}.`
};
function currentLine(room) {
  if (!room.length) {
    return "The line is currently empty."
  }
  const newConst = []
  for (let i = 0, l = room.length; i < l; i++) {
    newConst.push(`${i + 1}. ${room[i]}`)
  }
  return `The line is currently: ${newConst.join(', ')}`
};