const num = 5

let line = ""
if (typeof num !== 'number') {
  return console.log("Parameter harus angka!")
}
for (let row = 1; row <= num; row++) {
  for (let column = 1; column <= row; column++) {
    line += column
  }
  line += "\n"
}
console.log(line)