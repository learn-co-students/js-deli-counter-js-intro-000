var katzDeli = [];

var takeANumber = (katzDeli,name) => {
  katzDeli.push(name);
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`;
};
